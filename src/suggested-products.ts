function suggestedProducts(products: string[], searchWord: string): string[][] {
  const results: string[][] = [];

  for (let i = 0; i < searchWord.length; i++) {
    const typed = searchWord.substring(0, i + 1);

    const searchResult = products.filter(product => product.startsWith(typed));
    searchResult.sort((a, b) => a.localeCompare(b));
    
    const first3FromSearchResult = searchResult.slice(0, 3);

    results.push(first3FromSearchResult);
  }

  return results;
};