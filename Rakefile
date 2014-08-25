require "rubygems"
require 'rake'
require 'yaml'
require 'time'

desc "Migrate Speaker Data to post templates"
task :speakers do

  #delete old generated speaker templates
  FileUtils.rm_rf('./speakers/')
  FileUtils.mkdir('speakers')
  #generate new speaker templates

  speakers = YAML.load_file("_data/speakers.yml")
  speakers.each do |speaker|
    fname = speaker['image-url'].split('.').first.downcase.gsub(/[^0-9a-z ]/i, '')
    fname = "speakers/#{fname}.html"
    open(fname, 'w') do |post|
      post.puts "---"
      post.puts "layout: speaker"
      post.puts "title: Speakers - #{speaker['name']}"
      post.puts "name: #{speaker['name']}"
      post.puts "image-url: #{speaker['image-url']}"
      post.puts "tagline: #{speaker['tagline']}"
      post.puts "bio: #{speaker['bio']}"
      post.puts "abstract: #{speaker['abstract']}"
      post.puts "talk_time: #{speaker['talk_time']}"
      post.puts "talk_abstract: #{speaker['talk_time']}"
      post.puts "talk_location: #{speaker['talk_time']}"
      post.puts "---"
    end
  end
end # task :speaker_migrate
