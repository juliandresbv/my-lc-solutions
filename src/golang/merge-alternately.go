package mergealternately

func mergeAlternately(word1 string, word2 string) string {
	var word1Index int = 0
	var word2Index int = 0

	var result string = ""

	for word1Index < len(word1) && word2Index < len(word2) {
		result = result + string(word1[word1Index]) + string(word2[word2Index])

		word1Index++
		word2Index++
	}

	if word1Index < len(word1) {
		result = result + string(word1[word1Index:])
	}
	if word2Index < len(word2) {
		result = result + string(word2[word2Index:])
	}

	return result
}
