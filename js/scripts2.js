// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('[data-page-id="profile"]').click();
    console.log('Loading page:', pageId);
});
    
 

document.addEventListener('DOMContentLoaded', function () {
    
    window.loadPage = function (pageId) {
        // Implement your logic to load the corresponding page content
        console.log('Loading page:', pageId);
    };
    document.querySelectorAll('.sidebar-button').forEach(function (button) {
        button.addEventListener('click', function () {
            const pageId = button.dataset.pageId;
            loadPage(pageId);
            console.log('Loading page:', pageId);
            closeSidebar();
        });

    const navMenuBtn = document.querySelector('.menu-icon');
    const sidebar = document.getElementById('sidebar');
    const mainContainer = document.querySelector('.main-container');

    // Mapping menu items to their respective HTML pages
    const pageMapping = {
        'community': 'community.html',
        'profile': 'profle.html',
        'dashboard': 'dashboard.html',
        'ach_bad': 'ach_bad.html',
        'refer': 'refer.html',
        'settings': 'settings.html',
        'help': 'help.html'
    };

    // navMenuBtn.addEventListener('click', openSidebar);

    // function openSidebar() {
    //     sidebar.classList.toggle('sidebar-responsive');
    // }

    // function closeSidebar() {
    //     sidebar.classList.remove('sidebar-responsive');
    // }

    // // Handling menu item clicks
    // document.querySelectorAll('.sidebar-list-item a').forEach(function (menuItem) {
    //     menuItem.addEventListener('click', function (event) {
    //         event.preventDefault();

    //         const pageId = menuItem.getAttribute('href').replace('#', '');
    //         loadPage(pageId);
    //         closeSidebar();
    //     });
    // });

    // // Function to load HTML content dynamically
    function loadPage(pageId) {
        const pageUrl = pageMapping[pageId];

        if (pageUrl) {
            fetch(pageUrl)
                .then(response => response.text())
                .then(html => {
                    mainContainer.innerHTML = html;
                })
                .catch(error => console.error('Error loading page:', error));
        }
    }
    // document.querySelectorAll('.sidebar-button').forEach(function (button) {
    //     button.addEventListener('click', function () {
    //         const pageId = button.textContent.trim().toLowerCase().replace(/\s+/g, '-');
    //         loadPage(pageId);
    //         closeSidebar();
    //     });
    // });
});

// Include your existing JavaScript code here

// Modify the loadPage function to handle button clicks

});

