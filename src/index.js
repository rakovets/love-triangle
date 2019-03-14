/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  for (var i = 0; i < preferences.length; i++) {
    firstVertex = preferences[i];
    secondVertex = preferences[firstVertex - 1];
    thirdVertex = preferences[secondVertex - 1];
    pseudoFirstElement = preferences[thirdVertex - 1]
    
    if (!isValidVertices()) {
      continue;
    }
    
    if (firstVertex === pseudoFirstElement) {
      count++;
      deleteTriangleElements(preferences, i);
    }
  };
  return count;
};

function deleteTriangleElements(preferences, i) {
  delete preferences[i];
  delete preferences[firstVertex - 1];
  delete preferences[secondVertex - 1];
}

function isValidVertices() {
  return !((secondVertex === undefined || secondVertex === undefined || thirdVertex === undefined)
    || firstVertex === secondVertex || secondVertex === thirdVertex || thirdVertex == firstVertex);
}