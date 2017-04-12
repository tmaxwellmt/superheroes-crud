console.log("Hello from Villain JS");

var componentVue = new Vue({
  el: '#component',
  data: {
    numbers: [1,2,3,4,5,6],
    title: "Hello from the villains",
    villains: [],
    villain: {}
  },
});

fetch('/api/villains')
  .then(function (blob) {
    return blob.json();
  })
  .then(function (data) {
    console.table(data);
      componentVue.villain = data[2]
      componentVue.villains = data;
  })
