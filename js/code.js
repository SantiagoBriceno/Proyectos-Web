function asientos(x) {
    //Metodo que se encarga del sistema de cliqueo de los asientos
    //x: es un parametro que referencia al asiento que se cliqueó
    var asientoActual = x.getAttribute('name'); //Se recupera el nombre del asiento cliqueado
    switch (x.className){ //Segun el tipo de Nombre de clase del asiento selecionado hara las siguientes acciones
        case 'asientos':
            x.className = 'asientoReservado';
             document.getElementById("asientosSelec").innerHTML += asientoActual + " ";
                                    
        break;
        
        case 'asientoReservado':
            x.className = 'asientos';
            var puestos = document.getElementById("asientosSelec").textContent;
           
            document.getElementById("asientosSelec").innerHTML =  puestos.replace(asientoActual," ");; 
            break;
        
        default:
            alert("Asiento no disponible, seleccione un asiento disponible")
    
    }
}

function registrar(){
    //Método que se encargara de registrar los datos indicados por el usuario y verificarlos
    
    var nombApe = document.getElementById("apellido_nombre").value;
    var cedula = document.getElementById("cedula").value;
    var puestos = document.getElementById("asientosSelec").textContent;
    
    if (nombApe == "" || cedula == ""){
        if (puestos == ""){
            alert("Ingrese los datos y el asiento a reservar");
        }else{
            alert("Ingrese los datos requeridos para la reservación");
        }
    }else{
        if (puestos == ""){
            alert("Ingrese el asiento a reservar");
        }else{
            document.getElementById("asientosSelec").innerHTML = " "; //Limpia el texto con los asientos seleccionados
            document.getElementById("apellido_nombre").value = " "; //limpia el input apellido y nombre
            document.getElementById("cedula").value = " "; // limpia el input de cedula
            //Escribe en el documento el usuario registrado con sus datos y asientos seleccionados
            document.getElementById("registros").innerHTML += nombApe + " V" + cedula +" Asientos: "+ puestos +"<br>"; 
            var lista = document.getElementsByClassName("asientoReservado"); //lista de elementos seleccionados
            for(var i = 0; i < lista.length; i++){
                lista[i].className = "asientoOcupado"; //los asientos reservados cambiaran de clase a "AsientoOcupado" 
                //para que no pueda seleccionarse en otra reserva.
            }
        }
    }
    
    
}

