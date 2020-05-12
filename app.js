const crossBtn  = document.querySelectorAll('.cross-btn');

crossBtn.forEach(   btn => btn.addEventListener('click',e =>  e.target.parentElement.style.display = 'none' ));

