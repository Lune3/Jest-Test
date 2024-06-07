import {capitalize,reverseString,calculator,caesarCipher,analyzeArray} from "./sample";


test(`capitalize`,() => {
    expect(capitalize("hello")).toBe("Hello");
})

test(`capitalize`,() => {
    expect(capitalize("AveryLONGstringToBETested")).toBe("AveryLONGstringToBETested");
})

test('reverseString',() => {
    expect(reverseString("banana")).toBe("ananab");
})

test('add',() => {
    expect(calculator.add(5,6)).toBe(11);
})

test('sub',() => {
    expect(calculator.subtract(5,6)).toBe(-1);
})

test('multiple',() => {
    expect(calculator.multiply(32,3)).toBe(96);
})

test('divide',() => {
    expect(calculator.divide(96,32)).toBe(3);
})

test('caesarCipher',() => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
})

test('caesarCipher',() => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
})

test('caesarCipher',() => {
    expect(caesarCipher('HellowW, World!', 3)).toBe('KhoorzZ, Zruog!');
})

test('analyzeArray',() =>{
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
     });
})


