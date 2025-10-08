function sendMessage(route) {
    let distance = 0;
    for(let i=0; i<route.length; i++) {
      distance += route[i];
    }
    let time = (distance/300000) + (0.5 * (route.length-1));
  return parseFloat(time.toFixed(4));
}

console.log(sendMessage([300000, 300000]));