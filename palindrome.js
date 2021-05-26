function palindrome(str) {
  // tidy up the string:
  // remove all non-aplahnumeric chracter
  // convert to all lowercase
  str = str.toLowerCase();
  str = str.replace(/_/g,"");
  str = str.match(/\w/g);

  // floor the divison
  // if even number of letters 2nd half = first half reversed
  // else odd number of letters a a b a a
  // str.length/2 - 1 = str.lenght / 2 -> str.length
  if (str.length % 2 == 0) {
    let firstHalf = str.splice(0, str.length / 2);
    if (firstHalf.join("") == str.reverse().join("")) return true;
  } else {
    let firstHalf = str.splice(0, Math.floor(str.length / 2));
    let secondHalf = str.slice(1);
    if (firstHalf.join("") == secondHalf.reverse().join("")) return true;
  }

  return false;
}
