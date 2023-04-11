function getPetExerciseInfo(type, age) {
  switch (type) {
    case "dog":
      if (age < 1) return "puppies need small, frequent play sessions";
      else if (age >= 1 && age <= 7) return "Dogs ar this age need daily walks and play sessions";
      else return "Older dogs need shorter walks";

      // break;

    case "cat":
      if (age < 1) return "Kittens need frequent play sessions";
      else if (age >= 1 && age <= 7) return "Cats at this age need to play daily";
      else return "older cats need shorter play sessions";

      // break;

    case "bird":
      if (age < 1) return "Young birds need a lot of space to fly";
      else if (age >= 1 && age <= 7) return "Birds need daily play and a place to fly";
      else return "older birds need more rest, but still occupy a place to fly";

      // break;
    default:
      return "Invalid pet type";
  }

}
