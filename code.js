// Base class for animals.
class Animal {
	constructor(name, legs, tail) {
			this.name = name;
			this.legs = legs;
			this.tail = tail;
	}

	sayHello() {
	}

	sayMyName() {
			console.log(this.name);
	}
}

// Class representing dog.
class Dog extends Animal {
	sayHello() {
			console.log("WOOF WOOF");
	}
}
// extend and use Animal constructor + add custom constructor (whiskers)
class Cat extends Animal {
	constructor(name, legs, tail, whiskers) {
			super(name, legs, tail);
			this.whiskers = whiskers;
	}

	sayHello() {
			console.log("MJAU");
			console.log("I have whiskers");
	}
}

class Tiger extends Animal  {
	sayHello() {
			console.log("ROAR!");
	}
}

class Zoo {
	constructor(){
			this.animals = [];

			// create animal objects (Create instances of classes);
			var dog = new Dog("Spike", 4, true); // create instance of dog
			var cat = new Cat("Garfield", 4, true); // create instance of cat
			var tiger = new Tiger("Sherikan", 4, true); // create instance of tiger
			var tiger2 = new Tiger("Tiger", 4, true); // create instance of tiger

			// add animal objects to animals array.
			this.animals = [dog, cat, tiger, tiger2];
	}

	/**
	 * Add a dog to zoo.
	 */
	addDog(name) {
			var dog = new Dog(name, 4, true);
			this.animals.push(dog);
	}
}

var zoo = new Zoo();
console.log(zoo);

zoo.addDog("Lassie");
zoo.addDog("Tyson");

zoo.animals.forEach(animal => {
	// check if animal is an instance of class Tiger
	if(animal instanceof Tiger) {
			animal.sayMyName();
			animal.sayHello();
	}

	// check if animal is an instance of class Dog
	if(animal instanceof Dog) {
			console.log("Found a dog!");
			animal.sayMyName();
	}
});
