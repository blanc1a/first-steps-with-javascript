function extractClassName(sessionTitle) {
  //variable und die ausgabe reinzuspeichern
  let result = "";
  //gegebenen string in array gesplittet
  const myArr = sessionTitle.split(" ");
  //objekt für die monate
  const month = {
    Januar: 1,
    Februar: 2,
    März: 3,
    Maerz: 3,
    April: 4,
    Mai: 5,
    Juni: 6,
    Juli: 7,
    August: 8,
    September: 9,
    Oktober: 10,
    November: 11,
    Dezember: 12,
  };
  //variable, um pattern zu prüfen => ist teil-string?
  const pattern = sessionTitle.includes("Live-Session Class");
  //if bedingung, um zu prüfen, ob das jahr auch 4 char-länge hat
  if (myArr[2].length !== 4) {
    return null;
  }
  //if bedingung, um zu prüfen, ob pattern vorhanden ist => sonst return null
  if (pattern) {
    //if bedingung, um zu prüfen, ob der monat aus gegebenem string (myArr[3]) im objekt month vorhanden ist
    //wenn ja => ausgabe
    if (myArr[3] in month) {
      result = myArr[2] + "-0" + month[myArr[3]]; //month[myArr[3]] => bracket notation, um den inhalt des objekts auszugeben
      return result;
    } else {
      return null;
    }
  } else {
    return null;
  }
}

//Parameter = String
//Wenn dieser String das pattern "Class YEAR MONTH_NAME" hat => return neuen String der aussieht wie "Class 2022 September"
//Wenn dieser String anderen pattern hat => return null
