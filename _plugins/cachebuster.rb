# 
# This script appends an MD5 hash of Time.now and appends it to the end of all the static assets we're loading, so it acts as a cachebuster.  
#

require 'digest/md5'
 
module Jekyll
  class Cachebuster < Liquid::Tag
 
    def render(context)
      "#{Digest::MD5.hexdigest(Time.now.to_s)}"
    end
  end
end
 
Liquid::Template.register_tag('cachebuster', Jekyll::Cachebuster)