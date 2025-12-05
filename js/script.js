function updateProgressBar() {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    
    const scrolled = window.scrollY;
    
    const progress = (scrolled / totalHeight) * 100;
    
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        progressBar.style.width = progress + '%';
    }
}

window.addEventListener('scroll', updateProgressBar);

updateProgressBar();

<button onclick="location.href='./html/ai.html'">Go to Page 2</button>

