function Person(name, lastname, age) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.desc = "My name is " + this.name + " and my last name is " + this.lastname + " and i am " + this.age + " years old";
}

var Kasper = new Person("Kasper", "Vink", 27);
console.log(Kasper.desc);

//Oliver; Opgaven er måske ikke helt forstået? 


//Benedikte: Closures her har jeg tilføjet mit helt eget closure

var personInfo = (function () {

    return function (person) {
        return "Name: " + person.name + "  Age: " + person.age;
    };

})();
console.log(personInfo(new Person("Benedikte", "Majbrink", 47)));
  console.log(personInfo(new Person("Kaj", "Haj", 50)));