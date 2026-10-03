            // 1
function getStringLength(word) {
    if(typeof word !== 'string'){
        return console.log(0)
    }
    let len = word.length
    console.log(len)
}
    /*  
getStringLength('aaaaa')
getStringLength('b')
getStringLength('')
getStringLength()
getStringLength(null)
getStringLength(undefined)
*/



                        // 2
function isString(word) {
    let res = typeof word === 'string' || word instanceof String
    console.log(res)
    return res
}
/*
isString()
isString(null)
isString([])
isString({})
isString('test')
isString(new String('test'))
*/


                                // 3
function concatenateStrings(str1, str2) {
    let text = str1 + str2
    console.log(text)
}
/*
concatenateStrings('aa', 'bb')
concatenateStrings('aa', '')
concatenateStrings('', 'bb')
*/


                        // 4
function getFirstChar(word) {
    if(word.length === 0 ){
        return console.log(word)
    }
    let perv = word[0]
    console.log(perv)
}
/*
getFirstChar('John Doe')
getFirstChar('cat')
getFirstChar('')
*/


                            // 5
function removeLeadingAndTrailingWhitespaces(word) {
    console.log(word.trim())
}
/*
removeLeadingAndTrailingWhitespaces('  Abracadabra')
removeLeadingAndTrailingWhitespaces('cat ')
removeLeadingAndTrailingWhitespaces('\t\t\tHello, World! ')
*/

                                // 6
function removeLeadingWhitespaces(word) {
    console.log(word.trimStart())
}
/*
removeLeadingWhitespaces('  Abracadabra')
removeLeadingWhitespaces('cat ')
removeLeadingWhitespaces('\t\t\tHello, World! ')
*/



                                    // 7

function removeTrailingWhitespaces(word) {
    console.log(word.trimEnd())
}
/*
removeTrailingWhitespaces('  Abracadabra')
removeTrailingWhitespaces('cat ')
removeTrailingWhitespaces('\t\t\tHello, World! ')
*/



                                    // 8
function repeatString(str1, count) {
    if(str1 === 0 || count <= 0){
        return console.log('')
    }
    let doubler = str1.repeat(count)
    console.log(doubler)
}
/*
repeatString('A', 5)
repeatString('cat', 3)
repeatString('', 3)
repeatString('abc', -2)
*/


                                        // 9
            
function removeFirstOccurrences(str1, str2) {
    let clear = str1.replace(str2, '')
    console.log(clear)
}
/*
removeFirstOccurrences('To be or not to be', 'be')
removeFirstOccurrences('I like legends', 'end')
removeFirstOccurrences('ABABAB', 'BA')
*/


                                        // 10

function removeLastOccurrences(str1, str2) {
    let index = str1.lastIndexOf(str2)
    if(index === -1){
        console.log(str1)
    }
    let res = str1.slice(0,index) + str1.slice(index + str2.length)
    console.log(res)
}
/*
removeLastOccurrences('To be or not to be', 'be')
removeLastOccurrences('I like legends', 'end')
removeLastOccurrences('ABABAB', 'BA')
*/


                                            // 11

function sumOfCodes(str) {
    if(typeof str !== 'string' || str.length === 0){
        return console.log(0)
    }
    let sum = 0
    for(i=0; i < str.length; ++i){
        sum += str.charCodeAt(i)
    }
    console.log(sum)
}
/*
sumOfCodes('My String')
sumOfCodes('12345')
sumOfCodes('')
sumOfCodes()
*/

                                            // 12
                                            
function startsWith(str1, str2) {
    let broke = str1.startsWith(str2)
    console.log(broke)
}
/*
startsWith('Hello World', 'World')
startsWith('Hello World', 'Hello')
*/

                                            // 13

function endsWith(str1,str2) {
    let broke = str1.endsWith(str2)
    console.log(broke)
}
/*
endsWith('Hello World', 'World')
endsWith('Hello World', 'Hello')
*/

                                                // 14

function formatTime(hours, mins) {
    let h = String(hours).padStart(2, '0')
    let m = String(mins).padStart(2,'0')
    console.log(h + ':' + m)
}
/*
formatTime(5, 30)
formatTime(1, 15)
formatTime(0, 45)
formatTime(0, 0)
*/


                                                // 15

