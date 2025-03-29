// Get the toggle button
const darkModeToggle = document.getElementById('darkModeToggle');

// Check saved mode from localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark');
}

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    // Save the current mode to localStorage
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});
