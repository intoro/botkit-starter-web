module.exports = function(controller) {

  controller.on('hello', function(bot, message) {

    // a new session with an unknown user has begun
    bot.reply(message, 'Hello! how are you today?.');
  });

  controller.on('welcome_back', function(bot, message) {

    // a known user has started a new, fresh session
//    bot.reply(message, 'Hello again. I still need to be configured.');

  });

  controller.on('reconnect', function(bot, message) {

    // the connection between the client and server experienced a disconnect/reconnect
    bot.reply(message, 'Some sub-space interference just caused our connection to be interrupted. But I am back now.');

  });


}
