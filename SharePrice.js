var prices = [10, 6, 3, 9, 11, 5];

maxProfit(prices);
// returns 8 (buying for $3 and selling for $11)


function maxProfit(prices) {
    var minPrice = prices[0];
    var maxProfit = prices[1]-prices[0];

    for(var i=1; i<prices.length; i++) {
        var currentPrice = prices[i];
        var potentialProfit = currentPrice-minPrice;
        maxProfit = maxProfit>potentialProfit ? maxProfit : potentialProfit;
        minPrice = minPrice<currentPrice ? minPrice : currentPrice;
    }

    return maxProfit;
}