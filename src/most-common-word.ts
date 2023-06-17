function mostCommonWord(paragraph: string, banned: string[]): string {
  let _p = paragraph;
  
  _p = _p.replace(/[!?',;.']/gi, ' ');
  console.log(_p);
  
  _p = _p.replace(/\s+/g, ' ');
  console.log(_p);
  
  _p = _p.toLowerCase().trim();
  console.log(_p);
  
  let _p2 = _p.split(' ');
  console.log(_p2);
  
  const wordCountMap = new Map<string, number>();
  
  for (const word of _p2) {
      if (!banned.includes(word)) {
          const wordCount = wordCountMap.get(word);
          
          if (wordCount != null) {
              wordCountMap.set(word, wordCount + 1);
          } else {
              wordCountMap.set(word, 1);
          }
      }
      
  }
  
  let mostFreq = Number.NEGATIVE_INFINITY;
  let mostFreqWord: string = '';
  
  for (const [key, val] of wordCountMap) {
      if (val > mostFreq) {
          mostFreq = val;
          mostFreqWord = key;
      }
  }
  
  return mostFreqWord;
};