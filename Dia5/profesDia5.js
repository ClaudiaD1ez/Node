//  ------------------------------CLASS
class Professional{

    constructor( name, age, genre , weight , height, id ){
  
            this.name         = name;
            this.age          = age;
            this.genre        = genre;
            this.weight       = weight
            this.height       = height;
            this.id           = id;
    }
}

    // -------------------OBJ

let persona1 = new Professional ("Paco" , 77 , "masc" , 66 , 180, 0);
let persona2 = new Professional ("lara" , 38 , "feme" , 85 , 140, 1);
let persona3 = new Professional ("Sara" , 23 , "feme" , 53 , 158, 2);

let profes = [];

// ----------------------------------------------FUNCTIONS


 async function postProf(){

        try{
            let prof = new Professional(document.getElementById("nombre").value ,
                                        document.getElementById("genero").value,
                                        document.getElementById("edad").value,
                                        document.getElementById("altura").value,
                                        document.getElementById("peso").value,
                                        document.getElementById("id").value)

         profes.push(prof)

        console.log (prof +"prof")
        console.log (profes + "profes")

        const url = 'http://localhost:3000/professionales'

        if(validar(prof)){

            let param = {
                headers:{"content-type":"aplication/json; cherset= UTF-8"},
                body: JSON.stringify(prof),
                method: "POST"
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

async function getProf(){

    let idAux = document.getElementById("id").value;
    const url = 'http://localhost:3000/professionales';

    let param = {
        headers:{"content-type":"aplication/json; cherset= UTF-8"},
        method: "GET"
    }
    
    try{
        let data = await fetch(url, param)
        let resultado = await data.json()

        for(i=0 ; i<profes.length ; i++){

               

        }
        if(!resultado.error && idAux != null){
            document.getElementById("mostrarNombre").innerHTML = JSON.stringify(resultado[idAux].name);
            document.getElementById("mostrarEdad").innerHTM = JSON.stringify(resultado[idAux].age);
            document.getElementById("mostrarGenero").innerHTM = JSON.stringify(resultado[idAux].genre);
            document.getElementById("mostrarAltura").innerHTM = JSON.stringify(resultado[idAux].height);
            document.getElementById("mostrarPeso").innerHTM = JSON.stringify(resultado[idAux].weight);
            document.getElementById("mostrarID").innerHTM = JSON.stringify(resultado[idAux].id);

        }else if(!resultado.error && document.getElementById("id").value == null)

        document.getElementById("mostrarArray") = resultado.profesionales 

    }catch (error){
        console.log(error)
    }
}
 

// ----------------------------------------------------------------------
  


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