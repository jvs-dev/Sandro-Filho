let menutoggle = document.querySelector('.toggle');
let navmobile = document.querySelector('.navmobile')
        
menutoggle.onclick = function(){
    menutoggle.classList.toggle('active')
    navmobile.classList.toggle('active')
}