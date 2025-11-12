const repeatString = function(string, num) {
// so need a for loop def
let resultstring = ""



for(let i=0;i<num;i++)
{
    resultstring+=string;
}

if(num < 0)
{
    resultstring="ERROR"
}

return resultstring


};



// Do not edit below this line
module.exports = repeatString;
