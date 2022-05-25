const url='http://localhost:3000/api/session/:usser';
const nombre_session=document.getElementById('name');
const contenedor_nombre=document.getElementById('profile');

const mostrando=(authmostrar)=>{
    console.log(authmostrar)
    let body='';
    for(let i=0; i<authmostrar.length; i++){
        body +=`<span><a href="/modulos/index/contentBase.html">${authmostrar[i].NOMBRES},
         ${authmostrar[i].APELLIDOS}</a></span>`
        
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
    nombre_session.innerHTML= body;
}
fetch(url)
.then(response => response.json())
.then(data=>
     {
        mostrando(data)
        console.log(data);
    })
.catch(error=> console.log(error))

const on=(element,event,selector,handler)=>{
    element.addEventListener(event,e=>{
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}