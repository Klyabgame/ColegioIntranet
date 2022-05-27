const urlpersonal='http://localhost:3000/api/session/auth';
const dato_personal=document.querySelector('.dato__personales');

function obtenerDatosStorage(){
    let usser=localStorage.getItem("array.USSER");
    return usser;
}

const mostrando2=(authmostrar)=>{
    let body='';
    console.log(authmostrar);
    for(let i=0; i<authmostrar.length; i++){
        body +=`
        <tr class="dato__personales-tr-nombre">
            <th class="dato__personales-head_encabezado">NOMBRES :</th>
            <td>${authmostrar[i].NOMBRES}</td>
            <th>EDAD:</th>
            <td>${authmostrar[i].EDAD}</td>
        </tr>
        <tr class="dato__personales-tr-apellido">
            <th class="dato__personales-head_encabezado">APELLIDO :</th>
            <td>${authmostrar[i].APELLIDOS}</td>
            <th>DIRECCION:</th>
            <td>${authmostrar[i].DIRECCION}</td>
        </tr>
        <tr>
            <th class="dato__personales-head_encabezado">CORREO: </th>
            <td>${authmostrar[i].CORREO}</td>
            <th>DNI:</th>
            <td>${authmostrar[i].DNI}</td>
        </tr>
        <tr>
            <th class="dato__personales-head_encabezado">TELEFONO: </th>
            <td>${authmostrar[i].TELEFONO}</td>
        </tr>`
        
    }
    dato_personal.innerHTML=body;

}
fetch(urlpersonal+'/'+obtenerDatosStorage())
                        .then(response => response.json())
                        .then(data=>{
                            mostrando2(data);
                        })
                        .catch(error=> console.log(error))