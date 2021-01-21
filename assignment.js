function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}

// var user1 = kilometerToMeter(1);
// console.log(user1);
// var user2 = kilometerToMeter(5);
// console.log(user2);


function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;

    var totalPrice = watchPrice + phonePrice + laptopPrice;

    return totalPrice;
}

// var result = budgetCalculator(10, 8, 2);
// console.log(result);

function hotelCost(day) {
    var totalCost = 0;
    if (day <= 10) {
        totalCost = day * 100;
    } else if (day <= 20) {
        var day10 = 10 * 100;
        var remainingDay = day - 10; //cointing remaining  day to get 11-20days
        var day20 = remainingDay * 80;
        totalCost = day10 + day20;
    } else {
        var day10 = 10 * 100;
        var day20 = 10 * 80;
        var remainingDay = day - 20; //cointing remaining  day to get 11-20days
        var restOfTheDay = remainingDay * 50 ;
        totalCost = day10 + day20 + restOfTheDay;
    }
    return totalCost;
}

var result = hotelCost(20);
console.log(result);