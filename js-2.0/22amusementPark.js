function createVisitor(name, age, ticketId) {
  return {
    name: name,
    age: age,
    ticketId: ticketId
  }
}

// console.log(createVisitor('Vera Nar', 45, 'H32AZ123'));


function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}

// console.log(revokeTicket({
//   name: 'Vera Nar',
//   age: 45,
//   ticketId: 'H32AZ123',
// }));

function ticketStatus(tickets, ticketId) {
  if (tickets[ticketId] === null) {
    return "not sold"
  }
  if (tickets[ticketId] === undefined){
    return 'unknown ticket id';
  }
  if (typeof(tickets[ticketId]) === "string") {
    return `sold to ${tickets[ticketId]}`;
  } 
}

const tickets = {
  '0H2AZ123': null,
  '23LA9T41': 'Ver Nar',
};

// console.log(ticketStatus(tickets, 'RE90VAW7'));
// => 'unknown ticket id'

// console.log(ticketStatus(tickets, '0H2AZ123'));
// => 'not sold'

// console.log(ticketStatus(tickets, '23LA9T41'));
// => 'sold to Ver Nar'

function simpleTicketStatus(tickets, ticketId) {
  return tickets[ticketId] ?? "invalid";
}

const tickets2 = {
  '0H2AZ123': null,
  '23LA9T41': 'Ver Nard',
  'XF1X6S2W': '',
  B7627X32: '',
  XF1X6S2W: 0,
  KJJIFFO0: false,
};

console.log(simpleTicketStatus(tickets2, '23LA9T41'));
// => 'Ver Nar'

console.log(simpleTicketStatus(tickets2, '0H2AZ123'));
// => 'invalid ticket !!!'

console.log(simpleTicketStatus(tickets2, 'XF1X6S2W'));
// => 'invalid ticket !!!'

console.log(simpleTicketStatus(tickets2, "KJJIFFO0"));
// => 'invalid ticket !!!'

function gtcVersion(visitor) {
  return visitor.gtc?.version;
  
}

const visitorNew = {
  name: 'Ver Nard',
  age: 45,
  ticketId: 'H32AZ123',
  gtc: {
    signed: true,
    version: '2.1',
  },
};

// console.log(gtcVersion(visitorNew));
// => '2.1'

const visitorOld = {
  name: 'Ver Nard',
  age: 45,
  ticketId: 'H32AZ123',
};

// console.log(gtcVersion(visitorOld));
// => undefined