// uml diagram to class circle
class circle{
    const pi=3.14;
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
getRadius(){
    return `${this.radius}`
}
setRadius(rad){
    this.radius=rad;
}
getColor(){
    return`${this.color}`
}
setColor(col){
    this.color=col;
}
getArea(){
    return `${pi*this.radius*this.radius}`
}
getCircumference(){
    return `${2*pi*this.radius}`
}
}
var c1 = new circle(5,"red");
console.log(c1.setRadius(4));
console.log(c1.setColor("green"));

//write a person class to hold all the details
class Person {
    constructor(firstName, lastName, age, gender, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.email = email;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getAge() {
        return this.age;
    }

    getGender() {
        return this.gender;
    }

    getEmail() {
        return this.email;
    }

    setFirstName(firstName) {
        this.firstName = firstName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    setAge(age) {
        this.age = age;
    }

    setGender(gender) {
        this.gender = gender;
    }

    setEmail(email) {
        this.email = email;
    }
}

// Example usage:
let person1 = new Person("Soorya", "Deviga", 26, "Male", "sooryasoor003@gmail.com");
console.log(person1.getFullName()); // SooryaDeviga
console.log(person1.getAge()); // 26
console.log(person1.getGender()); // Male
console.log(person1.getEmail()); // sooryasoor003@gmail.com

person1.setAge(25);
console.log(person1.getAge()); // 25

person1.setLastName("Smith");
console.log(person1.getFullName()); // Soorya Smith

//write a class to calculate the uber price
class uber{
    constructor(km){
        this.km = km;
    }
    getdistance(){
        return this.km*18;
    }
}
var c1 = new uber(23);
//movie class
class movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    gettitle(){
        return `${this.title}`
    }
    getstudio(){
        return `${this.studio}`
    }
    getrating(){
        return `${this.rating}`
    }
    setrating(rat){
        this.rating=rat
    }
}
var m1 = new movie("Casino Royale","Eon Productions","PG13");
console.log(m1.setrating("PG"));