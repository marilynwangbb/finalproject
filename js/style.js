document.addEventListener('DOMContentLoaded', () => {
    const photos = document.querySelectorAll('.artist_photo');
    const textSections = document.querySelectorAll('.intro div');

    // Function to hide all text sections
    function hideAllTextSections() {
        textSections.forEach(section => {
            section.style.display = 'none';
        });
    }

    // Initially hide all text sections
    hideAllTextSections();

    photos.forEach(photo => {
        // Event listener for mouse click
        photo.addEventListener('click', () => {
            displayText(photo);
        });

        // Event listener for keyboard (Enter key)
        photo.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                displayText(photo);
            }
        });
    });

    // Function to display text of the clicked or focused photo
    function displayText(photo) {
        hideAllTextSections();

        const targetId = photo.getAttribute('data-target');
        const targetText = document.getElementById(targetId);
        targetText.style.display = 'block';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Function to scroll to an element
    function scrollToElement(element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        });
    }

    // Add click event to each card
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function() {
            // Hide all Spotify players
            document.querySelectorAll('.spotify-player').forEach(player => player.style.display = 'none');

            // Get the ID of the clicked card
            const cardID = this.getAttribute('id');

            // Find the corresponding Spotify player and show it
            const player = document.querySelector('.spotify-player#' + cardID);
            if (player) {
                player.style.display = 'block';
                scrollToElement(player); // Scroll to the player
            }
        });

        // Adding keyboard accessibility
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                this.click(); // Simulate click on Enter or Space press
            }
        });
    });
});