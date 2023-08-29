function hotelSystem(rooms) {
  const reservations = [];

  function searchReservation(id) {
    const index = reservations.findIndex((room) => room.id === id);

    if (index > -1) {
      return reservations[index];
    }

    throw new Error("the reservation does not exist ");
  }

  function getSortReservations() {
    const copy = [...reservations];

    copy.sort((a, b) => {
      const aDate = new Date(`${a.checkIn} ${new Date().getFullYear()}`);
      const bDate = new Date(`${b.checkIn} ${new Date().getFullYear()}`);
      return aDate - bDate;
    });

    return copy;
  }

  function addReservation(reservation) {
    if (!isAvailable(reservation)) {
      throw new Error("the room is occupied ");
    }

    reservations.push(reservation);
    return `${reservation.name}'s reservation was successfully scheduled`;
  }

  function removeReservation(id) {
    const index = reservations.findIndex((room) => room.id === id);

    if (index > -1) {
      const removedReservation = reservations[index];
      reservations.splice(index, 1);
      return removedReservation;
    }

    throw new Error("the room you are looking to remove does not exist");
  }

  function getReservations() {
    return reservations;
  }

  function isAvailable(reservation) {
    const checkIn = reservation.checkIn;
    const checkOut = reservation.checkOut;

    for (const currentReservation of reservations) {
      const currentCheckIn = currentReservation.checkIn;
      const currentCheckOut = currentReservation.checkOut;

      if (
        (checkIn >= currentCheckIn && checkIn < currentCheckOut) ||
        (checkOut > currentCheckIn && checkOut <= currentCheckOut) ||
        (checkIn <= currentCheckIn && checkOut >= currentCheckOut)
      ) {
        if (currentReservation.roomNumber === reservation.roomNumber) {
          return false;
        }
      }
    }

    return true;
  }

  function getAvailableRooms(checkIn, checkOut) {
    const availableRooms = [];

    for (let i = 1; i <= rooms; i++) {
      const reservation = { checkIn, checkOut, roomNumber: i };

      if (isAvailable(reservation)) {
        availableRooms.push(i);
      }
    }
    return availableRooms;
  }

  return {
    searchReservation,
    getSortReservations,
    addReservation,
    removeReservation,
    getReservations,
    getAvailableRooms,
  };
}

// Input:
const hotel = hotelSystem(10);

// add a new reservation
hotel.addReservation({
  id: 1,
  name: "John Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 1,
});
hotel.addReservation({
  id: 2,
  name: "Pep Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 7,
});
hotel.addReservation({
  id: 3,
  name: "John Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 3,
});

hotel.addReservation({
  id: 4,
  name: "Pep Doe",
  checkIn: "01/01",
  checkOut: "10/01",
  roomNumber: 6,
});

hotel.getReservations();

hotel.searchReservation(2);

console.log(hotel.getAvailableRooms("01/01", "05/01"))


// // search available rooms entre el 01 y el 05 del primer mes
// Output:
// [2, 3, 4, 5, 6, 7, 8, 10]