
//Прототипный стиль

function Staff(name, sex, age){ //Конструктор Персонал
    this.name = name;
    this.sex = sex;
    this.age = age;
}

//Методы конструктора
Staff.prototype.corp = 'New Star';
Staff.prototype.getInfo = function() {
    console.log(`${this.name} -- ${this.sex} -- ${this.age} -- works in '${this.corp}'`);
}
Staff.prototype.intro = function() {
    console.log(`My name is ${this.name}. I am ${this.age} years old`);
}

//создаем Человека
let staffAdam = new Staff('Adam', 'male', 60);
console.log(staffAdam.corp);//New Star
staffAdam.getInfo();//Adam -- male -- 60 -- works in 'New Star'

function Cleaner(name, sex, age, place) { //Конструктор Уборщика
    Staff.call(this, name, sex, age);
    this.place = place;
}

Cleaner.prototype = Object.create(Staff.prototype);

Cleaner.prototype.getInfo = function() { //Перезапишем метод
    console.log(`${this.name} -- ${this.sex} -- ${this.age} -- works in ${this.corp} as a cleaner on the ${this.place}`);
}

//создаем чеовека
let cleanerMaks = new Cleaner('Maks', 'male', 42, '2nd floor');
cleanerMaks.getInfo();//Maks -- male -- 42 -- works in New Star as cleaner on the 2nd floor
cleanerMaks.intro();//My name is Maks. I am 42 years old



//-----------------------------------------
////Функционаьный стиль

function StaffMember(name, sex, age){ //Конструктор Персонал
    this.corp = 'New Star'
    this.name = name;
    this.sex = sex;
    this.age = age;
    this.getInfo = function() {
        console.log(`${this.name} -- ${this.sex} -- ${this.age} -- works in '${this.corp}'`);
    }
    this.intro = function() {
        console.log(`My name is ${this.name}. I am ${this.age} years old`);
    }
}

//Создаем чеовека
let staffMemberJohn = new StaffMember('John', 'male', 23);
staffMemberJohn.getInfo();//John -- male -- 23 -- works in 'New Star'


function Manager(name, sex, age, department) { //Конструктор Менеджер
    StaffMember.call(this, name, sex, age);
    this.department = department;
    this.getInfo = function() { //rewrite
        console.log(`${this.name} -- ${this.sex} -- ${this.age} -- works in ${this.corp} as ${this.department} manager`);
    }
}

//Создаем человека
let managerKen = new Manager('Ken', 'male', 34, 'finance');
managerKen.intro();//My name is Ken. I am 34 years old
managerKen.getInfo(); //Ken -- male -- 34 -- works in New Star as finance manager

function RegionManager(name, sex, age, department, region, salary) { //Конструктор Регионал
    Manager.call(this, name, sex, age, department);
    this.region = region;
    let _salary = salary; //закрываем прямой доступ
    this.getSalary = function(){ //геттер на з\п
        console.log(_salary);
    }
    this.setSalary = function(newSalary) { //сеттер на з\п
        _salary = newSalary;
    }
}

//Создаем чеовека
let regionManagerOlga = new RegionManager('Olga', 'female', 23, 'sales', 'Ukraine', 15000);
regionManagerOlga.getSalary();//15000
regionManagerOlga.setSalary(18000);
regionManagerOlga.getSalary();//18000
regionManagerOlga.getInfo();//Olga -- female -- 23 -- works in New Star as sales manager
