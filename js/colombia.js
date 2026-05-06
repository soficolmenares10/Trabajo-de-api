fetch("https://api-colombia.com/api/v1/Country/Colombia")
.then(response => response.json())
.then(data => {
    document.getElementById("contenido").innerHTML = `
        <div class="card">
            <h2>${data.name}</h2>
            <p>Capital: ${data.stateCapital}</p>
            <p>Población: ${data.population}</p>
            <p>Superficie: ${data.surface}</p>
            <p>Moneda: ${data.currency}</p>
            <img src="${data.flags[1]}" alt="Bandera">
        </div>
    `;
})
.catch(() => {
    document.getElementById("contenido").innerHTML = "Error";
});