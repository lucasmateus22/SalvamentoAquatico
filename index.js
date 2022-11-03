var hour = setInterval(myTime, 1000);
function myTime(){
    var h = new Date(), displayDate;
    if(navigator.userAgent.toLocaleLowerCase().indexOf('firefox')>-1){
        displayDate = h.toLocaleTimeString('pt-BR');
    }else{
        displayDate = h.toLocaleTimeString('pt-BR',{timeZone:'America/brasilia'});
    }
    document.getElementById("hora").innerHTML = displayDate;
};

const body = document.querySelector('body');
function changerTheme(){
    if(
        document.documentElement.classList.contains('dark')
    ){document.documentElement.classList.remove('dark');
    }else{
        document.documentElement.classList.add('dark');
    }
}
document.documentElement.classList.add('dark')