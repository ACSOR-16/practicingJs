function simulator(astronaut, spaceShip, direction) {
  astronaut.navigate(spaceShip, direction);
  return spaceShip._movements;
}

class Astronaut {
  constructor({ name }) {
    this.name = name;

    let _spaceShipKey = undefined;
    this.setAccessKey = (accessKey) => {
      _spaceShipKey = accessKey
    };

    this.navigate = (spaceShip, direction) => {
      spaceShip.navigator(direction, { accessKey: _spaceShipKey });
    }
  }
}

class SpaceShip {
  constructor({ key }) {
    this._movements = [];

    let _key = key;
    this.getAccessKey = (astronaut) => {
      const isAstronaut = astronaut instanceof Astronaut;
  
      if (isAstronaut) {
        astronaut.setAccessKey(_key);
      }
    }

    this.navigator = (direction, { accessKey }) => {
      if (_key == accessKey) {
        this._movements.push(direction)
      } else {
        this._movements.push("Incorrect Access Key");
      }
    }
  }
}