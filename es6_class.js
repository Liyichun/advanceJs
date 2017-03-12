class Logger {
	constructor() {
		// this.printName = this.printName.bind(this);
		this.printName = (name = 'there') => {
			this.print(`Hello ${name}`);
		};
	}
	printName(name = 'there') {
		this.print(`Hello ${name}`);
	}
	print(text) {
		console.log(text);
	}
}

const logger = new Logger();
const {printName : i} = logger;
console.log(logger);
console.log(i);
i();
logger.printName();


class Point {
	constructor(x,y) {
		this.x = x;
		this.y = y;
	}
	print() {
		return "(x,y):" + "(" + this.x + "," + this.y + ")"; 
	}
}

class ColorPoint extends Point {
	constructor(x, y, color) {
		super(x,y);
		this.color = color;
	}
	m() {
		return "color:" + this.color + super.print();
	}
	
}

let cp = new ColorPoint(1,2, 'green');
//console.log(cp.color);
console.log(cp.m());


class A {
  constructor(x) {
    this.x = x;
  }
  print() {
    console.log(this.x);
  }
}

class B extends A {
  constructor(x) {
    super(x);
    //this.x = x;
  }
  m() {
    super.print();
  }
}

let b = new B(3);
b.m() // 2

