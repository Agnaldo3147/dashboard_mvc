const videos = document.querySelectorAll('video')
var info_menu = document.querySelector('.info_menu')
var ofuscar_tela_menu = document.querySelector('.ofuscar_tela_menu')
var fechar_menu= document.querySelector('.fechar_menu')
var body= document.querySelector('.body')

var menu= document.querySelector('.menu')
var LarguraTela = body.offsetWidth
var AlturaTela = body.offsetHeight


for( const video of videos){
    video.addEventListener('click', ()=>{
        if(video.paused){
            video.play()
        }else{
            video.pause()
        }
        if(video.scrollTop){
            video.pause()

        }
    })
}

const Menu = ()=>{
    if(info_menu.classList.toggle('menu_left')){
       ofuscar_tela_menu.style.display = 'block'
       
 }else{
        ofuscar_tela_menu.style.display = 'none'
 
    }
     }

     ofuscar_tela_menu.addEventListener('click', ()=>{
        Menu()
    })

    fechar_menu.addEventListener('click', ()=>{
        info_menu.classList.remove('menu_left')
        ofuscar_tela_menu.style.display = 'none'
    })    
    
    menu.addEventListener('click', ()=>{
        if(LarguraTela > '600'){
            Menu() 
            
            
        }else if( LarguraTela <= 590){

            links_computador.map((ele)=>{
                ele.style.display = 'none'
            })
            if(info_menu.classList.toggle('menu_left')){
                ofuscar_tela_menu.style.display = 'block'
                
           }else{
                 ofuscar_tela_menu.style.display = 'none'
          
             }
             
        }
    })

