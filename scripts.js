// Wait for the document to fully load before running JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get the computer screen element
    const computerScreen = document.getElementById('computerScreen');
    
    // Add click event listener to computer screen
    computerScreen.addEventListener('click', function() {
        // Get the overlay element
        const overlay = document.getElementById('powershellCommands');
        
        // Toggle display of overlay
        if (overlay.style.display === 'block') {
            overlay.style.display = 'none'; // Hide if already visible
        } else {
            overlay.style.display = 'block'; // Show if hidden
        }
    });
});
