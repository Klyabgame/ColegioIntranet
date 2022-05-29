const urlnotas='http://localhost:3000/api/curso/';
const editar_notas=document.querySelector('.editar_notas');
const buscar_dni=document.querySelector('.form_notas')
const dni_alumno=document.getElementById('texto-dni');
const asignar_notas=document.getElementById('btn_notas')
const form_editar_notas=document.getElementById('form_editar-notas');
const curso__tr=document.getElementById('curso__tr-t');

editar_notas.addEventListener('submit',()=>{
    alert("me clickeaste")
})

buscar_dni.addEventListener('submit',(e)=>{
    e.preventDefault();
    let dni=dni_alumno.value;
    console.log(dni);
    fetch(urlnotas+ dni)
                        .then(response => response.json())
                        .then(data=>{
                            mostrando_nota(data);
                            
                        })
                        .catch(error=> console.log(error))

    const mostrando_nota=(mostrarCurso)=>{
        let body='';
        console.log(mostrarCurso);
         for(let i=0; i<mostrarCurso.length; i++){
             body +=`<tr class="curso__tr" id="curso__tr">
                    <td>${mostrarCurso[i].ID_CURSO}</td>
                    <td>${mostrarCurso[i].NAME_CURSO}</td>
                    <td class="td__bimestre">16</td>
                    <td class="td__bimestre">16</td>
                    <td class="td__bimestre">16</td>
                    <td class="td__bimestre">16</td>
                    <td class="td__bimestre-p">16</td>
                    <td id="asignar_notas"><button id="btn_notas">ASIGNAR NOTAS</button></td> 
                    </tr>`
                        
             
        }
        curso__tr.innerHTML=body;
                        
    }
})

const on=(element,event,selector,handler)=>{
    element.addEventListener(event,e=>{
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

let idForm=0;
on(document,'click','#btn_notas',e=>{
    /* console.log('BORRADO') */
    editar_notas.classList.add('editar_notas-activate');
    const fila=e.target.parentNode.parentNode;
    idForm=fila.children[0].innerHTML;
    
    const curso=fila.children[1].innerHTML;
    const p_bimestre=fila.children[2].innerHTML;
    const s_bimestre=fila.children[3].innerHTML;
    const t_bimestre=fila.children[4].innerHTML;
    const c_bimestre=fila.children[5].innerHTML;

    APELLIDOS.value=apellidos;
    NOMBRES.value=nombres;
    DIRECCION.value=direccion;
    TELEFONO.value=telefono;
    FOTO.value=foto;
    opcion='editar';
    
})

/* asignar_notas.addEventListener('click',()=>{
    editar_notas.classList.add('editar_notas-activate');
}) */

editar_notas.addEventListener('click',()=>{
    editar_notas.classList.remove('editar_notas-activate');
}) 

