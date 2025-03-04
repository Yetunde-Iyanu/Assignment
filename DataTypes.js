// 1. Declaring a variable//
let firstName = "Yetunde";
let lastName = "Awolade";
let country = "Nigeria";
let city = "Lagos";
let age = 29;
let isMarried = true;
let year = 2025;

console.log(firstName)
console.log(lastName)
console.log(country)
console.log(city)
console.log(age)
console.log(isMarried)
console.log(year)

//2. //
console.log(typeof '10'== typeof 10);

//3. parselent //
console.log(parseInt('9.8') == 10);

//4.boolean // TRUTHY
console.log(Boolean(10));
console.log(Boolean("frontend web"));
console.log(Boolean(['']));
//FALSY//
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
//5.//
4> 3 && 10 < 12 //true//
4 > 3 && 10 > 12 // false//
4 > 3 || 10 < 12 // true//
4 > 3 || 10 > 12 // false//
!(4 > 3) //true//
!(4 < 3) // false
!(false) // true//
!(4> 3 && 10 < 12) // false //
!(4 > 3 && 10 > 12) // true //
!(4=== '4') // true //

console.log(4> 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 ==='4'));


// 8. declaring variable //
let challenge = '30 Days Of JavaScript'
console.log(challenge);
//9. toUpperCase by reassigning //
challenge = challenge.toUpperCase ();
console.log(challenge);

//10.toLowerCase//
challenge = challenge.toLowerCase();
console.log(challenge);

//11.Slice out the first word//
let string = '30 Days Of JavaScript';
let Slicestring = string.slice(3);
console.log(Slicestring)
//12. phrase//
let slicedphrase = "30 Days Of JavaScript"
console.log(slicedphrase)
//13. script//
let containScript = challenge.includes('script');
console.log(containScript)

//14. index //
console.log(string.indexOf('D'))
console.log(string.indexOf('j'))

//15. lastindex//
console.log(string.lastIndexOf('t'))

//16. position//
let sentence = 'You cannot end a senctence with because because because is a conjunction';
let firstIndexOfbecause = sentence.indexOf('because');
console.log(firstIndexOfbecause);

//17. startwithmethod//
let today = '30 Days Of JavaScript';
let startwith30 = today.startsWith('30');
console.log(startwith30);

//18.endwithmethod
let now = '30 Days JavaScript';
let endswithJavaScript = now.endsWith('JavaScript');
console.log(endswithJavaScript);

//19. generate a random number betwwen 0 - 100//
let randomNumber = Math.floor(Math.random()* 100);
console.log(randomNumber);

//20.//
let Dorcas = 20;
let John = 15;
if (Dorcas > John){
    console.log('Dorcas is greater than John');
} else{
    console.log('Dorcas is lesser then John');
}
// ternary operator//
let result = (Dorcas > John) ? 'Dorcas is greater than John' : 'Dorcas is less than John'
console.log (result);

//21. declaring variable named score//
let scores = 90;
if (scores >= 80 && scores <= 100){
    console.log('Grade: A')
} else if (scores >= 70 && scores<= 89) {
    console.log('Grade: B');
}else if (scores >= 60 && scores <= 79 ) {
    console.log('Grade: C');
}else if (scores >= 50 && scores <= 69) {
    console.log('Grade: D');
}else if (scores >= 40 && score <= 59) {
    console.log('Grdae:F')
}else {
    console.log('Invalid score');
}