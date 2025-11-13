const reverseString = function(string) 
{

    let result ="";
    let decrement= -1;
    for(let i= 0;i<string.length;i++)
    {
        result+=string.at(decrement);
        decrement--;
    }

    return result;


};

console.log(reverseString("hello world"));



// Do not edit below this line
module.exports = reverseString;
