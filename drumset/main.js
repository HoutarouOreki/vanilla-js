document.onreadystatechange = () => {
  if (document.readyState === 'interactive') {
    document.querySelectorAll('audio').forEach(sound => {
      sound.volume = 0.8;
    });

    function keyPress(key) {
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