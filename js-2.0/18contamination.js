function contamination(text, char) {
  console.log(char.repeat(text.length));
}
function contamination(text, char) {
  console.log(text.split("").fill(char).join(""));
}

contamination("abc","z");
contamination("abc","");
contamination("_3ebzgh4","&");