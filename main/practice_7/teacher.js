import {Person} from "./person";
class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }
  introduce() {
    return (this.klass != undefined) ?(super.introduce() + ' I am a Teacher. I teach Class ' + this.klass.number + '.'):(super.introduce() + ' I am a Teacher. I teach No Class.');
  }
  introduceWith(student) {
    return this.klass.number == student.klass.number ? (super.introduce() + ' I am a Teacher. I teach ' + student.name + '.') : (super.introduce() + ' I am a Teacher. I don\'t teach ' + student.name + '.');
  }
}
export {Teacher};