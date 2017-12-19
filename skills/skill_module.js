/*

Botkit Studio Skill module to enhance the "example_soupme" script

*/


module.exports = function(controller) {
    // define a before hook
    // you may define multiple before hooks. they will run in the order they are defined.
    // See: https://github.com/howdyai/botkit/blob/master/docs/readme-studio.md#controllerstudiobefore
    controller.studio.before('example_soupme', function(convo, next) {

        // do some preparation before the conversation starts...
        // for example, set variables to be used in the message templates
        // convo.setVar('foo','bar');

        console.log('BEFORE: example_soupme');
        // don't forget to call next, or your conversation will never continue.
        next();

    });

    /* Validators */
    // Fire a function whenever a variable is set because of user input
    // See: https://github.com/howdyai/botkit/blob/master/docs/readme-studio.md#controllerstudiovalidate
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    // Validate user input: soup_size
    controller.studio.validate('example_soupme','soup_size', function(convo, next) {

        var value = convo.extractResponse('soup_size');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: example_soupme VARIABLE: soup_size');

        // always call next!
        next();

    });


    // Validate user input: selected_soup
    controller.studio.validate('example_soupme','selected_soup', function(convo, next) {

        var value = convo.extractResponse('selected_soup');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: example_soupme VARIABLE: selected_soup');

        // always call next!
        next();

    });

    /* Thread Hooks */
    // Hook functions in-between threads with beforeThread
    // See: https://github.com/howdyai/botkit/blob/master/docs/readme-studio.md#controllerstudiobeforethread
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    // Before the default thread starts, run this:
    controller.studio.beforeThread('example_soupme','default', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *example_soupme*, about to start the thread *default*');

        // always call next!
        next();
    });

    // Before the soup_selected thread starts, run this:
    controller.studio.beforeThread('example_soupme','soup_selected', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *example_soupme*, about to start the thread *soup_selected*');

        // always call next!
        next();
    });

    // Before the invalid_soup thread starts, run this:
    controller.studio.beforeThread('example_soupme','invalid_soup', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *example_soupme*, about to start the thread *invalid_soup*');

        // always call next!
        next();
    });

    // Before the soup_order_complete thread starts, run this:
    controller.studio.beforeThread('example_soupme','soup_order_complete', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *example_soupme*, about to start the thread *soup_order_complete*');

        // always call next!
        next();
    });

    // Before the invalid_size thread starts, run this:
    controller.studio.beforeThread('example_soupme','invalid_size', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *example_soupme*, about to start the thread *invalid_size*');

        // always call next!
        next();
    });

    // Before the soup_size thread starts, run this:
    controller.studio.beforeThread('example_soupme','soup_size', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *example_soupme*, about to start the thread *soup_size*');

        // always call next!
        next();
    });


    // define an after hook
    // you may define multiple after hooks. they will run in the order they are defined.
    // See: https://github.com/howdyai/botkit/blob/master/docs/readme-studio.md#controllerstudioafter
    controller.studio.after('example_soupme', function(convo, next) {

        console.log('AFTER: example_soupme');

        // handle the outcome of the convo
        if (convo.successful()) {

            var responses = convo.extractResponses();
            // do something with the responses

        }

        // don't forget to call next, or your conversation will never properly complete.
        next();
    });
}
