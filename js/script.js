        // スクロールアニメーション
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');

        window.addEventListener('scroll', () => {
            let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
            sections.forEach(section => {
                if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href').substring(1) === section.id) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });