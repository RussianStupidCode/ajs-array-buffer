export default class Actor {
  constructor(attack, distance) {
    this.baseAttack = attack;
    this.distance = distance;
  }

  get attack() {
    return Math.max((1 - 0.1 * (this.distance - 1)) * this.baseAttack, 0);
  }

  set attack(attack) {
    this.baseAttack = attack;
  }

  get stoned() {
    return Math.max(this.attack - Math.log2(this.distance) * 5, 0);
  }
}
