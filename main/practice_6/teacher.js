import {Person} from "./person";
class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }
  introduce() {
    return (this.klass != undefined) ?(super.introduce() + ' I am a Teacher. I teach Class ' + this.klass + '.'):(super.introduce() + ' I am a Teacher. I teach No Class.');
  }
}
export {Teacher};