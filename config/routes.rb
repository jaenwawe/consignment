Rails.application.routes.draw do
  
  
  resources :order_items
  resources :orders
  resources :products
  resources :users
  # resources :users, only: [:index, :show, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "/styles", to: "products#index"

  get "/me/:id", to: "users#show"
  post "/login", to: "sessions#create"

  post "/register", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  get "/orders", to: "orders#index"
 
  post "/orders", to: "orders#index"
  post "/orders", to: "orders#create"
  patch "/orders", to: "orders#update"
  delete "/orders", to: "orders#destroy"
  get "/orders", to: "orders#current_order"

  # post "/sale", to: "products#create" 
  post "/products/add", to: "products#create" 

  
  get "sale/:id", to: "products#show"

end
