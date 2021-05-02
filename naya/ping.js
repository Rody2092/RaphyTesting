exports.run = async (client, message, args) => {
  const msg = await message.inlineReply("<a:carregando:836101628083437608>")
  msg.edit(`⏳ Pings\nAPI ${Math.round(client.ws.ping)}ms\nTiming Responsive ${msg.createdTimestamp - message.createdTimestamp}ms`)
}