function moonPhase(dateString) {
    const startDate = new Date("2000-01-06");
    const endDate = new Date(dateString);
    
    // Convert dates to UTC timestamps
    let utc1 = 
        Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    let utc2 = 
        Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());

    // Calculate the time difference in milliseconds
    let timeDiff = Math.abs(utc2 - utc1);

    // Convert milliseconds to days
    let daysDiff = Math.ceil((timeDiff+1) / (1000 * 60 * 60 * 24));

    const phaseOfTheMoon = daysDiff%28;
    switch(true) {
        case phaseOfTheMoon<=7:
            return "New";
        case phaseOfTheMoon>=8 && phaseOfTheMoon<=14:
            return "Waxing";
        case phaseOfTheMoon>=15 && phaseOfTheMoon<=21:
            return "Full";
        case phaseOfTheMoon>=22 && phaseOfTheMoon<=28:
            return "Waning";
        default:
            return "Error"
    }
}

console.log(moonPhase("2000-01-12"));
console.log(moonPhase("2000-01-13"));
console.log(moonPhase("2014-10-15"));
console.log(moonPhase("2012-10-21"));
console.log(moonPhase("2022-12-14"));