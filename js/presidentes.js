fetch("https://api-colombia.com/api/v1/President")
.then(response => response.json())
.then(data => {

    data.sort((a,b)=>new Date(a.startPeriodDate)-new Date(b.startPeriodDate));

    let contenido = "";

    data.slice(0,15).forEach(presidente => {

        contenido += `
            <div class="card">
                <h2>${presidente.name}</h2>
                <p>${presidente.startPeriodDate} - ${presidente.endPeriodDate}</p>
                <p>${presidente.politicalParty || "No disponible"}</p>

                <img 
                    src="${presidente.image}"
                    alt="${presidente.name}"
                    onerror="this.src='https://via.placeholder.com/180?text=Sin+imagen'"
                >
            </div>
        `;
    });

    document.getElementById("presidentes").innerHTML = contenido;
})
.catch(()=>{
    document.getElementById("presidentes").innerHTML="Error";
});