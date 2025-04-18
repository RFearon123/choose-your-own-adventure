console.log("whoop");

window.addEventListener('DOMContentLoaded', () => {
    const leftTarget = document.querySelector('.nav-container-left');
    const rightTarget = document.querySelector('.nav-container-right');
  
    Promise.all([
      fetch('leftAsideNavBar.html').then(res => res.text()),
      fetch('rightAsideNavBar.html').then(res => res.text())
    ])
    .then(([leftHTML, rightHTML]) => {
      if (leftTarget) leftTarget.innerHTML = leftHTML;
      if (rightTarget) rightTarget.innerHTML = rightHTML;
    })
    .catch(error => {
      console.error('Error loading sidebars:', error);
    });
  });
  