function palindrome(str) {
  str = str.toLowerCase().replace(/_/g, "").match(/\w/g);

  if (str.length % 2 == 0) {
    if (str.splice(0, str.length / 2).join("") == str.reverse().join(""))
      return true;
  } else {
    if (
      str.splice(0, Math.floor(str.length / 2)).join("") ==
      str.slice(1).reverse().join("")
    )
      return true;
  }

  return false;
}
