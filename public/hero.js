console.log("Hello from Hero JS");

var componentVue = new Vue({
  el: "#component",
  data: {
    numbers: [1,2,3,4,5,6],
    title: "hello from sample",
    heros: [],
    hero: {}
  },
  methods: {
    deleteHero: function(id){
      if(confirm("Are you sure you want to destroy your nemesis?")){
        $.ajax({
          url:"/api/superheroes/"+ id,
          method: 'DELETE'
        }).done(function(data){
          window.location = '/goodGuys'
        })
      }
    }
  }
});
//makes a git request to superheros
fetch('/api/superheroes')
  .then(function (blob) {
    return blob.json();
  })
  .then(function (data) {
    console.table(data);
      componentVue.hero = data.data[2]
      componentVue.heros = data.data;
  })
