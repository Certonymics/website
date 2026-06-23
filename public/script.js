// Handle form submission and show thank you message
(function() {
    // Check if form was submitted successfully (Netlify redirects with ?success=true)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        showThankYouMessage();
    }
    
    // Handle form submission via JavaScript
    const form = document.getElementById('waiting-list-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            // Let Netlify handle the submission
            // After submission, Netlify will redirect to ?success=true
            // If JavaScript submission is needed, we can handle it here
        });
    }
    
    function showThankYouMessage() {
        const form = document.getElementById('waiting-list-form');
        const thankYouMessage = document.getElementById('thank-you-message');
        
        if (form && thankYouMessage) {
            form.style.display = 'none';
            thankYouMessage.style.display = 'block';
        }
    }
    
    // Also handle the case where Netlify might use a different approach
    // Some Netlify forms redirect to a thank you page, but we want to stay on the same page
    // Check for form submission in localStorage or sessionStorage if needed
    window.addEventListener('load', function() {
        // Check if we're coming back from a Netlify redirect
        if (urlParams.get('success') === 'true') {
            showThankYouMessage();
        }
    });
})();