function reverseString(str1) {
    let rev = str1.split('').reverse().join('')
    console.log(rev)
}
/*
reverseString('abcdef')
reverseString('12345')
*/


                                                // 16

function orderAlphabetically(str) {
    let res = str.split('').sort().join('')
    console.log(res)
}
/*
orderAlphabetically('webmaster')
orderAlphabetically('textbook')
orderAlphabetically('abc123xyz')
*/

                                            // 17

function containsSubstring(str1, str2) {
    if(str1.includes(str2)){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
/*
containsSubstring('Hello, World!', 'World')
containsSubstring('JavaScript is Fun', 'Python')
containsSubstring('12345', '34')
*/

                                            // 18

function countVowels(str) {
    let glas = 'aeiouyAEIOUY'
    let count = 0
    for(i = 0; i < str.length; ++i){
        if(glas.includes(str[i])){
            count++
        }
    }
    console.log(count)
}
/*
countVowels('apple')
countVowels('banana')
countVowels('cherry')
countVowels('aEiOu')
countVowels('XYZ')
*/

                                        // 19
function isPalindrome(str) {
    let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '')
    console.log(cleaned === cleaned.split('').reverse().join(''))
}
/*
isPalindrome('madam')
isPalindrome('racecar')
isPalindrome('apple')
isPalindrome('No lemon, no melon')
*/

                                        // 20
                                
function findLongestWord(phrase) {
    let broke = phrase.split(' ')
    let longest = ''
    for(word of broke){
        if(word.length > longest.length)
            longest = word
    }
    console.log(longest)
}   
/*
findLongestWord('The quick brown fox')
findLongestWord('A long and winding road')
findLongestWord('No words here')
*/

                                        // 21

function reverseWords(phrase) {
    let broke = phrase.split(' ')
    let array = []
    for(word of broke){
        let rev = word.split('').reverse().join('')
        array.push(rev)
    }
    console.log(array.join(' '))
}
/*
reverseWords('Hello World')
reverseWords('The Quick Brown Fox')
*/

                                    // 22
                                
function invertCase(str) {
    let res = ''
    for(leter of str){
        if(leter === leter.toUpperCase()){
            res += leter.toLowerCase()
        }
        else{
            res += leter.toUpperCase()
        }
    }
    console.log(res)
}
/*
invertCase('Hello, World!')
invertCase('JavaScript is Fun')
invertCase('12345')
*/

                                        // 23

function getStringFromTemplate(str1, str2) {
    console.log(`Hello, ${str1} ${str2}!`)
}
/*
getStringFromTemplate('John','Doe')
getStringFromTemplate('Chuck','Norris')
*/

                                        // 24

function extractNameFromTemplate(str) {
    let res = str.slice(7, -1)
    console.log(res)
}
/*
extractNameFromTemplate('Hello, John Doe!')
extractNameFromTemplate('Hello, Chuck Norris!')
*/

                                        // 25

function unbracketTag(str) {
    let clear = str.replaceAll('<', '')
    let more_clear = clear.replaceAll('>', '')
    console.log(more_clear)
}
/*
unbracketTag('<div>')
unbracketTag('<span>')
unbracketTag('<a>')
*/

                                        // 26

function extractEmails(str) {
    let mas = str.split(';')
    console.log(mas)
}
/*
extractEmails('angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com')
extractEmails('info@gmail.com')
*/

                                        // 27

function encodeToRot13(str) {
    let res =''
    for(i = 0 ; i < str.length; ++i){
        let cod = str.charCodeAt(i)
        if(cod >= 65 && cod <= 90){
            res += String.fromCharCode(((cod - 65 + 13) % 26) + 65)
        }
        else if(cod >= 97 && cod <= 122){
            res += String.fromCharCode(((cod - 97 + 13) % 26) + 97)
        }
        else{
            res += str[i]
        }
    }
    console.log(res)
}
/*
encodeToRot13('hello')
encodeToRot13('Why did the chicken cross the road?')
encodeToRot13('Gb trg gb gur bgure fvqr!')
encodeToRot13('NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm')
*/

                                                // 28

function getCardId(str) {
    let cards = ['A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
        'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
        'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
        'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
    ]
    let find = cards.indexOf(str)
    console.log(find)
}
/*
getCardId('A♣')
getCardId('2♣')
getCardId('Q♠')
getCardId('K♠')
*/