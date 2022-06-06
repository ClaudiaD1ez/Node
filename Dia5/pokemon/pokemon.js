// const apiButton = document.getElementById('apiButton')
// const habiliData = document.getElementById('habilidad1')

// function getPokemon(){
    
//     fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//     .then(respuesta => respuesta.json())
//     .then(data => {
//         habiliData.innerHTML = JSON.stringify(data)})
//     .catch(error => console.log(error))
// }

// -----------------------------------------------------------------------------------------------------------

// async function getPokemon(){

//     let nom = document.getElementById("apiButton").value
//     let url = 'https://pokeapi.co/api/v2/pokemon/ditto'
//     let param = {
//         headers:{"content-type":"aplication/json; cherset= UTF-8"},
//         method: "GET"
//     }

//     try {
//         let data = await fetch(url, param);
//         let result = await data.json();
//         document.getElementById("habiliData").innerHTML = JSON.stringify(result[0]);

//     }catch(error){console.log(error)}
// }

// ------------------------------------------------------------------------------------------------------------

// let getPokemon = () =>{

//     let nom = document.getElementById("apiButton").value
//     let url = 'https://pokeapi.co/api/v2/pokemon/ditto'
//     let param = {
//         headers:{"content-type":"aplication/json; cherset= UTF-8"},
//         method: "GET"
//     }

//     const respuesta = fetch(url)

//     console.log(respuesta)



// }

// ------------------------------------------------------------------------------------------------------------
 
// let pokemon = window.getElementById("nombre").value
// const url = "https://pokeapi.co/api/v2/pokemon/"+ pokemon
// let mostrar = document.getElementById('habilidad')

// function getPokemon(){
//     // window.fetch(url)
//     console.log(pokemon)

// }

// -----------------------------------------------------------------------------------------------------------------

let nombre 
console.log (document.getElementById("nombre").value)