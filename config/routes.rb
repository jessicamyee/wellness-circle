Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  
  resources :wellness_data, except: :show
  resources :users, only: :create
  resources :user_shares, only: [:index, :create]
  get '/user_shares/list', to: 'user_shares#list'
end
