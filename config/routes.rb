Rails.application.routes.draw do
  resources :users, only: [:show, :create]

  post "/login", to: "sessions#create"
  delete '/logout', to: 'sessions#destroy'
 
end
