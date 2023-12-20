function themepage(){
    var themepage = document.getElementById('theme').value;
    console.log("teme es...",themepage)
    if(themepage == 'light' || themepage != 'dark'){
        document.getElementById('body').classList.remove('theme-dark');
        document.getElementById('body').classList.add('theme-light');
    }else{
        document.getElementById('body').classList.remove('theme-light');
        document.getElementById('body').classList.add('theme-dark');
    }
}
