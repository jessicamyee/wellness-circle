Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  
  resources :wellness_data, except: :show
  resources :users, only: :create
  resources :user_share, only: [:index, :create]
  get '/user_share/list', to: 'user_share#list'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
