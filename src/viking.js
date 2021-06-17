// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
    //this.theDamage = 10;
  }
  attack = () => {
    //console.log('Odin is with us');
    return this.strength;
  };
  // receiveDamage = (theDamage) => {
  //   //console.log('Shield Wall!');
  //   this.health -= theDamage;
  // };
  receiveDamage(theDamage) {
    console.log('Damage');
    this.health -= theDamage;
    return this.health;
  }
}
let Percy = new Soldier(50, 50);
let Achilles = new Soldier(30, 60);

Achilles.receiveDamage(Percy.attack());
console.log(Percy, Achilles);
//let soldierObj = new Soldier(100, 100);

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage = (theDamage) => {
    //console.log(this.health);
    this.health -= theDamage;
    //console.log(this.health);
    if (this.health > 0) {
      return `${this.name} has received ${theDamage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  };
  battleCry = () => {
    return 'Odin Owns You All!';
  };
}

let Bjorn = new Viking('Bjorn', 3000, 100);
console.log(Bjorn.battleCry());
console.log(Bjorn.receiveDamage(Percy.attack()));
console.log(Bjorn);
//let vikingObj = new Viking('Bjorn Ironside', 1000, 1000);

// Saxon
class Saxon extends Soldier {
  receiveDamage = (theDamage) => {
    let health = super.receiveDamage(theDamage);
    console.log(health);

    if (health <= 0) {
      return `A Saxon has died in combat`;
    } else {
      return `A Saxon has received ${this.theDamage} points of damage`;
    }
    // this.health -= theDamage;
    // if (this.health > 0) {
    //   return `A Saxon has received ${theDamage} points of damage`;
    // } else {
    //   return `A Saxon has died in combat`;
    // }
  };
}
let Alfred = new Saxon(150, 40);
console.log(Alfred.receiveDamage(Bjorn.attack()));

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking = (viking) => {
    this.vikingArmy.push();
  };

  addSaxon = (saxon) => {
    this.saxonArmy.push();
  };

  vikingAttack = () => {};

  saxonAttack = () => {};

  showStatus = () => {};
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
