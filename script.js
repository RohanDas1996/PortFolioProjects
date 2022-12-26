let a = document.querySelector('.burger');
let b = document.querySelector(".Navbar-List");
let flag = false;
a.addEventListener('click',()=>{
    if(flag == false){
        b.style.display='flex';
        flag = true;
    } else if (flag == true){
        b.style.display='none';
        flag = false;
    }
})
