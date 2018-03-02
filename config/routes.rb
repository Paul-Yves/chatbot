Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'message/index'
  post 'message/', to: 'message#create'

  get 'chat/index'

  root 'chat#index'
end
