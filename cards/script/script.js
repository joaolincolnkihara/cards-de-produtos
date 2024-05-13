function clicou(){
    let img2=document.getElementById('img-2')
    let img22= document.getElementById('img-22')

    // img22.style.display='block'
    // img2.style.display='none'
    if(img2.style.display == 'block'){
        img22.style.display = 'block'
        img2.style.display = 'none'
    }else{
        img2.style.display = 'none'
        img22.style.display= 'block'
    }
}
