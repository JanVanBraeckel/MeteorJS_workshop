Meteor.startup(() => {
    Meteor.settings.public.serverStartup = new Date().toString();

    Meteor.publish('todos', () => Todos.find());

    Todos.allow({
        insert: (userId, doc) => true, //in het echt checken op rechten
        update: (userId, doc, fields, modifier) => true, //in het echt checken op rechten
        remove: (userId, doc) => true, //in het echt checken op rechten
    });

    Meteor.publish('privatetodos', function () {
        Privatetodos.find({
            userId: this.userId
        });
    });

    Privatetodos.allow({
        insert: (userId, doc) => userId && doc.userId === userId, //in het echt checken op rechten
        update: (userId, doc, fields, modifier) => doc.userId === userId, //in het echt checken op rechten
        remove: (userId, doc) => doc.userId === userId, //in het echt checken op rechten
    });
});