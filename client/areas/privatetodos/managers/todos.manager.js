Template.privatetodos.helpers({
    todoItems: () => Privatetodos.find()
});

Template.privatetodos.events({
    'submit .newTodo': event => {
        event.preventDefault();
        const text = event.target.todoText.value;
        Privatetodos.insert({
            text: text,
            createdAt: new Date(),
            userId: Meteor.userId()
        }, (error, result) => {
            if (error) {
                alert(error);
            } else {
                event.target.todoText.value = null;
            }
        });
    },
    'click .delete': function () {
        Privatetodos.remove(this._id);
    },
    'click .toggleChecked': function () {
        Privatetodos.update(this._id, {
            $set: { checked: !this.checked }
        });
    }
});