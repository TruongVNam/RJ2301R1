function isAccountRight(str) {
    regexp = /^[_a-z0-9]{6,}$/
    if (regexp.test(str)) {return true;}
    return false
}
let accountList = [
    {acname: '123abc_'},
    {acname: '_abc123'},
    {acname: '______'},
    {acname: '.@'},
    {acname: '12345'},
    {acname: '1234_'},
    {acname: 'abcde'}]

for (const {acname} of accountList) {
    console.log(isAccountRight(acname))
}