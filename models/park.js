const Park = function (name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

module.exports = Park;

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function() {
  this.dinosaurs.pop;
};

Park.prototype.topDinosaur = function(dinosaurs) {
  this.dinosaurs.guestsAttractedPerDay.max(dinosaurs);
};

Park.prototype.findSpecies = function(dinosaurs, species) {
  const dinosaursOfSpecies = [];
  for (dinosaur of this.dinosaurs)
    if (dinosaur == species) {
      dinosaursOfSpecies.push(dinosaur);
    }
    this.findSpecies = dinosaursOfSpecies;
  };
