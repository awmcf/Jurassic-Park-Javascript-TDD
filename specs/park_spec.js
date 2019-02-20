const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('bird', 'omnivore', 40);
    dinosaur3 = new Dinosaur('troodon', 'herbivore', 30);
    dinosaurs = [dinosaur1, dinosaur2];
    park = new Park('Dinoland', 10, dinosaurs);
  });


  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Dinoland');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.strictEqual(actual, dinosaurs);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur3);
    const expected = [dinosaur1, dinosaur2, dinosaur3];
    assert.deepEqual(park.dinosaurs, expected);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaur();
    const expected = [dinosaur1, dinosaur2];
    assert.deepEqual(park.dinosaurs, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.topDinosaur(dinosaurs);
    const expected = dinosaur1;
    assert.deepEqual(park.dinosaurs.topDinosaur, expected);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.findSpecies(dinosaurs, 'bird');
    const expected = [dinosaur2];
    assert.strictEqual(park.dinosaurs.findspecies, expected);
  });

  it('should be able to remove all dinosaurs of a particular species');

});
