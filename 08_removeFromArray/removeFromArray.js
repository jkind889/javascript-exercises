const removeFromArray = function(array, ...theArgs)
{

for(let i = 0; i<array.length; i++)
{
    if(theArgs.includes(array[i]))
    {
        let index = i
        if(index > -1)
        {
            array.splice(index,1);
            i--;
        }
    }
    else
    {
      continue;
    }
}
return array;

}; 

// Do not edit below this line
module.exports = removeFromArray;
