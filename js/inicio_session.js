const url='http://localhost:3000/api/session/auth';
const submit=document.getElementById('iniciando');
const form=document.getElementById('form');
const USSER=document.getElementById('USSER');
const PASSWORD=document.getElementById('PASSWORD');

const on=(element,event,selector,handler)=>{
    element.addEventListener(event,e=>{
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(USSER.value);
    console.log(PASSWORD.value);
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
        .then(data=>console.log(data))
        /* .then(window.location='/index.html') */
        console.log("se realizo la conexion");
        

})