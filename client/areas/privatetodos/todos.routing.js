Router.route('privatetodos',
    {
        path: '/privatetodos',
        waitOn: () => Meteor.subscribe('privatetodos')
    });