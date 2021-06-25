const Guest = function (name, room) {
  this.name = name;
  this.room = room;
};

Guest.prototype.showGuestInfo = function () {
  console.log(`name: ${this.name}, room: ${this.room}`);
};

console.log(Guest.prototype); // {constructor: ƒ}

const mango = new Guest('Mango', 28);

console.log(mango);

const poly = new Guest('Poly', 33);

mango.showGuestInfo();
poly.showGuestInfo();