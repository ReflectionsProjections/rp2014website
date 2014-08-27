#!/usr/bin/ruby

require "bundler"
Bundler.require

DATA_PATH = './_data'

BASE_PATH = '/api'

get "#{BASE_PATH}/:resource" do
  content_type :json
  YAML.load_file("#{DATA_PATH}/#{params[:resource]}.yml").to_json
end
