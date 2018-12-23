import {Person} from "./person";
class Teacher extends Person {
  constructor(name, age, id, klass) {
    super(name, age, id);
    this.klass = klass;
  }
    introduce() {
    return (this.klass != undefined) ?(super.introduce() + ' I am a Teacher. I teach Class ' + this.klass.number + '.'):(super.introduce() + ' I am a Teacher. I teach No Class.');
  }
}
export {Teacher};