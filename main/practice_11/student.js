import {Person} from "./person";
class Student extends Person {
  constructor(id, name, age, klass) {
    super(id, name, age);
    this.klass = klass;
  }
  introduce() {
    return (this.klass.leader && this.id === this.klass.leader.id) ? (super.introduce() + ' I am a Student. I am Leader of Class ' + this.klass.number + '.') : (super.introduce() + ' I am a Student. I am at Class ' + this.klass.number + '.');
  }
}
export {Student};