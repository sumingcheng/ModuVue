/*exec() ：返回第一个匹配结果及其内容。
  search() ：查找字符串中第一个匹配正则表达式的子字符串的位置，找到返回位置索引，否则返回-1。
  match() ：查找字符串中所有匹配正则表达式的子字符串，返回一个数组。
  replace() ：用新的字符串替换字符串中匹配的正则表达式的子串。
  split() ：将字符串按正则表达式匹配的位置切分成数组。
*/

export const mailboxReg = (val) => {
  return val.test(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/)
}
export const phoneReg = (val) => {
  return val.test(/^1(3|4|5|6|7|8|9)\d{9}$/)
}
export const landlineReg = (val) => {
  return val.test(/(\(\d{3,4}\)|\d{3,4}-|\s)?\d{8}/)
}
export const domainReg = (val) => {
  return val.test(/^((http:\/\/)|(https:\/\/))?([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}(\/)/)
}
export const IPReg = (val) => {
  return val.test(/((?:(?:25[0-5]|2[0-4]\d|[01]?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d?\d))/)
}
