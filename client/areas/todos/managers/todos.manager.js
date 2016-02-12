Template.todos.helpers({
    todoItems: () => Todos.find()
});

Template.todos.events({
    'submit .newTodo': event => {
        event.preventDefault();
        const text = event.target.todoText.value;
        Todos.insert({
            text: text,
            createdAt: new Date()
        }, (error, result) => {
            if (error) {
                alert(error);
            } else {
                event.target.todoText.value = null;
            }
        });
    },
    'click .delete': function () {
        Todos.remove(this._id);
    },
    'click .toggleChecked': function () {
        Todos.update(this._id, {
            $set: { checked: !this.checked }
        });
    }
});