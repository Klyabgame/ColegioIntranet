const url='http://localhost:3000/api/session/auth';
const submit=document.getElementById('iniciando');
const form=document.getElementById('form');
const USSER=document.getElementById('USSER');
const PASSWORD=document.getElementById('PASSWORD');

/* const on=(element,event,selector,handler)=>{
    element.addEventListener(event,e=>{
        if(e.target.closest(selector)){
            handler(e)
        }
    })
} */
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
        .then(response=>console.log(response))
        /* .then(window.location='/index.html') */
    }
        
        

})

