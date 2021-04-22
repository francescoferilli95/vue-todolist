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
        }
    },
});
