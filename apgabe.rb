require 'sinatra/content_for'

module APGabe
  class Application < Sinatra::Base
    helpers Sinatra::ContentFor

    get '/' do
      erb :home
    end
    
  end
end
