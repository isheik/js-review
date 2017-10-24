let str1 = "cer on esrever";
let str2 = "cer htiw esrever";
let stremp = "";

// reverse in a normal way
function reverseStr(str) {
    let tmp = "";
    let leng = str.length;

    for(let i = 0; i <= leng; i++){
        tmp += str.charAt(leng-i);
    }

    return tmp;
}

// reverse by recursive function
function reverseStrRec(str) {
    if(str === ""){
        return "";
    }

    return reverseStrRec(str.substr(1)) + str.charAt(0);

}

// normal reverse
console.log(reverseStr(str1));
// normal reverse, input empty
console.log(reverseStr(stremp));
// reverse by recursive function
console.log(reverseStrRec(str2));
// reverse by recursive function, input empty
console.log(reverseStrRec(stremp));
