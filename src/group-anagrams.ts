function groupAnagrams(strs: string[]): string[][] {
  const anagramsMap: Record<string, string[]> = {}

  for (const str of strs) {
    const sortedStr = str.split('').sort((a, b) => a.localeCompare(b)).join('')

    if (!anagramsMap[sortedStr]) {
      anagramsMap[sortedStr] = []
    }

    anagramsMap[sortedStr].push(str)
  }

  const groups = Object.values(anagramsMap)

  return groups
}