class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreetting() {
        return `Hi. I am ${this.name}!.`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMjor() {
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMjor()) {
            description += `Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation;
    }
    hasLocation() {
        return !!this.homeLocation;
    }
    getGreetting() {
        let description = super.getGreetting();
        if (this.hasLocation()) {
            description += `I'm visiting from ${this.homeLocation}`;
        }
        return description;
    }
}

const me = new Traveler('Paul Burz', 23, 'Cluj-Napoca');
console.log(me.getGreetting());

const other = new Traveler();
console.log(other.getGreetting());