require 'bundler'
Bundler.require

use RACK::CanonicalHost, ENV['CANONICAL_HOST'] if ENV['CANONICAL_HOST']

require 'sprockets'
map '/assets' do
  sprockets = Sprockets::Environment.new
  sprockets.append_path 'assets/javascripts'
  sprockets.append_path 'assets/stylesheets'
  run sprockets
end

require 'sinatra'
require './apgabe'
run APGabe::Application
