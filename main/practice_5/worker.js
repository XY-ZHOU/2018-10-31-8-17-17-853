import {Person} from "./person";
class Worker extends Person {
  introduce() {
    return (super.introduce() + ' I am a Teacher. I have a job.');
  }
}
export {Worker};