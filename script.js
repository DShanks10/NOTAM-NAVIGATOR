let currentLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);

function changeMapType() {
    const mapType = document.getElementById('mapType').value;

    if (currentLayer) {
        map.removeLayer(currentLayer);
    }

    if (mapType === 'osm') {
        currentLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18
        }).addTo(map);
    } else if (mapType === 'satellite') {
        currentLayer = L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
            maxZoom: 18,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
        }).addTo(map);
    } else {
        alert('Unknown map type selected!');
    }
}
