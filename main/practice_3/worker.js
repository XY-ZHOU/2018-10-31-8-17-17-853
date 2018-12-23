import {Person} from "./person";
class Worker extends Person {
  introduce() {
    return ('I am a Worker. I have a job.');
  }
}
export {Worker};