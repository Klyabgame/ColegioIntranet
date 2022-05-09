const submit=document.getElementById('iniciando');
const form=document.getElementById('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    alert("me clickeaste");
})