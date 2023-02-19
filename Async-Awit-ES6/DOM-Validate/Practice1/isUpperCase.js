function isFirstLetterUpperCase(str) {
    regexp = /^[A-Z]/;
    if (regexp.test(str)){
        console.log("String is first letter uppercase");
    }else{
        console.log("String is first letter lowercase");
    }
}

isFirstLetterUpperCase('Abcd');
let str1 = 'abcd';
isFirstLetterUpperCase('str1');
isFirstLetterUpperCase('Nguyen van Nam');
isFirstLetterUpperCase('NGUYEN VAN NAM');
isFirstLetterUpperCase('nguyen van Nam');