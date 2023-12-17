document.addEventListener('DOMContentLoaded', function () {
    const changePasswordBtn = document.getElementById('change-password');
    const changePasswordSection = document.getElementById('change-password-section');

    changePasswordBtn.addEventListener('click', function () {
        // Show the change password section
        changePasswordSection.style.display = 'block';
    });

    const updatePasswordBtn = document.getElementById('update-password');

    updatePasswordBtn.addEventListener('click', function () {
        // Add logic to update the password
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Add your password update logic here

        // For demo purposes, let's just log the new password
        console.log('New Password:', newPassword);
    });
});
