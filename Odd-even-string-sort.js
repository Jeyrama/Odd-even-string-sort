/*
Given a string s, you have to return another string 
such that even-indexed and odd-indexed characters of s 
are grouped and groups are space-separated.

Note: 
0 is considered to be an even index. 
All input strings are valid with no spaces.
*/


const sortMyString = s => {
  let even = s.split('').filter((v, i) => i % 2 === 0).join('')
  let odd = s.split('').filter((v, i) => i % 2 !== 0).join('')
  return even + ' ' + odd
}