'use strict';

const { createApp } = Vue;

createApp({
  data() {
    return {
      toDoItem: [{
        text: '',
        done: '',

      }]
    }
  }
}).mount('#app')