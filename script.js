function updateUTCTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    document.getElementById('utcTime').textContent = utcTime;
  }
  
  updateUTCTime();
  setInterval(updateUTCTime, 1000);