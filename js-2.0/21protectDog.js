function protectDog(dog) {
  const copy = Object.assign({}, dog);
  const propertiesToProtect = ["owner", "favoriteFood", "activities"];
  console.log(Object.getOwnPropertyNames(copy));

  function freezeRecursively(obj) {
    Object.freeze(obj);
    for (const prop of Object.getOwnPropertyNames(obj)) {
      console.log(prop);
      console.log(obj[prop]);
      if (propertiesToProtect.includes(prop) && typeof obj[prop] === "object") {
        freezeRecursively(obj[prop]);
      }
    }
  }

  freezeRecursively(copy);
  return copy;
}
// Input: 
protectDog({
  name: "Romeo",
  age: 3,
  owner: { name: "Victor", phoneNumber: "555-555-5555" },
  favoriteFood: ["chicken", "croquettes"],
  activities: ["play", "walk"],
})

protectDog.name = "Toro"
protectDog();
// Output:
// protectedDog.name // "Romeo"