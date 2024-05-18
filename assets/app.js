
// fetch


const body = document.querySelector('body')
const input = document.querySelector('input')
const button = document.querySelector('button')


button.addEventListener('click', () => {
    const endPoint = input.value
    if (input.value === "") {
        body.innerHTML += `<p>Debes ingresar un número</p>`
        setTimeout(() => {
            location.reload()
        }, 1700);
    } else
        fetch(`https://pokeapi.co/api/v2/pokemon/${endPoint}/`)
            .then((response) => response.json())
            .then((data) => {
                body.innerHTML += `<div class="card-container">
                <h2>${data.name}</h2>
                <h3>Tipo: ${data.types[0].type.name}</h3>
                <h3>Altura: ${data.height / 10} mts.</h3>
                <h3>Peso: ${data.weight / 10} kgs.</h3>
        <img src="${data.sprites.other.dream_world.front_default}">
        </div>`
            })
            .then(setTimeout(() => {
                location.reload()
            }, 5000))
            .catch((error) => {
                if (error) {
                    body.innerHTML += `<p>¡Ese pokemon no existe!</p>`
                    setTimeout(() => {
                        location.reload()
                    }, 1700);
                }
            })
})
