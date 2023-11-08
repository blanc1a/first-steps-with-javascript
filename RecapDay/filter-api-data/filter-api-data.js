function filterApiData(apiData, mandatoryKeys) {
  //neues leeres array, um die gefilterten objekte zu speichern
  const newArr = [];
  //for of schleife, um über jedes objekt in apiData zu iterieren
  //obj ist eine variable, welche für jedes element(objekt) in apiData steht
  for (const obj of apiData) {
    //bool variable auf true gesetzt => wird genutzt, um nachzuverfolgen, ob das aktuelle objekt die mandatory keys hat
    let hasKeys = true;
    for (const key of mandatoryKeys) {
      //prüft, ob dass aktuelle objekt(obj) NICHT alle mandatory keys hat
      if (!obj.hasOwnProperty(key)) {
        //wenn mandatory keys nicht alle vorhanden sind => bool variable auf false
        hasKeys = false;
      }
    }
    //wenn bool variable auf true => keys in das neue leere array pushen
    if (hasKeys === true) {
      newArr.push(obj);
    }
  }
  return newArr;
}

//parameter apiData ist ein array, welches objekte beinhaltet
//=> diese objekte können verschiedene keys beinhalten
//parameter mandatoryKeys ist ein array welches alle keys eines objektes von apiData beinhaltet,
//die durch apiData-array getestet werden sollen
//es soll ein objekt returnt werden, welches alle keys aus dem mandatoryKeys-array beinhaltet
