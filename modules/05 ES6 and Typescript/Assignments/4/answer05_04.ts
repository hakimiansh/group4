import {StringUtils} from './StringUtils';
let myStringUtils = new StringUtils();
let myStr = "The quick brown fox";
console.log(myStringUtils.getVowels(myStr));
console.log(myStringUtils.removeChar(myStr,2));
console.log(myStringUtils.incrementLetters(myStr));
