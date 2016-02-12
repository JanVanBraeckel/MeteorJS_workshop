Router.route('todos',
    {
        path: '/todos',
        waitOn: () => Meteor.subscribe('todos')
    });