Rails.application.routes.draw do
  
  resources :products, except: [:index]
  resources :users, except: [:create, :show]
 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html


  post "/sold", to: "order_items#create"
  get "/everything_sold", to: "order_items#index"


  get "/styles", to: "products#index"


  post "/login", to: "sessions#create"
  delete "/logout/:id", to: "sessions#destroy"

  
  post "/register", to: "users#create"
  patch "/orders/:id", to: "orders#update"
  get "/orders", to: "orders#index"
  post "/orders", to: "orders#create"
  delete "/orders", to: "orders#destroy"

  get "/orders", to: "orders#index"

  post "/products/add", to: "products#create" 

end
