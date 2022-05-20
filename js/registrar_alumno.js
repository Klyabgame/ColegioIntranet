const urls='http://localhost:3000/api/colegio/';
const DNI= document.getElementById('DNI');
const APELLIDOS= document.getElementById('APELLIDOS');
const NOMBRES= document.getElementById('NNOMBRES');
const DIRECCION= document.getElementById('DIRECCION');
const TELEFONO= document.getElementById('TELEFONO');
const CORREO= document.getElementById('CORREO');
const EDAD= document.getElementById('EDAD');
const FOTO= document.getElementById('FOTO');
const ROL= document.getElementById('ROL');
const formulario=document.getElementById('formulario');
/* let resultados='';
let opcion=''; */

/* fetch(url)
        .then(response=>response.json())
        .then(data=>console.log(data))
        .catch(error=>console.log(error)) */
/* 
const mostrar=(register)=>{
    register.forEach(registers=>{
        resultados+='<tr></tr>'
    })
    contenedor.innerHTML= resultados;
}

fetch(url)
    .then(response =>response.json())
    .then(data=> mostrar(data))
    .catch(error=> console.log(error)) */

//metodo para registrar
formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    fetch(urls,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            DNI:DNI.value,
            APELLIDOS:APELLIDOS.value,
            NOMBRES:NOMBRES.value,
            DIRECCION:DIRECCION.value,
            TELEFONO:TELEFONO.value,
            CORREO:CORREO.value,
            EDAD:EDAD.value,
            FOTO:FOTO.value,
            ROL:ROL.value
        })
        
    })
    .then(response=>response.json())

   /*  DNI.value='';
    APELLIDOS.value='';
    NOMBRES.value='';
    DIRECCION.value='';
    TELEFONO.value='';
    CORREO.value='';
    EDAD.value='';
    FOTO.value='';
    ROL.value=''; */
});


