function findLandingSpot(matrix) {
    let totalDanger = 0;
    let totalDangerArray = [];
    let indexOfArray = [];
    let existBaseInThisLineFlag = false;
    for(let i=0; i<matrix.length; i++) {
        existBaseInThisLineFlag = false;
        for(let j=0; j<matrix[i].length; j++) {
            if(matrix[i][j] == 0) {
                existBaseInThisLineFlag = true;
                totalDanger = 0;
                if(i == 0) {
                    if(j==0) {
                        totalDanger += matrix[i+1][j] + matrix[i][j+1];
                    } else if(j==matrix[i].length-1) {
                        totalDanger += matrix[i+1][j] + matrix[i][j-1];
                    } else {
                        totalDanger += matrix[i+1][j] + matrix[i][j-1] + matrix[i][j+1];
                    }
                    
                } else if(i==matrix.length-1) {
                    if(j==0) {
                        totalDanger += matrix[i-1][j] + matrix[i][j+1];
                    } else if(j==matrix[i].length-1) {
                        totalDanger += matrix[i-1][j] + matrix[i][j-1];
                    } else {
                        totalDanger += matrix[i-1][j] + matrix[i][j-1] + matrix[i][j+1];
                    }
                } else {
                    if(j==0) {
                        totalDanger += matrix[i-1][j] + matrix[i][j+1] + matrix[i+1][j];
                    } else if(j==matrix[i].length-1) {
                        totalDanger += matrix[i-1][j] + matrix[i][j-1] + matrix[i+1][j];
                    } else {
                        totalDanger += matrix[i-1][j] + matrix[i][j-1] + matrix[i][j+1] + matrix[i+1][j];
                    }
                }
                totalDangerArray.push(totalDanger);
                indexOfArray.push([i,j]);
            }
        }
    }
    return indexOfArray[totalDangerArray.indexOf(Math.min.apply(null, totalDangerArray))];
}

console.log(findLandingSpot([[1, 0], [2, 0]]));
console.log(findLandingSpot([[9, 0, 3], [7, 0, 4], [8, 0, 5]]));
console.log(findLandingSpot([[1, 2, 1], [0, 0, 2], [3, 0, 0]]));
console.log(findLandingSpot([[9, 6, 0, 8], [7, 1, 1, 0], [3, 0, 3, 9], [8, 6, 0, 9]]));