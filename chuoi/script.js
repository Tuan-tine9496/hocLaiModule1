function isFirstLetterUpperCase(str){
    let regexp = /^[A-Z]/;
    if (regexp.test(str)) {
        alert("String's first character is uppercase");
    } else {
        alert("String's first character is not uppercase");
    }
}
isFirstLetterUpperCase("S sfsdf");