function findLargestPalindrome(words) {
  let largest = null;

  for (let word = 0; word < words.length; word++) {
    const largestWord = words[word].split("").reverse().join("");
    // console.log(words[word]);
    if (words[word] === largestWord) {
      if (largest == null || words[word].length > largest.length) {
        largest  = words[word];
      }
    }
  }
  
  console.log(largest);
  return largest;
}


findLargestPalindrome(["racecar", "level", "world", "hello"])