function position(letter){
  const alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  }
  let alphabetArr = Object.entries(alphabet);
  
  for (let i = 0; i < alphabetArr.length; i++) {
    const letterPosition = alphabetArr[i];
    if (letterPosition[0] === letter) {
      let casting = letterPosition[1];
      console.log(`Position of alphabet: ${casting}`);
    }
  }
}

function position(letter) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  console.log(`Position of alphabet: ${alphabet.indexOf(letter) + 1}`);
}

position("a");
position("z");