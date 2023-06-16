function _wordBreak(s: string, wordDict: string[]): boolean {
  // wordDict.sort((a, b) => a.length - b.length);

  const splittedStr = s.split('');
  let _s = s;

  for (const word of wordDict) {
    let indexOfWord = _s.indexOf(word);

    while (indexOfWord >= 0) {
      word
      splittedStr.splice(indexOfWord, word.length)
      _s = splittedStr.join('');
      
      indexOfWord = _s.indexOf(word)
    }
  }

  const result = _s.length == 0;

  return result;
};

function wordBreak(s: string, wordDict: string[]): boolean {
  const visited = new Set<number>();
  const queue: number[] = [];

  queue.push(0);

  while (queue.length > 0) {
    const left = queue.shift();

    if (left != null) {
      if (left == s.length) {
        return true;
      }

      for (let right = left + 1; right < s.length + 1; right++) {
        if (visited.has(right)) {
          continue;
        }

        const currSubstring = s.substring(left, right);

        if (wordDict.includes(currSubstring)) {
          queue.push(right);
          visited.add(right);
        }
      }
    }
  }

  return false;
};

console.log(wordBreak('abc', ['a', 'bc', 'd']))