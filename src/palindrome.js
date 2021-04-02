const detectPalindrome = (str) => {
    if (typeof str != 'string')
        return 'Passed argument is not a string';

    if (str.length == 0)
        return 'String is empty';

    let reverseStr = str.split('').reverse().join('');

    return (reverseStr.toLowerCase() == str.toLowerCase()) 
        ? 'This string is palindrome!' 
        : 'This string is not a palindrome!';
};

module.exports = detectPalindrome;
