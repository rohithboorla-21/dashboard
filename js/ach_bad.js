document.addEventListener('DOMContentLoaded', function () {
    const badges = document.querySelectorAll('.badge img');

    badges.forEach(badge => {
        badge.addEventListener('click', function () {
            // Toggle between dim and bright on click
            badge.classList.toggle('dimmed');
        });
    });
});
