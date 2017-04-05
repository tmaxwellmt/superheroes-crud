console.log("Hello from Hero JS");

var sampleVue = new Vue({
  el: '#sample',
  data: {
    numbers: [1,2,3,4,5,6],
    title: "Hello from Sample",
    heros: []
  },
});
//makes a git request to superheros
fetch('/superheroes')
  .then(function (blob) {
    return blob.json();
  })
  .then(function (data) {
    console.table(data);
    sampleVue.heros = data
  })
