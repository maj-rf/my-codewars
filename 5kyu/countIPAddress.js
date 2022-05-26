/* 
mplement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

Examples
* With input "10.0.0.0", "10.0.0.50"  => return   50 
* With input "10.0.0.0", "10.0.1.0"   => return  256 
* With input "20.0.0.10", "20.0.1.0"  => return  246
*/

function ipsBetween(start, end) {
  let arr1 = start.split('.');
  let arr2 = end.split('.');
  return arr1
    .map((num, index) => (arr2[index] - num) * 256 ** (arr1.length - 1 - index)) //find difference between 2 arrays and multiply 256 raise to a specific exponent
    .reduce((a, b) => a + b, 0);
}

console.log(ipsBetween('180.0.0.0', '181.0.0.0'));
