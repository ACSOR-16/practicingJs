class car {

  constructor(brand, model, year, mileage, state = false) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.state = state;
  }

  turnOn() {
    this.state = true;
  }

  turnOff() {
    this.state = false;
  }

  drive(kilometers) {
    if (this.state) {
      this.mileage += kilometers
      console.log(kilometers)

    } else {
      throw new Error("The car is turn off")
    }
  }
}