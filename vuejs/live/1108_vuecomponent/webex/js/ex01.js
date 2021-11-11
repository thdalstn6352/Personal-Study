
export const f1 = (num) => {
  return num * num;
}

export function f2(num) {
  return num * num;
}

export function f3(num) {
  return num * num;
}

export const user = {
  name : "홍길동",
  age : 22
}

export default class {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  print() {
    console.log(`${this.name} : ${this.year}`);
  }
}