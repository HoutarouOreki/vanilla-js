document.onreadystatechange = () => {
  if (document.readyState === 'interactive') {
    function setDate() {
      let now = new Date();
      console.log(now.getHours(), now.getMinutes(), now.getSeconds());
      let seconds = now.getSeconds() / 60.0 * 360 - 90;
      let minutes = now.getMinutes() / 60.0 * 360 - 90;
      let hours = now.getHours() / 12.0 * 360 - 90;
      if (now.getSeconds() === 0) {
        document.getElementById('second-hand').style.transform = 'rotateZ(270deg)';
        window.setTimeout(() => {
          document.getElementById('second-hand').style.transitionDuration = '0s';
          document.getElementById('second-hand').style.transform = 'rotateZ(-90deg)';
        }, 200)
      }
      else if (now.getSeconds() === 1) {
        document.getElementById('second-hand').style.transitionDuration = '0.2s';
        document.getElementById('second-hand').style.transform = `rotateZ(${seconds}deg)`;
      }
      else document.getElementById('second-hand').style.transform = `rotateZ(${seconds}deg)`;
      document.getElementById('minute-hand').style.transform = `rotateZ(${minutes}deg)`;
      document.getElementById('hour-hand').style.transform = `rotateZ(${hours}deg)`;
    }

    setInterval(setDate, 1000);
  }
}