function filterList(l) {
  const newList = [];

  for (let i = 0; i < l.length; i++) {
    const element = l[i];
    if(typeof(element) === "number") {
    newList.push(element);
    }
  }
  // return newList;
  console.log(newList);
}

function filter_list(l) {
  const list = l.filter( element => typeof(element) == "number");
  // return list;
  console.log(list);
}

filterList([1,2,'a','b']);
filter_list([1,2,'a','b']);