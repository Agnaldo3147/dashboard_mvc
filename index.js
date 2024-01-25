var menu_nav_bar = document.querySelector('.menu_nav_bar') 
var ceta_voltar = document.querySelector('.ceta_voltar') 
var videos = document.querySelector('.videos') 
var fotos = document.querySelector('.fotos') 
var playlist = document.querySelector('.playlist') 
var album = document.querySelector('.album') 
var nav_botton = [...document.querySelectorAll('.nav_botton')] 
var videos_usuario = document.querySelector('.videos_usuario')
var fotos_usuario = document.querySelector('.fotos_usuario')
var main = document.querySelector('.main')
var slider_bar= document.querySelector('.slider_bar')
var body= document.querySelector('.body')
var footer= document.querySelector('.footer')
var span_edicao_nome = document.querySelector('.span_edicao_nome')
var nome_edite = document.querySelector('.nome_edite')
var desc_btn = document.querySelector('.desc_btn')
var trocar_senha = document.querySelector('.trocar_senha')
var descricao_usuario = document.querySelector('.descricao_usuario')


window.addEventListener('load', ()=>{
    descricao_usuario.classList.add('para_descricao_esconder_texto')
})

descricao_usuario.addEventListener('click', ()=>{
    descricao_usuario.classList.toggle('para_descricao_esconder_texto')
})




const InputEdicaoNome = (type, name, placeholder, action_form, method_get_post, SPAN) =>{
    
    const div_conteiner = document.createElement('div')
    div_conteiner.setAttribute('class', 'container_edicao')
    div_conteiner.style.width = '300px'
    div_conteiner.style.height = '120px'
    div_conteiner.style.margin = 'auto'
    div_conteiner.style.backgroundColor = 'white'
    div_conteiner.style.borderRadius = '10px'
    div_conteiner.style.zIndex = '5'
    div_conteiner.style.position = 'absolute'
    //div_conteiner.style.botton = '0'
    div_conteiner.style.top = '50%'
    div_conteiner.style.left = '50%'
    div_conteiner.style.position = 'fixed'
    div_conteiner.style.transform = 'translate(-50%, -50%)'
    //div_conteiner.style.top = 'calc(100% - 100px)'
    div_conteiner.style.display = 'flex'
    div_conteiner.style.flexDirection = 'column'
    div_conteiner.style.alignContent = 'center'
    div_conteiner.style.justifyContent = 'center'

    const form = document.createElement('form')
    form.setAttribute('action', `${action_form}`)
    form.setAttribute('method', `${method_get_post}`)
    form.style.width = '100%'
    form.height = '100%'
    form.style.display = 'flex'
    form.style.flexDirection = 'column'
    form.style.alignContent = 'center'
    form.style.justifyContent = 'center'

    const div_ofuscar = document.createElement('div')
    div_ofuscar.style.width = '100%'
    div_ofuscar.style.height = '1000%'
    div_ofuscar.style.position = 'absolute'
    div_ofuscar.style.top = '0'
    div_ofuscar.style.left = '0'
    div_ofuscar.style.position = 'fixed'
    div_ofuscar.style.zIndex = '2'
    div_ofuscar.style.backgroundColor = 'rgba(0, 0, 0.45, 0.337)'


    
    const span = document.createElement('span')
    span.setAttribute('class', 'material-icons')
    span.innerHTML = `${SPAN}`
    
    const span_x = document.createElement('span')
    span_x.setAttribute('class', 'material-icons')
    span_x.style.cursor = 'pointer'
    span_x.style.color = 'black'
    span_x.innerText = 'close'

    
    const input_nome = document.createElement('input')
    input_nome.setAttribute('type', `${type}`)
    input_nome.setAttribute('placeholder', `${placeholder}`)
    input_nome.setAttribute('name', `${name}`)
    input_nome.setAttribute('id', 'Edicao_nome')
    input_nome.style.border = 'none'
    input_nome.style.border = 'unset'
    input_nome.style.outline = 'none'
    input_nome.style.padding = '3px'
    input_nome.style.width = '70%'
    input_nome.style.borderBottom = '2px solid gold'

    input_nome.focus()
    
    span_x.addEventListener('click', ()=>{
        input_nome.value = ''
    })
    
    const divINPUT = document.createElement('div')
    divINPUT.setAttribute('class', 'container_input')
    divINPUT.style.width = '100%'
    divINPUT.style.display = 'flex'
    divINPUT.style.flexDirection = 'row'
    divINPUT.style.flexWrap = 'nowrap'
    //div.style.backgroundColor ='lightgrey'
    divINPUT.style.alignContent = 'center'
    divINPUT.style.justifyContent = 'center'
    divINPUT.style.padding = '5px'

    const divCANCEL = document.createElement('div')
    divCANCEL.setAttribute('class', 'container_cancel')
    divCANCEL.style.width = '100%'
    divCANCEL.style.marginTop = '20px'
    divCANCEL.style.display = 'flex'
    divCANCEL.style.flexDirection = 'row'
    divCANCEL.style.flexWrap = 'nowrap'
   // divCANCEL.style.backgroundColor ='lightgrey'
    divCANCEL.style.alignContent = 'center'
    divINPUT.style.justifyContent = 'right'
    divCANCEL.style.padding = '5px'

    const divContainer_cancel_guardar = document.createElement('div')
    divContainer_cancel_guardar.setAttribute('class', 'container_cancel')
    divContainer_cancel_guardar.style.width = '30%'
    divContainer_cancel_guardar.style.marginLeft = '60%'
    divContainer_cancel_guardar.style.display = 'flex'
    divContainer_cancel_guardar.style.flexDirection = 'row'
    divContainer_cancel_guardar.style.flexWrap = 'nowrap'

    const btn_cancel = document.createElement('div')
    btn_cancel.style.width = 'auto'
    btn_cancel.style.cursor = 'pointer'
    btn_cancel.style.fontSize = '.8em'
    btn_cancel.innerText = 'Cancelar'
    
    const btn_guardar = document.createElement('button')
    btn_guardar.setAttribute('type', 'submit')
    btn_guardar.setAttribute('name', 'guardarNome')
    btn_guardar.style.backgroundColor = 'white'
    btn_guardar.style.border = 'none'
    btn_guardar.style.width = 'auto'
    btn_guardar.style.marginLeft = '8px'
    btn_guardar.style.cursor = 'pointer'
    btn_guardar.style.fontSize = '.8em'
    btn_guardar.innerText = 'Guardar'
    
    const Paragrafo = document.createElement('p')
    Paragrafo.innerHTML = '<strong>Introduza seu nome</strong>'
    
    //AQUI VÃO APARECER OS MEUS APPENDCHILD()  

    divContainer_cancel_guardar.appendChild(btn_cancel)
    divContainer_cancel_guardar.appendChild(btn_guardar)
    divCANCEL.appendChild(divContainer_cancel_guardar)

    divINPUT.appendChild(span)
    divINPUT.appendChild(input_nome)
    divINPUT.appendChild(span_x)
    div_conteiner.appendChild(form)
    form.appendChild(divINPUT)
    form.appendChild(divCANCEL)

    body.appendChild(div_ofuscar)
    body.appendChild(div_conteiner)
    
    div_ofuscar.addEventListener('click', ()=>{
        div_conteiner.style.display = 'none'
        div_ofuscar.style.display = 'none'
    })
    btn_cancel.addEventListener('click', ()=>{
        div_conteiner.style.display = 'none'
        div_ofuscar.style.display = 'none'
    })
}



