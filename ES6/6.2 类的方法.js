function Person() {

}

Person.prototype.run = () => {
  console.log("跑起来");

}



class Student {
  constructor() {

  }
  run() {
    console.log("跑起来");
  }
}

var s1 = new Student()