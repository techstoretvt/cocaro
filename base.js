var gameover = true

handleSize()
function handleSize() {
    
    var btnTru = document.querySelector('.size-wrap-btn button:nth-child(1)')
    btnTru.onclick = () => {
        var valueInput = document.querySelector('.size-wrap-btn input')
        var tam = Math.round((valueInput.value - 0.1) * 10) /10
        valueInput.value = tam
        hanleSetSize()
    }

    var btnCong = document.querySelector('.size-wrap-btn button:last-child')
    btnCong.onclick = () => {
        var valueInput = document.querySelector('.size-wrap-btn input')
        var tam = (valueInput.value*10 + 1)/10
        valueInput.value = tam
        hanleSetSize()
    }
}

function hanleSetSize() {
    var app = document.querySelector('.app')
    var valueInput = document.querySelector('.size-wrap-btn input')
    app.style.transform = `translateX(-50%) translateY(-50%) scale(${valueInput.value})`


}

//
handleClick()
var dauCurrent = 'o'
function handleClick(){
    var items = [...document.querySelectorAll('.item')]
    items.forEach((item) => {
        item.onclick = () => {
            if(gameover){
                var ktra = true
            if(item.className.includes('chuo') || item.className.includes('chux') ){
                ktra = false
            }
            if(ktra) {
                if(dauCurrent == 'o'){
                    item.classList.add('chuo')
                    dauCurrent = dauCurrent == 'o' ? 'x' : 'o'
                    check()
                }
                else {
                    item.classList.add('chux')
                    dauCurrent = dauCurrent == 'o' ? 'x' : 'o'
                    check()
                }
            }
            }
            else {
                alert('Bấm chơi lại để tiếp tục')
            }
        }
    })


}

//ktra
function check(){
    var items = [...document.querySelectorAll('.item')]
    
    //ktra hàng 1
    if(items[0].className.includes('chuo') && items[1].className.includes('chuo') && items[2].className.includes('chuo')){
        document.querySelector('.gach1').classList.remove('unShow')
        setTimeout(() => {
            alert('O thắng')
        })
        gameover = false
    }
    if(items[0].className.includes('chux') && items[1].className.includes('chux') && items[2].className.includes('chux')){
        document.querySelector('.gach1').classList.remove('unShow')
        setTimeout(() => {
            alert('X thắng')
        })
        gameover = false
    }

    //ktra hàng 2
    if(items[3].className.includes('chuo') && items[4].className.includes('chuo') && items[5].className.includes('chuo')){
        document.querySelector('.gach2').classList.remove('unShow')
        setTimeout(() => {
            alert('O thắng')
        })
        gameover = false
    }
    if(items[3].className.includes('chux') && items[4].className.includes('chux') && items[5].className.includes('chux')){
        document.querySelector('.gach2').classList.remove('unShow')
        setTimeout(() => {
            alert('X thắng')
        })
        gameover = false
    }

    //ktra hàng 3
    if(items[6].className.includes('chuo') && items[7].className.includes('chuo') && items[8].className.includes('chuo')){
        document.querySelector('.gach3').classList.remove('unShow')
        setTimeout(() => {
            alert('O thắng')
        })
        gameover = false
    }
    if(items[6].className.includes('chux') && items[7].className.includes('chux') && items[8].className.includes('chux')){
        document.querySelector('.gach3').classList.remove('unShow')
        setTimeout(() => {
            alert('X thắng')
        })
        gameover = false
    }

    //ktra cot 1
    if(items[0].className.includes('chuo') && items[3].className.includes('chuo') && items[6].className.includes('chuo')){
        document.querySelector('.gach4').classList.remove('unShow')
        setTimeout(() => {
            alert('O thắng')
        })
        gameover = false
    }
    if(items[0].className.includes('chux') && items[3].className.includes('chux') && items[6].className.includes('chux')){
        document.querySelector('.gach4').classList.remove('unShow')
        setTimeout(() => {
            alert('X thắng')
        })
        gameover = false
    }

    //ktra cot 2
    if(items[1].className.includes('chuo') && items[4].className.includes('chuo') && items[7].className.includes('chuo')){
        document.querySelector('.gach5').classList.remove('unShow')
        setTimeout(() => {
            alert('O thắng')
        })
        gameover = false
    }
    if(items[1].className.includes('chux') && items[4].className.includes('chux') && items[7].className.includes('chux')){
        document.querySelector('.gach5').classList.remove('unShow')
        setTimeout(() => {
            alert('X thắng')
        })
        gameover = false
    }

    //ktra cot 3
    if(items[2].className.includes('chuo') && items[5].className.includes('chuo') && items[8].className.includes('chuo')){
        document.querySelector('.gach6').classList.remove('unShow')
        setTimeout(() => {
            alert('O thắng')
        })
        gameover = false
    }
    if(items[2].className.includes('chux') && items[5].className.includes('chux') && items[8].className.includes('chux')){
        document.querySelector('.gach6').classList.remove('unShow')
        setTimeout(() => {
            alert('X thắng')
        })
        gameover = false
    }

    //ktra chéo 1
    if(items[0].className.includes('chuo') && items[4].className.includes('chuo') && items[8].className.includes('chuo')){
        document.querySelector('.gach7').classList.remove('unShow')
        setTimeout(() => {
            alert('O thắng')
        })
        gameover = false
    }
    if(items[0].className.includes('chux') && items[4].className.includes('chux') && items[8].className.includes('chux')){
        document.querySelector('.gach7').classList.remove('unShow')
        setTimeout(() => {
            alert('X thắng')
        })
        gameover = false
    }

    //ktra chéo 2
    if(items[2].className.includes('chuo') && items[4].className.includes('chuo') && items[6].className.includes('chuo')){
        document.querySelector('.gach8').classList.remove('unShow')
        setTimeout(() => {
            alert('O thắng')
        })
        gameover = false
    }
    if(items[2].className.includes('chux') && items[4].className.includes('chux') && items[6].className.includes('chux')){
        document.querySelector('.gach8').classList.remove('unShow')
        setTimeout(() => {
            alert('X thắng')
        })
        gameover = false
    }
    if(!gameover){
        document.querySelector('.replay').classList.remove('unShow')   
    }
    ktraHoa()
}
//ktra hòa
function ktraHoa(){
    if(gameover){
        var items = [...document.querySelectorAll('.item')]
        var ktra = true
        items.forEach((item) => {
            if(item.className.includes('chuo') || item.className.includes('chux')){
                
            }
            else {
                ktra = false
            }
        })
        if(ktra){
            document.querySelector('.replay').classList.remove('unShow')
            setTimeout(() => {
                alert('Hòa !!!!!')
            },500)
            gameover = false
        }
    }
}

//replay
var replay = document.querySelector('.replay')
replay.onclick = () => {
    var items = [...document.querySelectorAll('.item')]
    items.forEach((item) => {
        item.classList.remove('chuo')
        item.classList.remove('chux')
    })
    var gachs = [...document.querySelectorAll('.gach')]
    gachs.forEach((gach) => {
        gach.classList.add('unShow')
    })
    gameover = true
    dauCurrent = 'o'
    document.querySelector('.replay').classList.add('unShow')
}