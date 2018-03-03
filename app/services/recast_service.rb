require 'recastai'

class RecastService

  RECAST_TOKEN = 'e9ec12730e7a0063d6a8349946642c0f' # this should belong to secret but as demo of a specific bot too, it needs to be versioned

  def perform(message, user_id)
    build = RecastAI::Build.new(RECAST_TOKEN, 'en')
    response = build.dialog({ type: 'text', content: message.content }, user_id)
    if response.messages.first
      Message.create!(author: nil, message_type: response.messages.first.type, content: response.messages.first.content)
    end
  end
end