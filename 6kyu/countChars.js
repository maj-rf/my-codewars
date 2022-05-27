/* 
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function count(string) {
  if (string.length === 0) return {};
  else {
    let obj = {};
    let arr = [];
    string
      .split('')
      .forEach((letter) => (arr.includes(letter) ? '' : arr.push(letter)));
    arr.forEach((letter) => {
      let count = 0;
      for (let i = 0; i < string.length; i++) {
        if (letter === string[i]) count++;
      }
      obj[letter] = count;
    });
    return obj;
  }
}
