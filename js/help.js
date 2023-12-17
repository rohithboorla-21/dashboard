const starBtns = document.querySelectorAll('.star-btn');

    starBtns.forEach((btn, index) => {
        btn.addEventListener('click', function () {
            starBtns.forEach((star, i) => {
                star.style.color = 'transparent';
                if (i <= index) {
                    star.style.color = 'gold';
                }
            });
        });
    });