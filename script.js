// left aside stuff

window.addEventListener('DOMContentLoaded', () => {
    fetch('leftAsideNavBar.html')
      .then(res => res.text())
      .then(html => {
        document.getElementsByClassName('nav-container-left').innerHTML = html;
      });
  });


  // right aside stuff

  window.addEventListener('DOMContentLoaded', () => {
    fetch('rightAsideNavBar.html')
      .then(res => res.text())
      .then(html => {
        document.getElementsByClassName('nav-container-right').innerHTML = html;
      });
  });