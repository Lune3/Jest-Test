function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string){
    let i = string.length - 1;
    let str = "";
    while(i >= 0){
        str += string[i];
        i--;
    }
    return str;
}

const calculator = {
    add: function sum(a,b){
        return a+b;
    },
    subtract:function difference (a,b){
        return a - b;
    },
    multiply:function (a,b){
        return a * b;
    },
    divide:(a,b) => a/b
}

function caesarCipher(string , shift){
    let length = string.length;
    let str = "";
    for(let i = 0;i < length;i++){
        if(65 <= string.charCodeAt(i) && string.charCodeAt(i)  <= 90){
           let newCharCode = (string.charCodeAt(i) + shift > 90) ? (string.charCodeAt(i) + shift)%90 + 64 : (string.charCodeAt(i) + shift)%90;
           if(newCharCode === 0)newCharCode = 90;
           str += String.fromCharCode(newCharCode);     
        }
        else if(97 <= string.charCodeAt(i) && string.charCodeAt(i)  <= 122){
            let newCharCode = (string.charCodeAt(i) + shift > 122) ? (string.charCodeAt(i) + shift)%122 + 96 : (string.charCodeAt(i) + shift)%122;
            if(newCharCode === 0)newCharCode = 122;
            str += String.fromCharCode(newCharCode); 
        }
        else{
            str += string[i];
        }
    }
    return str;   
}

function analyzeArray(array){
    let length = array.length;
    let average = 0;
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;

    for(let i = 0;i < length;i++){
        average += array[i];
        if(array[i] < min)min = array[i];
        if(array[i] > max)max = array[i];
    }

    average = average/length;

    return {average:average,min:min,max:max,length:length};
    
}

  export {capitalize,reverseString,calculator,caesarCipher,analyzeArray};