const url='http://localhost:3000/api/session/auth';
const submit=document.getElementById('iniciando');
const form=document.getElementById('form');
const USSER=document.getElementById('USSER');
const PASSWORD=document.getElementById('PASSWORD');
const nombre_session=document.getElementById('name');
const contenedor_nombre=document.getElementById('profile');


/* const usuario=USSER.value;
console.log(usuario); */


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(USSER.value);
    console.log(PASSWORD.value);
    if(USSER=='' && PASSWORD==''){
        alert('coloque un usuario y contraseña');
    }else if(USSER.value=='' ){
        alert('campos vacios, por favor coloque un usuario');
    }else if(PASSWORD.value==''){
        alert('campos vacios, por favor coloque una contraseña');
    }else{
        
            fetch(url,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    USSER:USSER.value,
                    PASSWORD:PASSWORD.value
                    
                })   
            })
            .then(response=> response.json())
            .then((response)=>{
                let array=response[0];
                if(array.USSER==USSER.value || array.PASSWORD==PASSWORD.value){
                    alert("felicidades ingresaste al sistema");
                    window.location='/modulos/index/contentBase.html';
                    fetch(url+'klyab')
                        .then(response => response.json())
                        .then(data=>
                            {
                                mostrando(data)
                            })
                        .catch(error=> console.log(error))


                    const mostrando=(authmostrar)=>{
                            console.log(authmostrar)
                            let body='';
                            for(let i=0; i<authmostrar.length; i++){
                                body +=`<span><a href="/modulos/index/contentBase.html">${authmostrar[i].NOMBRES},
                                 ${authmostrar[i].APELLIDOS}</a></span>`
                                
                            }
                        }
                        
                }
        
            })
            .catch(()=>alert("Usuario o password incorrectos!"));
        
        /* .then(window.location='/index.html') */
    }
        
        

})


