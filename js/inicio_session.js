const urlsesion='http://localhost:3000/api/session/auth';
const submit=document.getElementById('iniciando');
const form=document.getElementById('form');
const USSER=document.getElementById('USSER');
const PASSWORD=document.getElementById('PASSWORD');
const nombre_session=document.getElementById('name');
const contenedor_nombre=document.getElementById('profile');

function obtenerDatosStorage(){
    let usser=localStorage.getItem("array.USSER");
    return usser;
}
/* const usuario=USSER.value;
console.log(usuario); */
const mostrando=(authmostrar)=>{
    let body='';
    for(let i=0; i<authmostrar.length; i++){
        body +=`<span style="text-transform: uppercase;"><a href="/modulos/index/contentBase.html">${authmostrar[i].APELLIDOS},
         ${authmostrar[i].NOMBRES}</a></span>`
        
    }
    nombre_session.innerHTML=body;

}
fetch(urlsesion+'/'+obtenerDatosStorage())
                        .then(response => response.json())
                        .then(data=>{
                            mostrando(data);
                        })
                        .catch(error=> console.log(error))


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
        
            fetch(urlsesion,{
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
                    localStorage.setItem("array.USSER",array.USSER);
                            
                }
        
            })
            .catch(()=>alert("Usuario o password incorrectos!"));
        
        /* .then(window.location='/index.html') */
    }
        
        

})


