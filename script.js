var aa=document.getElementById("nav-links");

function showMenu(){
    aa.style.right="0";
}

function hideMenu(){
    aa.style.right="-200px";
}

document.addEventListener('scroll', ()=>{
    console.log(scrollY);
    const nav=document.querySelector('nav');
    if(window.scrollY > 1500){
        nav.classList.add('scrolled');
    }else{
        nav.classList.remove('scrolled');
    }
});