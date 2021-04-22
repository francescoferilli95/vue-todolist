/**
 * 
 *  VUE TODO LIST APP
 * 
/**/

const app = new Vue({
    el: '#app',
    data: {
        todos: [
            {
                text: 'Do my homework',
                completed: false,
            },
            {
                text: 'Study Vue',
                completed: false,
            },
            {
                text: 'Have some relax after homework',
                completed: false,
            },
            {
                text: 'Starting a new project',
                completed: false,
            },
            {
                text: 'Going out for a walk',
                completed: false,
            },
        ],
        newTodo: '',
        editTodo: {
            visibility: false,
            text: '',
            index: null,
        },
    },
    methods: {
        /**
         * ADD NEW TODO TO THE LIST AND RESET THE INPUT AND GIVE FOCUS TO THE INPUT
         */
        addTodo() {

            if(this.newTodo !== '') {
                this.todos.push({
                    text: this.newTodo,
                    completed: false,
                });
            }

            this.newTodo = '';
            this.$todoInput.focus();
        },
        /**
         * REMOVE THE SPECIFIED TODO FROM THE LIST USING HIS INDEX
         */
        removeTodo(index) {
            this.todos.splice(index, 1);
        },
        /**
         *  UPDATE COMPLETED STATUS 
         */
        updateStatus(index) {
            this.todos[index].completed = ! this.todos[index].completed;
        },
        /**
         * SHOW MODAL TO UPDATE THE TODO TEXT
         */
        showEdit(index) {
            this.editTodo.text = this.todos[index].text;
            this.editTodo.index = index;
            this.editTodo.visibility = true;
        },
        /**
         * UPDATE THE TEXT OF THE TODO
         */
        updateTodo() {
            this.todos[this.editTodo.index].text = this.editTodo.text;

            this.closeEdit();
        },
        /**
         * CLOSE THE MODAL
         */
        closeEdit() {
            this.editTodo.visibility = false;
            this.editTodo.text = '';
            this.editTodo.index = null;
        }
    },
});
