//https://github.com/awprince69/Assignment.js


//Kilometer to Meter Calculation
function kilometerToMeter(kilometer) {

    if (kilometer < 0) {
        return ("Kilometer input is invalid");//validation checker
    }
    else {
        var meter = kilometer * 1000; //calculate to get Meter 
    }

    return meter; // value to be returned to the function caller
}



//Budget calulator
function budgetCalculator(watch, phone, laptop) {

    var watchPrice = watch * 50;                  //calculate here parameter input (watch,phone,laptop) price 
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;

    var totalBudget = watchPrice + phonePrice + laptopPrice; //calculate total amount

    if (watchPrice < 0 || phonePrice < 0 || laptopPrice < 0) {   //validation checker
        return ("Budgetcalculator input is invalid");
    }

    return totalBudget;     // value to be returned to the function caller
}




//Hotel Cost Counting
function hotelCost(day) {
    var totalCost = 0;

    if (day < 0) {
        return ("Day cannot be Negative");//Validation Checker
    }
    else {
        if (day <= 10) {
            totalCost = day * 100;
        } else if (day <= 20) {
            var firstTenDay = 10 * 100;
            var remainingDay = day - 10; //counting remaining  day to get 11-20days
            var secondTenDay = remainingDay * 80;
            totalCost = firstTenDay + secondTenDay;
        } else {
            var firstTenDay = 10 * 100;
            var secondTenDay = 10 * 80;
            var remainingDay = day - 20; //counting remaining  day to get after 20 days
            var restOfTheDay = remainingDay * 50;
            totalCost = firstTenDay + secondTenDay + restOfTheDay;
        }
    }

    return totalCost; // value to be returned to the function caller
}




//Mega friend name
function megaFriend(friendsName) {
    var longName = friendsName[0];


    if (friendsName == "") {
        return ("Friends name input is invalid");     //Validation Checker
    }
    else {

        for (var i = 0; i < friendsName.length; i++) {
            var element = friendsName[i];
            if (element.length > longName.length) {        //checking longName from the array
                longName = element;
            }
        }
    }


    return longName; // value to be returned to the function caller
}
