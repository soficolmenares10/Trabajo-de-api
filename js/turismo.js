fetch("https://api-colombia.com/api/v1/TouristicAttraction")
.then(response => response.json())
.then(data => {

    let contenido = "";

    data.slice(0,20).forEach(lugar => {

        let imagen = lugar.images?.[0] || "https://via.placeholder.com/180";

        contenido += `
            <div class="card">
                <h2>${lugar.name}</h2>
                <p>${lugar.description}</p>
                <img src="${imagen}" alt="${lugar.name}">
            </div>
        `;
    });

    document.getElementById("turismo").innerHTML = contenido;
})
.catch(()=>{
    document.getElementById("turismo").innerHTML="Error";
});