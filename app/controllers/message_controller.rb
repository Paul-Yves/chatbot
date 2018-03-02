class MessageController < ApplicationController
  before_action :identify_user
  def index
    render json: Message.where(author: [nil, @current_user]).all
  end

  def create
    msg_content = params.require(:message)
    msg = Message.create!(author: @current_user, type: 'text', content: msg_content)

    render json: {message: msg, answer: nil}
  end

  private

  def identify_user
    # should be replaced by proper login for a real app
    @current_user = 'me'
  end
end
