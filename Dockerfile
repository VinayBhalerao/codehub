FROM quay.io/3scale/ruby:2.0
MAINTAINER Michal Cichra <michal@3scale> # 2014-06-11

RUN apt-get update && apt-get install -y --assume-yes openjdk-7-jre

ADD Gemfile /tmp/codehub/
ADD Gemfile.lock /tmp/codehub/

WORKDIR /tmp/codehub/
RUN bundle install --jobs `grep -c processor /proc/cpuinfo`

WORKDIR /opt/codehub/

ADD . /opt/codehub

ENTRYPOINT ["rake"]
