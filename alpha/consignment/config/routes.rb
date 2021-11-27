Rails.application.routes.draw do
  
  
  resources :order_items
  resources :products, except: [:index]
  resources :users, except: [:create, :show]
 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "/styles", to: "products#index"

  get "/me/:id", to: "users#show"


  patch "/order_item/:id", to: "order_items#update"

  post "/login", to: "sessions#create"

  post "/register", to: "users#create"


  delete "/logout/:id", to: "sessions#destroy"

  patch "/orders/:id", to: "orders#update"
  get "/orders", to: "orders#index"
  post "/orders", to: "orders#create"
 
  delete "/orders", to: "orders#destroy"

  get "/orders", to: "orders#index"

  post "/products/add", to: "products#create" 

   #get "sale/:id", to: "products#show"
   # get "/orders", to: "orders#current_order"
    # post "/sale", to: "products#create" 
end
