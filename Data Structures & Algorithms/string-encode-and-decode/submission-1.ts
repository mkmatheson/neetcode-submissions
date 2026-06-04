class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        if(strs.length === 1){
            return `${strs[0].length}#${strs[0]}`;
        }
        let encodedString = '';
        for(const str of strs){
            encodedString += `${str.length}#${str}`;
        }
        return encodedString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const strings = [];
        let stringLength = 0;
        let currString = '';
        let i = 0;
        while(i < str.length){
            let stringifiedLength = '';
            while(str[i] !== '#'){
                stringifiedLength += str[i]
                i++;
            }
            i++;
            stringLength = parseInt(stringifiedLength);
            while(stringLength > 0)
            {
                currString += str[i];
                stringLength--;
                i++;
            }

            strings.push(currString);
            currString = '';
            stringLength = 0;
        }
        return strings;
    }
}
