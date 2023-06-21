function findFamousCats(cats) {
  let famousStats = {
    catNames: [],
    maxNumOfFollowers: 0,
  };

  for (let i = 0; i < cats.length; i++) {
    const cat = cats[i];
    const totalFollowers = cat.followers.reduce(
      (accumulator, currentVal) => accumulator + currentVal,
      0
    );
    if (totalFollowers === famousStats.maxNumOfFollowers) {
      famousStats.catNames.push(cat.name);
    }

    if (totalFollowers > famousStats.maxNumOfFollowers) {
      famousStats.catNames = [];
      famousStats.catNames.push(cat.name);
      famousStats.maxNumOfFollowers = totalFollowers;
    }
  }

  // return famousStats.catNames;
  console.log(famousStats.catNames);
}

findFamousCats([
  {
    name: "Luna",
    followers: [500, 200, 300]
  },
  {
    name: "Snowball",
    followers: [100, 300]
  },
])

findFamousCats([
  {
    name: "Mimi",
    followers: [320, 120, 70]
  },
  {
    name: "Milo",
    followers: [400, 300, 100, 200]
  },
  {
    name: "Gizmo",
    followers: [250, 750]
  }
])