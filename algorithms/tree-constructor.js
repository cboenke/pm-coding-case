function constructTree(strArr) {
  let pairArr = [];
  let childArr = [];
  let parentArr = [];
  let sortedChildArr = [];
  let sortedParentArr = [];
  let sameParent = 1;
  let result = true;

  for (let i = 0; i < strArr.length; i++) {
    let currentStr = strArr[i];
    let pair = currentStr.substring(1, currentStr.length - 1);

    pairArr.push(pair);

    let numbers = pair.split(",");

    let child = numbers[0];
    let parent = numbers[1];

    if (child == parent) {
      result = false;
    }

    childArr.push(child);
    parentArr.push(parent);

    sortedChildArr.push(child);
    sortedParentArr.push(parent);
  }

  sortedChildArr.sort((a, b) => a - b);

  for (i = 0; i < sortedChildArr.length; i++) {
    if (sortedChildArr[i] == sortedChildArr[i + 1]) {
      result = false;
    }
  }

  sortedParentArr.sort((a, b) => a - b);

  for (i = 0; i < sortedParentArr.length; i++) {
    if (sortedParentArr[i] == sortedParentArr[i + 1]) {
      sameParent++;
    } else {
      sameParent = 1;
    }
    if (sameParent > 2) {
      result = false;
    }
  }

  if (result) {
    for (i = 0; i < childArr.length; i++) {
      if (childArr.includes(parentArr[i]) && parentArr.includes(childArr[i])) {
        let indexOfParentInChild = childArr.indexOf(parentArr[i]);
        let indexOfChildInParent = parentArr.indexOf(childArr[i]);
        if (
          childArr[indexOfChildInParent] == parentArr[indexOfParentInChild] ||
          indexOfParentInChild == indexOfChildInParent
        ) {
          result = false;
        } else if (
          childArr.indexOf(parentArr[indexOfParentInChild]) ==
          parentArr.indexOf(childArr[indexOfChildInParent])
        ) {
          result = false;
        }
      }
    }
  }

  return result;
}
