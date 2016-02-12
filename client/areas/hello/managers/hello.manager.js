Template.hello.helpers({
    counter: () => Session.get('counter'),
    serverStartup: () => Meteor.settings.public.serverStartup
});

Template.hello.events({
    'click button': () =>
        // increment the counter when button is clicked
        Session.set('counter', Session.get('counter') + 1)
});