
//  ------------------------------CLASS
// class Professional{

//     constructor( name, age, genre , weight , height ){
  
//             this.name         = name;
//             this.age          = age;
//             this.genre        = genre;
//             this.weight       = weight
//             this.height       = height;
           
//     }
// }

    // -------------------OBJ

// let persona1 = new Professional ("Paco" , 77 , "masc" , 66 , 180);
// let persona2 = new Professional ("lara" , 38 , "feme" , 85 , 140);
// let persona3 = new Professional ("Sara" , 23 , "feme" , 53 , 158);


// ----------------------------------------------FUNCTIONS


 async function crear(){

        try{
            let nombre = document.getElementById("nombre").value;
            let genero = document.getElementById("genero").value;
            let edad  =  document.getElementById("edad").value;
            let altura = document.getElementById("altura").value
            let peso = document.getElementById("peso").value
         
            let nuevoP = new Professional (nombre, genero, edad, altura, peso)

            console.log(nuevoP)
        //  profes.push(nuevoP)

        const url = 'http://localhost:3000/professionales'

        if(validar(nuevoP)){

            let param = {
                "headers":{"content-type":"application/json; charset= UTF-8"},
                "body": JSON.stringify(nuevoP),//JSON.stringify(nuevoP),
                "method": "POST"
            }

            let data = await fetch(url, param)    // data es lo que recivo con el method:"POST"
            let resultado  = await data.json()    // convierto ese dato en un obj json

                
                if(resultado.error){         //(resultado.error = true) es lo mismo
                    showToast("error:" + resultado.mensaje , "bg-warning")   //".mensaje" esta definico en controllers
                }else{
                    showToast("Usuario creado correctamente" , "bg-success")} 

            console.log(resultado)             
         }
        }
        catch(error){
            console.log(error)
        }
    }

// ---------------------------------------------------------------

async function mostrar(){
    let id = document.getElementById("id").value;
    let url;
    console.log(id);

    if(id == null || id == ''){
        url = 'http://localhost:3000/professionales';
    } else {
        url = `http://localhost:3000/professionales?id=${id}`;

    }
    let param = {
        "headers":{"content-type":"application/json; charset= UTF-8"},
        method: "GET"
    }
    
    try{
        let data = await fetch(url, param)
        let resultado = await data.json()

        console.log(resultado);

        
        if( id != null && id != ''){

            // for(i = 0 ; i<resultado.length ; i++){
            document.getElementById("mostrarNombre").value = resultado.name;
            document.getElementById("mostrarEdad").value = resultado.age;
            document.getElementById("mostrarGenero").value = resultado.genre;
            document.getElementById("mostrarAltura").value = resultado.height;
            document.getElementById("mostrarPeso").value = resultado.weight;
            // document.getElementById("mostrarID").innerHTML = JSON.stringify(resultado[id].id);
            // }

        }else
        {
            

           for(i=0 ; i<resultado.profesionales.length ; i++){
            
            console.log("hola")
             let imprimirTodo =
           `<p>Nombre:   ${resultado.profesionales[i].name}</p>
            <p>Edad:     ${resultado.profesionales[i].age}</p>
            <p>Genero:   ${resultado.profesionales[i].genre}</p>
            <p>Peso:     ${resultado.profesionales[i].weight}</p>
            <p>Altura:   ${resultado.profesionales[i].height}</p>`
            
            document.getElementById("mostrarArray").innerHTML += imprimirTodo
           }
            
        }    
    }catch(error){
        console.log(error)
    }
}
 

// ----------------------------------------------------------------------
  
async function borrar(){
    let id = document.getElementById("id").value;
    let url;
    console.log(id);

    try{
    //url = `http://localhost:3000/professionales?id=${id}`;
    url = 'http://localhost:3000/professionales';
    let json = { "id" : id}
    console.log(json);
    let param = {
        "headers":{"content-type":"application/json; charset= UTF-8"},
        "body": JSON.stringify(json),//JSON.stringify(nuevoP),
        "method": "DELETE"
    }

    console.log

    
        let data = await fetch(url, param)
        let resultado = await data.json()
        console.log(resultado);


    }catch(error){
        console.log(error)
    }
}

// -----------------------------------------------------------------------------
async function editar(){
    let id     = document.getElementById("id").value;
    let nombre = document.getElementById("nombre").value;
    let edad   = document.getElementById("edad").value; 
    let genero = document.getElementById("genero").value;
    let peso   = document.getElementById("peso").value; 
    let altura = document.getElementById("altura").value; 
    let json   = { "name"   : nombre,
                   "age"    : edad,
                   "genre"  : genero, 
                   "weight" : peso,
                   "height" : altura,
                   "id"     : id }

    let url = 'http://localhost:3000/professionales';
    

    let param = {
        headers:{"content-type":"application/json; charset= UTF-8"},
        body: JSON.stringify(json),
        method: "PUT"
    }
    try{
        let data = await fetch(url, param)
        let resultado = await data.json()

        console.log(resultado);

    }catch (error){
        console.log(error)
    }
}


// -------------------------------------------------------------------------
function validar(prof){
    resultado = false;
    if(prof.name == "" || prof.name == null){
        showToast("Aviso: campo nombre incompleto", "bg-warning")
    }else if(prof.age == "" || prof.age == null){
        showToast("Aviso: campo edad incompleto", "bg-warning")
    }else if(prof.genre == "" || prof.genre == null){
        showToast("Aviso: campo genero incompleto", "bg-warning")
    }else if(prof.weight == "" || prof.weight == null){
        showToast("Aviso: campo peso incompleto", "bg-warning")
    }else if(prof.height == "" || prof.height == null){
        showToast("Aviso: campo altura incompleto", "bg-warning")
    }else{resultado=true}

    return resultado;

}


function showToast(message, color)
{
    document.getElementById("toastText").innerText=message;
    let toastElement  = document.getElementById('toast')

    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " "  + color;

    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}