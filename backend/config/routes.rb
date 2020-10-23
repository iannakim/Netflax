Rails.application.routes.draw do
 resources :shows
 resources :types
 resources :genres

post '/signup', to: "users#create"
post '/login', to: "users#login"

post '/list', to: "lists#create"
post '/findlist', to: "lists#findlist"

post '/addtolist', to: "add_to_lists#create"
post '/mylist', to: "add_to_lists#index"

delete '/deleteItem/:id', to: "add_to_lists#delete"


end
