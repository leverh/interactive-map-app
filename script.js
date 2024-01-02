document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map
    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Icons definition
    var icons = {
        default: L.icon({ iconUrl: './icons/default.svg', iconSize: [30, 30], iconAnchor: [15, 30] }),
        food: L.icon({ iconUrl: './icons/food.svg', iconSize: [30, 30], iconAnchor: [15, 30] }),
        cinema: L.icon({ iconUrl: './icons/cinema.svg', iconSize: [30, 30], iconAnchor: [15, 30] }),
        education: L.icon({ iconUrl: './icons/education.svg', iconSize: [30, 30], iconAnchor: [15, 30] }),
        cafe: L.icon({ iconUrl: './icons/cafe.svg', iconSize: [30, 30], iconAnchor: [15, 30] }),
        health: L.icon({ iconUrl: './icons/health.svg', iconSize: [30, 30], iconAnchor: [15, 30] }),
        hotel: L.icon({ iconUrl: './icons/hotel.svg', iconSize: [30, 30], iconAnchor: [15, 30] }),
        museum: L.icon({ iconUrl: './icons/museum.svg', iconSize: [30, 30], iconAnchor: [15, 30] }),
        park: L.icon({ iconUrl: './icons/park.svg', iconSize: [30, 30], iconAnchor: [15, 30] }),
        religion: L.icon({ iconUrl: './icons/religion.svg', iconSize: [30, 30], iconAnchor: [15, 30] }),
        shopping: L.icon({ iconUrl: './icons/shopping.svg', iconSize: [30, 30], iconAnchor: [15, 30] }),
        sport: L.icon({ iconUrl: './icons/sport.svg', iconSize: [30, 30], iconAnchor: [15, 30] }),
        transport: L.icon({ iconUrl: './icons/transport.svg', iconSize: [30, 30], iconAnchor: [15, 30] }),
    };

    // Function to add a marker to the map
    function addMarker(latlng, selectedIcon, iconType) {
        var marker = L.marker(latlng, { icon: selectedIcon }).addTo(map);
        
        // Example pop-up content
        var popupContent = `<b>${iconType}</b><br>Coordinates: ${latlng.lat.toFixed(2)}, ${latlng.lng.toFixed(2)}`;
        
        marker.bindPopup(popupContent);
    }

    // Click event to add a marker
    map.on('click', function(e) {
        var selectedIconValue = document.getElementById('icon-selector').value;
        var selectedIcon = icons[selectedIconValue] || icons['default'];
        addMarker(e.latlng, selectedIcon, selectedIconValue);
    });

    // Location search functionality
    document.getElementById('search-button').addEventListener('click', function() {
        var input = document.getElementById('search-input').value;
        if (input) {
            fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(input)}`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    var location = data[0];
                    map.setView([location.lat, location.lon], 13);
                } else {
                    console.log('Location not found');
                }
            })
            .catch(error => console.log('Error:', error));
        }
    });
});
