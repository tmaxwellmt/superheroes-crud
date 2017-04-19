var SuperHero = require('../models/superhero');
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);

var server = require('../server');


describe('/GET all heroes', function() {
  it('returns heroes from database', function(done) {
    chai.request(server)
      .get('/api/superheroes')
      .end(function(err, res) {
        res.should.have.status(200);
        res.body.should.have.property('message').eql('Found your Heroes')
        res.body.data.should.be.a('array')

        done()
      })
  })
})

describe('/POST new hero', function() {
  it('can create a new hero', function(done) {

    var hero = {
      name: "Batman",
      superPower: "Super Cool",
      universe: "zzzz",
      evil: "Yes",
      rank: 2
    }

    chai.request(server)
      .post('/api/superheroes')
      .send(hero)
      .end(function (err, res) {
        res.should.have.status(200);
        res.body.should.have.property('message').eql('Hero Created!');
        res.body.sh.should.have.property('name').eql("Batman");
        res.body.sh.should.have.property('superPowers');
        done()
      })
  });

  it('will not make hero without name', function () {
    var hero = {
      name: "Batman",
      superPower: "Super Cool",
      universe: "zzzz",
      evil: "Yes",
      rank: 2
    }

    chai.request(server)
      .post('/api/superheroes')
      .send(hero)
      .end(function (err, res) {
        res.body.should.have.property('errors');
        res.body.errors.name.should.have.property('kind').eql('required');
        done()
      })
  });
})

describe('/GET a single hero', function(){
  it('should return hero by name', function(done){

    var newSuper = new SuperHero({ name: 'Fred'});

    newSuper.save(function(err, hero){
      chai.request(server)
      .get('/api/superheroes/' + hero._id)
      .send(hero)
      .end(function(err, res){
        res.should.have.status(200);
        res.body.should.be.a('Object');
        res.body.should.have.property('name');
        done()
      })
    })
  })
})

describe('/EDIT a hero', function(){
  it('I can update a hero', function(done){
    var hero = new SuperHero({ name: "Batman"});
    hero.save(function(err, hero){
      chai.request(server)
      .put('/api/superheroes/'+ hero._id)
      .send({ name: "Batman" })
      .end(function(err, res){
        res.should.have.status(200);
        res.body.should.have.property('message').eql('Hero updated!');
        res.body.hero.should.have.property('name').eql('Batman');
        done();
      })
    })
  })
})

describe('DELETE A HERO', function(){
  it('Can delete a hero by id', function(done){
    var hero = new SuperHero({ name: "Batman" })
    hero.save(function(err, hero) {
      chai.request(server)
        .delete('/api/superheroes/' + hero._id)
        .end(function(err, res){
          res.should.have.status(200);
          done();
        })
    })
  })
});
