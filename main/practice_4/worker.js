import {Person} from "./person";
class Worker extends Person {
  introduce() {
    return (super.basic_introduce() + 'I am a Worker. I have a job.');
  }
}
export {Worker};