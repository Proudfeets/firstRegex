paragraph = "Many cultures have created some sort of grain-based food item (pita, tortilla, injera, 馍 ) to add both weight and structure to a food item.  In that sense, yes, a taco is a sandwich.  So is a gyro and a calzone. However, if we look at the sandwich as the more European form of sliced bread + filling, then no, it is clearly not.  A tortilla, either crispy or soft, is not a sliced loaf."

runRegExp = (text, regex) => {
  console.log(text.match(regex))
}
// returns only non-letters and numbers
getUnreadable = new RegExp(/([^\w])/g)

runRegExp(paragraph, getUnreadable)

// returns only capital letters
getCapitals = new RegExp(/([A-Z])/g)

runRegExp(paragraph, getCapitals)

// returns all words that start with capital letters, unless they start with 'H'
getNoHs = new RegExp(/((?!H)[A-Z][a-z]+)/g)

runRegExp(paragraph, getNoHs)
