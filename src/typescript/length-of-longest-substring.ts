function lengthOfLongestSubstring(s: string): number {
  if (s.length <= 0) {
      return 0;
  }

  let longestSubstringLength = Number.NEGATIVE_INFINITY;

  const charIndexMap = new Map<string, number>();

  let leftIndex = 0;

  for (let rightIndex = 0; rightIndex < s.length; rightIndex++) {
      const char = s[rightIndex];
      const charIndex = charIndexMap.get(char) as number;

      if (charIndex >= leftIndex) {
          leftIndex = charIndex + 1;
      }

      longestSubstringLength = Math.max(longestSubstringLength, (rightIndex - leftIndex) + 1);

      charIndexMap.set(char, rightIndex);
  }

  return longestSubstringLength;
};