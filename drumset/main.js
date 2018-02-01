console.log('Volume changing: top row keys from ` to 0.');
document.onreadystatechange = () => {
  if (document.readyState === 'interactive') {
    document.querySelectorAll('audio').forEach(sound => {
      // sound.volume = 0.8; // disabled, maybe changeable volume in the somewhen in the future
    });

    function keyPress(key) {
      if (key >= '0' && key <= 9 || key === '`') {
        document.querySelectorAll('audio').forEach(sound => {
          sound.volume = key !== 0 ? (key !== '`' ? parseFloat(key) / 10 : 0) : 1;
        })
        return;
      }
      if (!document.getElementById(key)) return;
      document.getElementById(key).classList.add('active');
      document.querySelector('[data-key="' + key + '"]').pause();
      document.querySelector('[data-key="' + key + '"]').currentTime = 0;
      document.querySelector('[data-key="' + key + '"]').play();
    }

    document.querySelectorAll(".container>div").forEach(element => {
      element.onclick = function (e) { keyPress(element.id.toLowerCase()) };
    })
    window.addEventListener('keydown', function (e) {
      keyPress(e.key.toLowerCase());
    });
    window.addEventListener('transitionend', function (e) {
      if (e.propertyName === 'transform') {
        document.getElementById(e.target.id).classList.remove('active');
      }
    })
  };
};