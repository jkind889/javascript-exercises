const leapYears = function(year)
{

    if(year % 4 == 0)
    {
        if(!Number.isInteger(year / 100) || Number.isInteger(year / 400))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    return false;

};

// Do not edit below this line
module.exports = leapYears;
