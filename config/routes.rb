Rails.application.routes.draw do
  get 'password_resets/new'

  get 'password_resets/edit'

  root                           'static_pages#home'
  get    'help'               => 'static_pages#help'
  get    'about'              => 'static_pages#about'
  get    'contact'            => 'static_pages#contact'
  get    'spotify'            => 'static_pages#spotify'
  get    'dan-graham-domains' => 'static_pages#dan-graham-domains'
  get    'signup'             => 'users#new'
  get    'login'              => 'sessions#new'
  post   'login'              => 'sessions#create'
  delete 'logout'             => 'sessions#destroy'
  resources :users
  resources :account_activations, only: [:edit]
  resources :password_resets,     only: [:new, :create, :edit, :update]
  resources :microposts,          only: [:create, :destroy]
end
