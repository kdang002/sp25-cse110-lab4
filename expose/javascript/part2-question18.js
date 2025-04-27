function updateTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
  }
  
  //Execute the function every 1000ms = 1s
  setInterval(updateTime, 1000);