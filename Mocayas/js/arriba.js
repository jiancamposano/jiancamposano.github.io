/* window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.go-top-container').classList.add('show');
    }else{
        document.querySelector('.go-top-container').classList.remove('show');
    }
}

document.querySelector('.go-top-container').addEventListener('click', () => {
    window.scrollTo({
        top : 0,
        behavior :"smooth"
    });
})
 */

window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.flecha').classList.add('show');
    }else{
        document.querySelector('.flecha').classList.remove('show');
    }
}

document.querySelector('.flecha').addEventListener('click', () => {
    window.scrollTo({
        top : 0,
        behavior :"smooth"
    });
})