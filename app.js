// Rose St. exact location near Pasong Malapad
const roseStreet = [14.69585, 121.00685];

// 1. Initialize Map (Dark Mode)
const map = L.map('map-canvas', {
    zoomControl: true,
    attributionControl: false
}).setView(roseStreet, 18);

// Gagamit tayo ng Dark Grey na map tiles para "Rose St." lang ang lutang
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 20
}).addTo(map);


const marker = L.marker(roseStreet).addTo(map);
marker.bindPopup("<b style='font-family:sans-serif;'>Rose St.</b>").openPopup();


function fetchAreaStats() {
    const box = document.getElementById('ajax-content');
    box.innerHTML = "<p><i>Scanning area records...</i></p>";

    setTimeout(() => {
        box.innerHTML = `
            <div style="margin-bottom: 8px; color: #38bdf8; font-size: 0.75rem; font-weight: 800;">DATA RECOVERY SUCCESS</div>
            <p><strong>Location:</strong> Rose Street</p>
            <p><strong>Boundary:</strong> Pasong Malapad</p>
            <p><strong>Barangay:</strong> Ugong</p>
            <p><strong>Classification:</strong> Residential</p>
        `;
    }, 600);
}

document.getElementById('refresh-btn').onclick = fetchAreaStats;
fetchAreaStats();