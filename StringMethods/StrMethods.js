console.log('----------------------------<< String methods >>------------------------------');
//String methods
const str2='Hello'
//tuUpperCase
str2.toUpperCase()
const result = str2.toUpperCase()
//because primitive types are immutable 
console.log(str2);   //Hello
console.log(result);    //HELLO

//toLowerCase
        //012345678910111213
        let greet='Good Afternoon'
        greet =greet.toLowerCase()
        console.log(greet);     //good afternoon

        console.log(greet.charAt(13));
        console.log(greet.indexOf('o',3));
        const res=str.concat(' ,',greet,' all')
        console.log(res);
        const hasNoon=greet.includes('noon')
        console.log(' hasNoon',hasNoon);
        const value=greet.replace('afternoon ','night')
        console.log(value);

        console.log('--------------------------Substring and Substr--------------------------');
        console.log(value);

        const data ='Hello all, Welcome to Javascript session'
        const extractedstr=data.substr(11,10)
        console.log(extractedstr);
        //end is not inclusive
        const substrVal=data.substring(1,4)
        console.log(substrVal);
        console.log('------------------------------<< Trim >>-----------------------------');

        const email='                      chandan.k@testyantra.com            '
        console.log('email',email);
        const emailAfterTrim=email.trim()
        console.log('emailAfterTrim',emailAfterTrim);
        const gmail='                      chandan.k@testyantra.com             '
        console.log('start - ',gmail.trimStart());
        console.log('end -',gmail.trimEnd());

