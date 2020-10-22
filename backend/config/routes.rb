Rails.application.routes.draw do
 resources :shows
 resources :types
 resources :genres

post '/signup', to: "users#create"
post '/login', to: "users#login"

end
