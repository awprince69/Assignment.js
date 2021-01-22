//Kilometer to Meter Calculation
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;

    if (kilometer < 0) {
        return ("Kilometer input is invalid");//validation checker
    }

    return meter;
}

// var user1 = kilometerToMeter(-1);
// console.log(user1);

//Budget calulator

function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;

    var totalBudget = watchPrice + phonePrice + laptopPrice;

    if (watchPrice < 0 || phonePrice < 0 || laptopPrice < 0) {   //validation checker
        return ("Budgetcalculator input is invalid");
    }

    return totalBudget;
}

// var result = budgetCalculator(-1, -1);
// console.log(result);

//Hotel Cost Counting
function hotelCost(day) {
    var totalCost = 0;
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
    return totalCost;
}

var result = hotelCost(21);
console.log(result);

//Mega friend name
function megaFriend(friendsName) {
    var longName = friendsName[0];
    for (var i = 0; i < friendsName.length; i++) {
        var element = friendsName[i];
        if (element.length > longName.length) {
            longName = element;
        }
    }
    if (friendsName== ""){
        return("Array string is invalid");//if input array  string is empty then show error message.
    }
    return longName;
}

// var result = megaFriend([]);
// console.log(result);