// script.js

// Function to get user's current location
document.getElementById('get-location-btn').addEventListener('click', function() {
    const locationDetails = document.getElementById('location-details');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            locationDetails.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
        }, () => {
            locationDetails.textContent = 'Unable to retrieve your location.';
        });
    } else {
        locationDetails.textContent = 'Geolocation is not supported by your browser.';
    }
});

// Function to simulate ambulance tracking
document.getElementById('track-ambulance-btn').addEventListener('click', function() {
    const ambulanceStatus = document.getElementById('ambulance-status');
    ambulanceStatus.textContent = 'Tracking nearest ambulance...';

    setTimeout(() => {
        ambulanceStatus.textContent = 'Ambulance is 5 minutes away!';
    }, 2000); // Simulating tracking delay
});

// Function to simulate calling an ambulance
document.getElementById('call-btn').addEventListener('click', function() {
    alert('Calling emergency ambulance services...');
    
    // You can replace this with a real phone call link in a mobile app:
    window.location.href = 'tel:+911';
});
