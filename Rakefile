require 'dotenv'

task default: :build

desc 'build jekyll site'
task build: :env do
  system('jekyll', 'build')
end

desc 'start server'
task server: :env do
  puts "Starting server for #{ENV['JEKYLL_ENV']}"
  system('jekyll', 'serve', '-w')
end

task :env do
  Dotenv.load('.env')
end

desc 'deploy to s3'
task deploy: :build do
  system('s3_website', 'push')
end

desc 'dry deploy'
task test: :build do
  system('s3_website', 'push', '--dry-run')
end
