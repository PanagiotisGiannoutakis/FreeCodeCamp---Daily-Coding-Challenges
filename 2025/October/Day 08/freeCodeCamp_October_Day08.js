function goldilocksZone(mass) {
    const luminosity = Math.pow(mass, 3.5);
    const squareRootLuminosity = Math.sqrt(luminosity);
    const start = squareRootLuminosity * 0.95;
    const end = squareRootLuminosity * 1.37;
    return [parseFloat((start).toFixed(2)), parseFloat((end).toFixed(2))];
}

console.log(goldilocksZone(1));
console.log(goldilocksZone(0.5));
console.log(goldilocksZone(6));
console.log(goldilocksZone(3.7));
console.log(goldilocksZone(20));