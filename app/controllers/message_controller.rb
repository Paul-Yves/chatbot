class MessageController < ApplicationController
  before_action :identify_user
  def index
    render json: Message.where(author: [nil, @current_user]).all
  end

  def create
    msg_content = params.require(:message)
    if msg_content.size > 512
      return render json: {error: 'Message too long, 512 characters max'}, type: 400
    end
    msg = Message.create!(author: @current_user, message_type: 'text', content: msg_content)
    answer = RecastService.new.perform(msg, @current_user)
    render json: {message: msg, answer: answer}
  end

  private

  def identify_user
    # should be replaced by proper login for a real app
    @current_user = 'me'
  end
end
