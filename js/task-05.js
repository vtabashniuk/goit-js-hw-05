// Напиши класс Car с указанными свойствами и методами.

// class Car {
//   /*
//    * Добавь статический метод `getSpecs(car)`,
//    * который принимает объект-машину как параметр и выводит
//    * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
//    */

//   /*
//    * Конструктор получает объект настроек.
//    *
//    * Добавь свойства будущеего экземпляра класса:
//    *  speed - текущая скорость, изначально 0
//    *  price - цена автомобиля
//    *  maxSpeed - максимальная скорость
//    *  isOn - заведен ли автомобиль, значения true или false. Изначально false
//    *  distance - общий киллометраж, изначально 0
//    */
//   constructor() {}

//   /*
//    * Добавь геттер и сеттер для свойства price,
//    * который будет работать с свойством цены автомобиля.
//    */

//   /*
//    * Добавь код для того чтобы завести автомобиль
//    * Записывает в свойство isOn значение true
//    */
//   turnOn() {}

//   /*
//    * Добавь код для того чтобы заглушить автомобиль
//    * Записывает в свойство isOn значение false,
//    * и сбрасывает текущую скорость в 0
//    */
//   turnOff() {}

//   /*
//    * Добавялет к свойству speed полученное значение,
//    * при условии что результирующая скорость
//    * не больше чем значение свойства maxSpeed
//    */
//   accelerate(value) {}

//   /*
//    * Отнимает от свойства speed полученное значение,
//    * при условии что результирующая скорость не меньше нуля
//    */
//   decelerate(value) {}

//   /*
//    * Добавляет в поле distance киллометраж (hours * speed),
//    * но только в том случае если машина заведена!
//    */
//   drive(hours) {}
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000

class Car {
  constructor({ maxSpeed, price } = {}) {
    this._maxSpeed = maxSpeed;
    this._price = price;
    this._speed = 0;
    this._isOn = false;
    this._distance = 0;
  }

  static getSpecs(car) {
    this._maxSpeed = car._maxSpeed;
    this._price = car._price;
    this._speed = car._speed;
    this._isOn = car._isOn;
    this._distance = car._distance;
    console.log(
      `max speed: ${this._maxSpeed}, speed: ${this._speed}, is on: ${this._isOn}, distance: ${this._distance}, price: ${this._price} `,
    );
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  turnOn() {
    this._isOn = true;
    console.log('Вы завели автомобиль!');
  }

  turnOff() {
    this._speed = 0;
    this._isOn = false;
    console.log('Вы заглушили автомобиль!');
  }

  accelerate(value) {
    if (this._isOn) {
      const currentSpeed = this._speed + value;
      if (currentSpeed <= this._maxSpeed) {
        this._speed = currentSpeed;
        console.log(`Скорость: ${this._speed}`);
      } else {
        this._speed = this._maxSpeed;
        console.log(
          `Максимальная скорость равна ${this._maxSpeed}. Вы не можете ее превысить. Скорость: ${this._speed}`,
        );
      }
    } else console.log('Автомобиль не заведен.');
  }

  decelerate(value) {
    if (this._isOn) {
      const currentSpeed = this._speed - value;
      if (currentSpeed >= 0) {
        this._speed = currentSpeed;
        console.log(`Скорость: ${this._speed}`);
      } else {
        this._speed = 0;
        console.log(`Cкорость не может быть ниже 0. Скорость: ${this._speed}`);
      }
    } else console.log('Автомобиль не заведен.');
  }

  drive(hours) {
    this._isOn
      ? (this._distance += this._speed * hours)
      : console.log('Автомобиль не заведен.');
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000

mustang.turnOn();
mustang.accelerate(199);
Car.getSpecs(mustang);
mustang.accelerate(1);
mustang.accelerate(300);
mustang.drive(0.5);
Car.getSpecs(mustang);
mustang.decelerate(300);
mustang.decelerate(200);
Car.getSpecs(mustang);
mustang.turnOff();
mustang.accelerate(10);
Car.getSpecs(mustang);
mustang.turnOn();
Car.getSpecs(mustang);
mustang.decelerate(10);
mustang.accelerate(20);
mustang.decelerate(21);
Car.getSpecs(mustang);
