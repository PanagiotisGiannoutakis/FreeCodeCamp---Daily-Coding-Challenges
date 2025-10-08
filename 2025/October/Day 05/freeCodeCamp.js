function hasExoplanet(readings) {
  var sum = 0, average = 0, flag;

    average = sum/readings.length;

    for(var i=0; i<readings.length; i++) {
      sum += returnedValue(readings.charAt(i));
    }

    average = sum/readings.length;
    console.log((80/100)*average)
    for(var i=0; i<readings.length; i++) {
      if(returnedValue(readings.charAt(i)) <= (80/100)*average) {
          return true;
        }
    }

  return false;
}

function returnedValue(ch) {
      var value = 0;
      switch(ch) {
        case "0":
          value = 0;
          break;
        case "1":
          value = 1;
          break;
        case "2":
          value = 2;
          break;
        case "3":
          value = 3;
          break;
        case "4":
          value = 4;
          break;
        case "5":
          value = 5;
          break;
        case "6":
          value = 6;
          break;
        case "7":
          value = 7;
          break;
        case "8":
          value = 8;
          break;
        case "9":
          value = 9;
          break;
        case "A":
          value = 10;
          break;
        case "B":
          value = 11;
          break;
        case "C":
          value = 12;
          break;
        case "D":
          value = 13;
          break;
        case "E":
          value = 14;
          break;
        case "F":
          value = 15;
          break;
        case "G":
          value = 16;
          break;
        case "H":
          value = 17;
          break;
        case "I":
          value = 18;
          break;
        case "J":
          value = 19;
          break;
        case "K":
          value = 20;
          break;
        case "L":
          value = 21;
          break;
        case "M":
          value = 22;
          break;
        case "N":
          value = 23;
          break;
        case "O":
          value = 24;
          break;
        case "P":
          value = 25;
          break;
        case "Q":
          value = 26;
          break;
        case "R":
          value = 27;
          break;
        case "S":
          value = 28;
          break;
        case "T":
          value = 29;
          break;
        case "U":
          value = 30;
          break;
        case "V":
          value = 31;
          break;
        case "W":
          value = 32;
          break;
        case "X":
          value = 33;
          break;
        case "Y":
          value = 34;
          break;
        case "Z":
          value = 35;
          break;
      }
      return value;
    }

console.log(hasExoplanet("665544554"));
console.log(hasExoplanet("FGFFCFFGG"));
console.log(hasExoplanet("MONOPLONOMONPLNOMPNOMP"));
console.log(hasExoplanet("FREECODECAMP"));
console.log(hasExoplanet("9AB98AB9BC98A"));
console.log(hasExoplanet("ZXXWYZXYWYXZEGZXWYZXYGEE"));