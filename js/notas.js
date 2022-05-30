const urlnotas='http://localhost:3000/api/curso/';
const urlnotas2='http://localhost:3000/api/notas/'
const editar_notas=document.querySelector('.editar_notas');
const buscar_dni=document.querySelector('.form_notas')
const dni_alumno=document.getElementById('texto-dni');
const asignar_notas=document.getElementById('btn_notas')
const form_editar_notas=document.getElementById('form_editar-notas');
const curso__tr=document.getElementById('curso__tr-t');
const CURSO=document.getElementById('CURSO');
const P_BIMESTRE=document.getElementById('P_BIMESTRE');
const S_BIMESTRE=document.getElementById('S_BIMESTRE');
const T_BIMESTRE=document.getElementById('T_BIMESTRE');
const C_BIMESTRE=document.getElementById('C_BIMESTRE');

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
                    <td class="td__bimestre">${mostrarCurso[i].P_BIMESTRE}</td>
                    <td class="td__bimestre">${mostrarCurso[i].S_BIMESTRE}</td>
                    <td class="td__bimestre">${mostrarCurso[i].T_BIMESTRE}</td>
                    <td class="td__bimestre">${mostrarCurso[i].C_BIMESTRE}</td>
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
let opcion='';
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

    CURSO.value=curso;
    P_BIMESTRE.value=p_bimestre;
    S_BIMESTRE.value=s_bimestre;
    T_BIMESTRE.value=t_bimestre;
    C_BIMESTRE.value=c_bimestre;
    opcion='editar'
    
})

/* asignar_notas.addEventListener('click',()=>{
    editar_notas.classList.add('editar_notas-activate');
}) */

form_editar_notas.addEventListener('submit',(e)=>{
    e.preventDefault();
    let dnii=dni_alumno.value;
    let cursos=CURSO.value;
    console.log(urlnotas2+dnii+'/'+cursos);
    if(opcion=='editar'){
    fetch(urlnotas2+dnii+'/'+cursos,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            P_BIMESTRE:P_BIMESTRE.value,
            S_BIMESTRE:S_BIMESTRE.value,
            T_BIMESTRE:T_BIMESTRE.value,
            C_BIMESTRE:C_BIMESTRE.value,
            
        })   
    })
    .then(response=> response.json())
    .then(()=>location.reload());
    }else if(opcion='cancelar'){
        alert('cancelado')
    }
    
})



