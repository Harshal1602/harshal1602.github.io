$(document).ready(function() {
    // Check if the URL contains query parameters
    if (window.location.search.length > 0) {
        // Use the History API to remove query parameters without reloading the page
        var url = window.location.href.split('?')[0];
        window.history.replaceState({}, document.title, url);
    }
});