class Class {
  constructor(number) {
    this.number = number;
  }
  getDisplayName() {
    return ('Class ' + this.number);
  }
  assignLeader(student) {
    return (this.number === student.klass.number) ?(this.leader = student):console.log('It is not one of us.');
  }
  appendMember(student) {
    student.klass = this;
  }
  isIn(student){
    return (this.number === student.klass.number);
  }
}
export {Class};