exports.run = async (client, message, args) => {
  exports.run = async (client, message, args) => {
    const msg = await message.inlineReply(":carregando:")
    msg.edit(`⏳ Pings\nAPI ${Math.round(client.ws.ping)}ms\nTiming Responsive ${msg.createdTimestamp - message.createdTimestamp}ms`)
  }
}