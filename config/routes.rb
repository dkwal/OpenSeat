Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create] do
      resources :reservations, only: [:index]
      resources :reviews, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :restaurants, only: [:index, :show] do
      resources :reviews, only: [:create, :update]
    end
    resources :reservations, only: [:create, :show, :update, :destroy]
    resources :reviews, only: [:show, :destroy]
    resources :favorites, only: [:create, :destroy]
  end
  root to: "static_pages#root"
end
