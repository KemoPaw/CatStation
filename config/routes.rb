Rails.application.routes.draw do

  root to:'static_pages#root'
  namespace :api, defaults: {format: :json} do
      resources :users, only: [:create, :index, :show]
      resource :session, only: [:new, :create, :destroy]
  end
  #look for root method in the static pages controller
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
