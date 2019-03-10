import {IStringUtils} from './IStringUtils'
export class StringUtils implements IStringUtils {

    constructor() {
        
        
    }
    public getVowels(str: string): number {
        let count = 0;
        
        if (str) {
            let vowels:string="aeiou";
            let res = str.toLowerCase();
            for (var i = 0; i < res.length; i++) {
                if (vowels.includes(res[i]))
                    count++;

            }
        }
        return count;

    }
    public removeChar(str: string, pos: any): string{
        return str.replace(str[pos],'');
    }
    public incrementLetters(str: string): string
    {
        let newStr="";
        for(let i=0; i<str.length; i++){
            if(str[i] === " ")
                newStr += " ";
            else
                newStr += String.fromCharCode(str.charCodeAt(i) + 1);
        }
        return newStr;
    }
}
