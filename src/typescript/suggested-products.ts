function suggestedProducts(products: string[], searchWord: string): string[][] {
  const _products = products.sort((a, b) => a.localeCompare(b));

  const results: string[][] = [];

  for (let i = 0; i < searchWord.length; i++) {
    const typed = searchWord.substring(0, i + 1);

    const searchResult = _products.filter(product => product.startsWith(typed));
    const first3FromSearchResult = searchResult.slice(0, 3);

    results.push(first3FromSearchResult);
  }

  return results;
};