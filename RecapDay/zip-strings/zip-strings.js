function zipStrings(strA, strB) {
  const myArr1 = strA.split("");
  const myArr2 = strB.split("");
  let result = [];

  if (myArr1 > myArr2) {
    //größeres array muss länge der for() bestimmen
    for (let i = 0; i < myArr1.length; i++) {
      result.push(myArr1[i]);
      result.push(myArr2[i]);
    }
  } else if (myArr1 <= myArr2) {
    for (let j = 0; j < myArr2.length; j++) {
      result.push(myArr1[j]);
      result.push(myArr2[j]);
    }
  }

  return result.join("");
}
