function simulation({ satellite, station, astronaut, text }) {
  satellite.send({
    from: astronaut,
    to: station,
    text: text,
  });

  return satellite.messages;
}

class Astronaut {
  constructor({ name }) {
    this.name = name;
  }
}

class SpaceStation {
  constructor({ name }) {
    this.name = name;
    this.team = [];
  }

  addTeamMember(newMember) {
    if (newMember instanceof Astronaut) {
      this.team.push(newMember.name);
    }
  }

  isTeamMember(supposedMember) {
    return this.team.includes(supposedMember.name);
  }
}

class Satellite {
  constructor({
    name,
  }) {
    this.name = name;
    this.messages = [];
  }

  send({ from, to, text }) {
    const isAstronaut = from instanceof Astronaut;
    const isSpaceStation = to instanceof SpaceStation;
    const isTeamMember = to.isTeamMember?.(from);

    if (isAstronaut && isSpaceStation && isTeamMember) {
      this.messages.push({
        from: from.name,
        to: to.name,
        text,
      });
    }
  }
}