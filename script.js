window.addEventListener('load', function() {
    var splashScreen = document.getElementById('splash-screen');
    var welcomeAnimation = document.getElementsByClassName('welcome-animation')[0];
  
    // Animasyon tamamlandığında splashScreen'i gizle
    splashScreen.addEventListener('transitionend', function() {
      splashScreen.classList.add('hidden');
    });
  
    // 2 saniye sonra splashScreen'i gizle
    setTimeout(function() {
      splashScreen.classList.add('hidden');
    }, 2000);
  
    // Welcome animasyonunu başlat
    setTimeout(function() {
      welcomeAnimation.style.opacity = '1';
    }, 1000);
  });
  