nome_edite.addEventListener('click', ()=>{
   InputEdicaoNome('text', 'EdicaoNome' ,'Digite seu nome', 'index.php', 'get', 'person' )

})
desc_btn.addEventListener('click', ()=>{
    InputEdicaoNome('text', 'EdicaoDescricao','Descreva seu canal', 'index.php', 'get', 'person')

})

/*
trocar_senha.addEventListener('click', ()=>{
    InputEdicaoNome('password', 'AntigaPassword', 'Digite sua senha antiga', 'index.php', 'post', 'key')
    
   
})
*/

const Mudar_Para = () =>{
    fotos.addEventListener('click', ()=>{
        slider_bar.style.marginLeft = '-100%'
        
        slider_bar.style.heigth = '100%'
        
    })
    
    videos.addEventListener('click', ()=>{
        slider_bar.style.marginLeft = '0%'
        
    })
    playlist.addEventListener('click', ()=>{
        slider_bar.style.marginLeft = '-200%'
        slider_bar.style.height = '100%'
        
    })
    
    album.addEventListener('click', ()=>{
        slider_bar.style.marginLeft = '-300%'
        
        slider_bar.style.heigth = '100%'
        
    })
    
}
Mudar_Para()





const ParaNavBar = () =>{
    if(menu_nav_bar.style.top == '29.33333px'){
        menu_nav_bar.style.position = 'fixed'
        menu_nav_bar.style.backgroundColor = 'green'
    }else{
        menu_nav_bar.style.position = 'relative'
    }
}



ceta_voltar.addEventListener('click', ()=>{
    window.location = 'index.html'
})

window.addEventListener('load', ()=>{
    videos.classList.add('class_botton')
})


const RolarNavBar = () =>{
    fotos.addEventListener('click', (evt)=>{
        videos.classList.remove('class_botton')
        playlist.classList.remove('class_botton')
        album.classList.remove('class_botton')
    
        fotos.classList.add('class_botton')
    
    })
    videos.addEventListener('click', (evt)=>{
        fotos.classList.remove('class_botton')
        playlist.classList.remove('class_botton')
        album.classList.remove('class_botton')
    
        videos.classList.add('class_botton')
    
    })
    playlist.addEventListener('click', (evt)=>{
        fotos.classList.remove('class_botton')
        videos.classList.remove('class_botton')
        album.classList.remove('class_botton')
    
        playlist.classList.add('class_botton')
    
    })
    album.addEventListener('click', (evt)=>{
        playlist.classList.remove('class_botton')
        videos.classList.remove('class_botton')
        album.classList.remove('class_botton')
    
        album.classList.add('class_botton')
    
    })
   
}

RolarNavBar()

