const readline = require('readline');
const inp = readline.createInterface
({
    input: process.stdin});
    const userInput = [];
    inp.on("line", (data) => {
        userInput.push(data);
        
    });
    inp.on("close", () => {
        //start-here
        let farook=[1,23,456,"hi","how","are","you",true];

for(i=0;i<farook.length;i++)
{

console.log(typeof(farook[i]));
       //end-here
}   
    });