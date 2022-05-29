const urlcurso='http://localhost:3000/api/curso/';
const curso__dni=document.getElementById('curso__dni');
const curso__formulario=document.getElementById('curso__formulario');
const tabla_curso=document.getElementById('body_cursos');
const tabla_class=document.getElementById('tabla_class');
const tr_alumno=document.getElementById('tr_alumno');
const tr_grado=document.getElementById('tr_grado');

curso__formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    let dni=curso__dni.value;

    fetch(urlcurso+ dni)
                        .then(response => response.json())
                        .then(data=>{
                            mostrando_Curso(data);
                            mostrar_datos(data);
                        })
                        .catch(error=> console.log(error))

   
    const mostrar_datos=(mostrarCurso)=>{
            let body='';
            let body2='';
             body +=`${mostrarCurso[0].APELLIDOS},${mostrarCurso[0].NOMBRES}`
             body2+=`${mostrarCurso[0].GRADO_ACADEMICO} DE ${mostrarCurso[0].NIVEL}`
             tr_alumno.innerHTML=body;
             tr_grado.innerHTML=body2;
                        
  }
                        
                                            


    const mostrando_Curso=(mostrarCurso)=>{
    let body='';
    console.log(mostrarCurso);
    for(let i=0; i<mostrarCurso.length; i++){
        body +=`
                    <tr class="curso__tr">
                    <td>${mostrarCurso[i].ID_CURSO}</td>
                    <td>${mostrarCurso[i].NAME_CURSO}</td>
                    <td class="td__duracion">2 MESES</td>
                    <td class="td__bimestre">1</td>
        
                    </tr> `
                    
        
    }
    tabla_curso.innerHTML=body;

}

})





