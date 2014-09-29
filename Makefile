PROJECT := $(subst @,,$(notdir $(shell pwd)))
RUN = docker run --rm --env-file .env
NAME = $(PROJECT)-build

all: clean build test

test: run

.env :
	touch .env

run: .env
	$(RUN) --name $(NAME) $(PROJECT) $(CMD)

deploy: CMD = deploy
deploy: run

pull:
	- docker pull quay.io/3scale/ruby:2.0

bash: .env
	$(RUN) -t -i  --entrypoint /bin/bash $(PROJECT)

build: pull
	docker build -t $(PROJECT) .

clean:
	- docker rm --force $(NAME)
