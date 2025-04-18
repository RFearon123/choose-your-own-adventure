// left aside stuff

window.addEventListener('DOMContentLoaded', () => {
    fetch('leftAsideNavBar.html')
      .then(res => res.text())
      .then(html => {
        document.getElementById('nav-container-left').innerHTML = html;
      });
  });


  // right aside stuff

  window.addEventListener('DOMContentLoaded', () => {
    fetch('rightAsideNavBar.html')
      .then(res => res.text())
      .then(html => {
        document.getElementById('nav-container-right').innerHTML = html;
      });
  });