console.log("Hello from Hero JS");

var componentVue = new Vue({
  el: '#component',
  data: {
    numbers: [1,2,3,4,5,6],
    title: "Hello from the heroes",
    heros: [],
    hero: {}
  },
});
//makes a git request to superheros
fetch('/api/superheroes')
  .then(function (blob) {
    return blob.json();
  })
  .then(function (data) {
    console.table(data);
      componentVue.hero = data[2]
      componentVue.heros = data;
  })
