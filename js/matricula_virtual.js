const url='http://localhost:3000/api/colegio/';
const contenedor= document.querySelector('tbody');
const DNI= document.getElementById('DNI');
const APELLIDOS= document.getElementById('APELLIDOS');
const NOMBRES= document.getElementById('NOMBRES');
const DIRECCION= document.getElementById('DIRECCION');
const TELEFONO= document.getElementById('TELEFONO');
const CORREO= document.getElementById('CORREO');
const EDAD= document.getElementById('EDAD');
const FOTO= document.getElementById('FOTO');
const ID_ROL= document.getElementById('ID_ROL');
const formulario=document.getElementById('formulario');
const formularioRegistro=document.querySelector('.formulario__registro');
const btn_registrar=document.getElementById('btn_registrar');
const btn_cancelar=document.getElementById('btn_cerrar');
const registro_estudiantes=document.getElementById('registro_estudiantes');
const btn__editar=document.getElementsByClassName('btn__editar');
let resultados='';
var opcion='';
btn_registrar.addEventListener('click',()=>{
    formularioRegistro.classList.add('formulario__registro-activate');
        DNI.value='';
        APELLIDOS.value='';
        NOMBRES.value='';
        DIRECCION.value='';
        TELEFONO.value='';
        CORREO.value='';
        EDAD.value='';
        FOTO.value='';
        ID_ROL.value='';
        opcion='registrar';
    
})

/* registro_estudiantes.addEventListener('click',()=>{
    formularioRegistro.classList.remove('formulario__registro-activate');
}) */
btn_cancelar.addEventListener('click',()=>{
    formularioRegistro.classList.remove('formulario__registro-activate');
    opcion='cancelar'
})


const mostrar=(colegio)=>{
    console.log(colegio)
    let body='';
    for(let i=0; i<colegio.length; i++){
        body +=`<tr>
                    <td>${colegio[i].ID_REGISTRO}</td>
                    <td>${colegio[i].APELLIDOS}</td>
                    <td>${colegio[i].NOMBRES}</td>
                    <td>${colegio[i].DIRECCION}</td>
                    <td>${colegio[i].TELEFONO}</td>
                    <td><img src="${colegio[i].FOTO}" alt=""></td>
                    <td><button class="btn__editar">EDITAR</button> <button class="btn__eliminar">ELIMINAR</button></td>
                </tr>`
        
    }
    
    /* registers.forEach(register=>{
        resultados+=`<tr>
                            <td>${register.id}</td>
                            <td>${register.Nombres}</td>
                            <td>${register.Apellidos}</td>
                            <td>${register.Correo}</td>
                            <td>${register.usuario}</td>
                            <td>${register.contraseña}</td>
                            <td class="text-center"><a class="btnEditar btn btn-primary">EDITAR</a><a class="btnBorrar btn btn-primary">BORRAR</a> </td>
                     </tr>`

    }) */
    contenedor.innerHTML= body;
}
fetch(url)
.then(response => response.json())
.then(data=> mostrar(data))
.catch(error=> console.log(error))

const on=(element,event,selector,handler)=>{
    element.addEventListener(event,e=>{
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}
formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(opcion=='registrar'){
        fetch(url,{
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
                ID_ROL:ID_ROL.value
            })
            
        })
        .then(response=>response.json())
        .then(()=>location.reload());
        formularioRegistro.classList.remove('formulario__registro-activate');

    }
    if(opcion=='editar'){
        fetch(url+idForm,{
            method:'PUT',
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
                ID_ROL:ID_ROL.value
            })   
        })
        .then(response=> response.json())
        .then(()=>location.reload());
    }
    if(opcion=='cancelar'){

    }
    
    /* .then(data=>{
        const nuevoRegistro=[];
        nuevoRegistro.push(data.APELLIDOS,data.NOMBRES,data.DIRECCION,data.TELEFONO,data.FOTO);
        mostrar(nuevoRegistro);
    }) */

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

on(document,'click','.btn__eliminar',e=>{
    /* console.log('BORRADO') */
    const fila=e.target.parentNode.parentNode;
    const id= fila.firstElementChild.innerHTML;
    
    alertify.confirm("SEGURO QUE QUIERES ELIMINAR EL REGISTRO?",
    function(){
        fetch(url+id, {
            method:'DELETE'
        })
        .then(res =>res.json())
        .then(()=>location.reload())
        alertify.success('Ok');
    },
    function(){
        /* alertify.error('Cancel'); */
    });
    
})

let idForm=0;
on(document,'click','.btn__editar',e=>{
    /* console.log('BORRADO') */
    formularioRegistro.classList.add('formulario__registro-activate');
    const fila=e.target.parentNode.parentNode;
    idForm=fila.children[0].innerHTML;
    
    const apellidos=fila.children[1].innerHTML;
    const nombres=fila.children[2].innerHTML;
    const direccion=fila.children[3].innerHTML;
    const telefono=fila.children[4].innerHTML;
    const foto=fila.children[5].innerHTML;

    APELLIDOS.value=apellidos;
    NOMBRES.value=nombres;
    DIRECCION.value=direccion;
    TELEFONO.value=telefono;
    FOTO.value=foto;
    opcion='editar';
    
})



