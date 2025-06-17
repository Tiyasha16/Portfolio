//animation for about(in-screen)
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
});

document.querySelectorAll('.info').forEach(section => {
    observer.observe(section);
});

//animation for skill(in-screen)
const icons = document.querySelectorAll('.skill-icons img');

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            icons.forEach((icon, index) => {
                setTimeout(() => {
                    icon.classList.add('show');
                }, index * 150);
            });
            //observer2.unobserve(entry.target);
        }
    });
});

observer2.observe(document.querySelector('.skill-icons img'));
