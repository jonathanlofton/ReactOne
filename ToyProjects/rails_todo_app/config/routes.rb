Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
    resource :session, only: [:new, :create, :destroy], defaults: {format: 'json'}
    resources :users, only: [:new, :index, :create, :destroy, :show], defaults: {format: 'json'}
    resources :blog_posts, only: [:new, :index, :show, :create, :destroy], defaults: {format: 'json'}
    resources :comments, only: [:new, :show, :create], defaults: { form: 'json'}
    root to: 'static_pages#root'
end
