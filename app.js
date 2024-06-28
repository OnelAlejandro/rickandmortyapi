let cards_container = document.querySelector('.cards') 
let pagina = 1;
let botonSiguiente = document.querySelector('.botonSiguiente')
let botonAnterior = document.querySelector('.botonAnterior')

botonSiguiente.addEventListener('click', () => {
    pagina += 1;
    cards_container.innerHTML = ''
    rickAndMorty()
})

botonAnterior.addEventListener('click', () => {
    if (pagina > 1) {
        pagina -= 1;
        cards_container.innerHTML = ''
        rickAndMorty()
    }
})

async function rickAndMorty() {
    try {
        
        let respuesta = await fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
        let datos = await respuesta.json()

        console.log(datos.results)

        datos.results.forEach(result => {
            console.log(result)
            cards_container.innerHTML += `
            <div class="character">
                <div class="image">
                    <img src="${result.image}" alt="">
                    <h3 class="status">${result.status}</h3>
                </div>
            <div class="card">
                <h1>${result.name}</h1>
                <h6>Specie</h6><h2>${result.species}</h2>
                <h6>Gender</h6><h2>${result.gender}</h2>
            </div>
        </div>
            `
        });

    } catch(error) {
        console.log(error)
    }
}

rickAndMorty()