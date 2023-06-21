function countKSpikesV2(prices: number[], k: number) {
    const pricesIndexes = prices.map((price, index) => ({ price, index }));

    const sortedPricesIndexes = pricesIndexes.sort((a, b) => b.price - a.price);

    let kSpikes = 0;

    let maxPrice = sortedPricesIndexes.shift();

    while (
        maxPrice
        && maxPrice.index >= k
        && maxPrice.index < prices.length - k
    ) {
        kSpikes++;

        maxPrice = sortedPricesIndexes.shift();
    }

    return kSpikes;
}

function countKSpikesV3(prices: number[], k: number) {
    const pricesIndexes = prices.map((price, index) => ({ price, index }));

    const sortedPricesIndexes = pricesIndexes.sort((a, b) => b.price - a.price);

    const spikes = sortedPricesIndexes.filter(({ index }) => index >= k && index < prices.length - k);

    return spikes.length;
}

console.log(countKSpikesV3([1,2,8,5,3,4], 2));