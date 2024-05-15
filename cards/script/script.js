// COR CELULAR
    let img2 = document.getElementById('img-2')
    let img3 = document.getElementById('img-3')
    let img4 = document.getElementById('img-4')
    let img5 = document.getElementById('img-5')

    let msg = document.getElementById('msg')

function CelularCorPreta(){
    msg.innerHTML = 'Preto'

    img2.style.display='block'
    img3.style.display='none'
    img4.style.display='none'
    img5.style.display='none'
}
function CelularCorVerde(){
    msg.innerHTML = 'Verde'

    img2.style.display='none'
    img3.style.display='block'
    img4.style.display='none'
    img5.style.display='none'
}
function CelularCorCreme(){
    msg.innerHTML = 'Creme'

    img2.style.display='none'
    img3.style.display='none'
    img4.style.display='block'
    img5.style.display='none'
}
function CelularCorVioleta(){
    msg.innerHTML = 'Violeta'

    img2.style.display='none'
    img3.style.display='none'
    img4.style.display='none'
    img5.style.display='block'
}