class Worker {
  static id = 1;
  static workerCount = 0;
  static salaryCount = [];
  static listWorker = [];
  constructor(name, category, salary = 0) {
    this.id = Worker.id;
    this.name = name;
    this.category = category;
    this.salary = salary;
    Worker.workerCount++;
    Worker.id++;
    Worker.salaryCount.push(this.salary);
    Worker.listWorker.push(this);
  }
  infoMonthSalery() {
    return `Salary per month ${this.salary}`;
  }
  infoYearSalary() {
    let monthSalary = this.salary;
    return `Salery per year ${(monthSalary *= 12)}`;
  }
  countWorker() {
    return `Amount of workers${Worker.workerCount}`;
  }
  infoYearSalaryWorkers() {
    let salaryWorkers = Worker.salaryCount.reduce((a, b) => a + b);
    return `Salery per year of workers ${(salaryWorkers *= 12)}`;
  }
}
const worker1 = new Worker("Artur", "1category", 19000);
console.group("********************************");
console.log(worker1);
console.log(worker1.infoMonthSalery());
console.log(worker1.infoYearSalary());
console.groupEnd();

const worker2 = new Worker("Tom", "3category", 12000);
console.group("********************************");
console.log(worker2);
console.log(worker2.infoMonthSalery());
console.log(worker2.infoYearSalary());
console.groupEnd();

const worker3 = new Worker("Jon", "2category", 14000);
console.group("********************************");
console.log(worker3);
console.log(worker3.infoMonthSalery());
console.log(worker3.infoYearSalary());
console.groupEnd();

const worker4 = new Worker("Roma", "1category", 19000);
console.group("********************************");
console.log(worker4);
console.log(worker4.infoMonthSalery());
console.log(worker4.infoYearSalary());
console.groupEnd();

console.group("-----------------------");
console.log(worker1.countWorker());
console.log(worker2.infoYearSalaryWorkers());
console.groupEnd();

class Worker2 extends Worker {
  static countJoint = 0;
  constructor(name, category, rate, hours) {
    super(name, category);
    this.rate = rate;
    this.hours = hours;
    Worker2.countJoint++;
  }
  infoSaleryDay() {
    let salaryDay = this.rate;
    return `Salary per day ${(salaryDay *= this.hours)}`;
  }
  monthInfoSalery() {
    let rate = this.rate
    let salaryDay = rate *= this.hours
    let salary = salaryDay *= 22
    this.salary = salary
    Worker.salaryCount.push(this.salary)
    return `Salary per month ${this.salary}`;
  }
  outCountWorker() {
    return `Part-time workers ${Worker2.countJoint}`;
  }
}

const worker5 = new Worker2("Inna", "3category", 50, 8);
console.group("********************************");
console.log(worker5);
worker5.monthInfoSalery();
console.log(worker5.infoSaleryDay());
console.log(worker5.monthInfoSalery());
console.groupEnd();

const worker6 = new Worker2("Anna", "1category", 70, 8);
console.group("********************************");
console.log(worker6);
worker6.monthInfoSalery();
console.log(worker6.infoSaleryDay());
console.log(worker6.monthInfoSalery());
console.groupEnd();

const worker7 = new Worker2("Ben", "1category", 70, 8);
console.group("********************************");
console.log(worker7);
worker7.monthInfoSalery();
console.log(worker7.infoSaleryDay());
console.log(worker7.monthInfoSalery());
console.groupEnd();

console.group("-----------------------");
console.log(worker5.outCountWorker());
console.groupEnd();
