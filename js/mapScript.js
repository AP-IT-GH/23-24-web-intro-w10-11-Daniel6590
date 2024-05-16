/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat.  
Gebruik hiervoor de documentatie op https://leafletjs.com/ 
*/

// Maak een Leaflet kaart aan en stel het midden in op de coördinaten van de AP-Hogeschool
let map = L.map('map').setView([51.23009, 4.41616], 17);

// Voeg een tegel laag toe van OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Bepaal de grenzen van het gebouw van de AP-Hogeschool
let bounds = [[51.23041, 4.4155], [51.22991, 4.41675]];

// Kleur de rechthoek in met de rode AP-kleur
L.rectangle(bounds, {color: "#e60005", weight: 1}).addTo(map);

// Plaats een marker op de locatie van de AP-Hogeschool met een popup
let marker = L.marker([51.23009, 4.41616]).addTo(map);
marker.bindPopup("<b>AP-Hogeschool</b><br>Ellermanstraat 33").openPopup();

// Definieer een aangepast icoon voor de marker
let coffeeIcon = L.icon({
    iconUrl: '../assets/coffee-icon.png',
    shadowUrl: '../assets/coffee-icon-shadow.png',
    iconSize:     [60, 60], // grootte van het icoon
    shadowSize:   [60, 60], // grootte van de schaduw
    iconAnchor:   [30, 60], // punt op het icoon dat overeenkomt met de locatie van de marker
    shadowAnchor: [30, 60],  // hetzelfde voor de schaduw
    popupAnchor:  [0, -60] // punt van waaruit de popup moet worden geopend ten opzichte van het icoonanker
});

// Voeg een marker toe met het aangepaste koffie-icoon
L.marker([51.23009, 4.41616], {icon: coffeeIcon}).addTo(map);