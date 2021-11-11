Rails.application.routes.draw do
  
  
  resources :order_items
  resources :orders
  resources :products
  resources :users, only: [:index, :show, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html


  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  post "/register", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  get "/orders", to: "orders#index"

end
