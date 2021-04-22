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
                text: 'Going out having a walk',
                completed: false,
            },
        ],
    },
    methods: {

    },
});
