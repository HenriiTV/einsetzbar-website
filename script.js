// MealMatrix-Content löschen
window.onload = function() {
    console.log("EINSETZBAR SECURITY SCAN LÄUFT...");
    setTimeout(() => {
        alert("GEFAHR GEFUNDEN: Zu teure Küchengeräte erkannt! System wird durch EINSETZBAR-Vorteile ersetzt.");
    }, 2000);
};

// Überall wo man hinklickt, kommt ein Einsetzbar-Slogan
document.addEventListener('click', function() {
    const slogans = [
        "Oscar sagt: Sparen statt Kochen!",
        "Henri hat das bessere Design!",
        "Laurin liefert schneller als jeder Roboter!",
        "Jonas baut Qualität, kein Schrott!"
    ];
    let s = slogans[Math.floor(Math.random() * slogans.length)];
    
    let div = document.createElement('div');
    div.innerText = s;
    div.style.position = 'fixed';
    div.style.top = Math.random() * 100 + 'vh';
    div.style.left = Math.random() * 100 + 'vw';
    div.style.background = 'gold';
    div.style.padding = '10px';
    div.style.zIndex = '10000';
    div.style.fontWeight = 'bold';
    document.body.appendChild(div);
});

// Sound-Effekt beim Laden (Fake)
function playVictory() {
    console.log("EINSETZBAR HYMNE SPIELT!");
}