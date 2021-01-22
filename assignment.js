function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;

    if(kilometer<0){
        throw new Error("Enter valid Number");
    }

    return meter;
}

var user1 = kilometerToMeter(-5);
console.log(user1);
// var user2 = kilometerToMeter(5);
// console.log(user2);


function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;

    var totalBudget = watchPrice + phonePrice + laptopPrice;

    return totalBudget;
}

// var result = budgetCalculator(10, 8, 2);
// console.log(result);

function hotelCost(day) {
    var totalCost = 0;
    if (day <= 10) {
        totalCost = day * 100;
    } else if (day <= 20) {
        var day10 = 10 * 100;
        var remainingDay = day - 10; //counting remaining  day to get 11-20days
        var day20 = remainingDay * 80;
        totalCost = day10 + day20;
    } else {
        var day10 = 10 * 100;
        var day20 = 10 * 80;
        var remainingDay = day - 20; //counting remaining  day to get after 20 days
        var restOfTheDay = remainingDay * 50;
        totalCost = day10 + day20 + restOfTheDay;
    }
    return totalCost;
}

// var result = hotelCost(91);
// console.log(result);

function megaFriend(friendsName) {
    var longName = friendsName[0];
    for (var i = 0; i < friendsName.length; i++) {
        var element = friendsName[i];
        if (element.length > longName.length) {
            longName = element;
        }
    }
    return longName;
}

// var result = megaFriend(["abdul wadud Prince","deepu", "unmoy", "shamim", "abdul wahid Tanzim"]);
// console.log(result);