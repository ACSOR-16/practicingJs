class Passenger{
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.flights = []
  }

  addFlight(flight){
    this.flights.push({
      origin: flight.origin,
      destination: flight.destination,
      date: flight.date,
      price: flight.price
    });
  }
}

class Reservation{
  constructor(flight, passenger){
    this.flight = flight;
    this.passenger = passenger;
  }

  get confidentialData(){
    return ( () => {
      const fullName = `${this.passenger.name} ${this.passenger.lastName}`;
      const age = this.passenger.age;

      return {
        fullName,
        age
      };
    })();
  }

  reservationDetails(){
    const flight = this.flight;
    const passenger = this.confidentialData;

    return {
      origin: flight.origin,
      destination: flight.destination,
      date: flight.date,
      reservedBy: passenger.fullName
    }
  }
}

// import { Reservation } from "./Reservation";

class Flight{
  constructor(origin, destination, date, capacity, price){
    this.origin = origin;
    this.destination = destination;
    this.date = date;
    this.capacity = capacity;
    this.price = price;
    this.passengers = [];
  }

  sellTicket(passenger){
    if(this.capacity > 0 ) {
      this.capacity -= 1;

      const reservation = new Reservation(this.passenger);
      this.passengers.push(reservation.confidentialData)

      passenger.addFlight(this);

      return reservation;
    }
  }
}

// import { Flight } from "./Flight";
// import { Reservation } from "./Reservation";

class PremiumFlight extends Flight{
  constructor(origin, destination, date, capacity, price, specialService){
    super(origin, destination, date, capacity, price);
    this.specialService = specialService;
  }

  sellTicket(passenger){
    if(this.capacity > 0 ) {
      this.capacity -= 1;

      const reservation = new Reservation(this.passenger);
      this.passengers.push(reservation.confidentialData)

      passenger.addFlight(this);
      this.price += this.specialService;

      return reservation;
    }
  }
}

// import { Flight } from "./Flight";
// import { Reservation } from "./Reservation";

class EconomicFlight extends Flight{
  constructor(origin, destination, date, capacity, price, discount){
    super(origin, destination, date, capacity, price)
    this.discount = discount
  }

  sellTicket(passenger){
    if(this.capacity > 0 ) {
      this.capacity -= 1;
    
      const reservation = new Reservation(this.passenger);
      this.passengers.push(reservation.confidentialData)
    
      passenger.addFlight(this);
      this.price *= this.discount;
    
      return reservation;
    }
  }
}

