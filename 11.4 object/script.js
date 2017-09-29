function Phone1(brand, price, color) {
   this.brand = brand;
   this.price = price;
   this.color = color;
}

Phone1.prototype.printInfo = function () {
   console.log(`The phone brand is ${this.brand}, color is ${this.color} and the price is ${this.price}`);
};

class Phone2 {
   constructor(brand, price, color) {
      this.brand = brand;
      this.price = price;
      this.color = color;
   }
   printInfo() {
      console.log(`The phone brand is ${this.brand}, color is ${this.color} and the price is ${this.price}`);
   }

}

let sg6 = new Phone2("Samsung", "3000", "Black");
let iphone = new Phone2("Apple", "5000", "White");
let opo = new Phone2("OnePlus", "2000", "Black");

sg6.printInfo();
iphone.printInfo();
opo.printInfo();