//responsividade
var largura = 0

function avaliarLargura() {
   largura = window.innerWidth

   if (largura < 767.98) {
      var paragrafoSobreMim = document.getElementById('ajustar-texto-sobre-mim')
      paragrafoSobreMim.innerHTML = 'Além disso, também gosto de escutar música, assistir séries e filmes, jogar video game, etc. Confira abaixo um pouco dos meus gostos.'

      var classeSobreMim = document.getElementById('ajustar-column-reverse-sobre-mim')
      classeSobreMim.className = 'col-md-10' + ' ' + 'row' + ' ' + 'flex-column-reverse'

      var classeContato = document.getElementById('ajustar-column-reverse-contato')
      classeContato.className = 'col-md-10' + ' ' + 'row' + ' ' + 'd-flex' + ' ' + 'flex-column-reverse'

      var paragrafoHabilidades = document.getElementById('ajustar-texto-habilidades')
      paragrafoHabilidades.innerHTML = 'Até o momento, fui capaz de desenvolver habilidades em HTML5, CSS3, Bootstrap 4, SASS e Javascript. Nesse contexto, podemos dividir em dois grupos. O primeiro deles é o grupo das tecnologias que eu domino e consigo desenvolver projetos bastante profissionais. O segundo deles diz respeito às tecnologias que não tenho tanta experiência com a implementação. Veja abaixo uma explicação sobre esses grupos.'
   }
}

//maquina de escrever
function typeWriter(elemento) {
   const textoArray = elemento.innerHTML.split('')
   elemento.innerHTML = ''

   textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 95 * i)
   })

}

const titulo = document.querySelector('h1')

//const teste = document.getElementById('ajustar-texto-sobre-mim')

console.log(titulo);
//console.log(teste);
typeWriter(titulo)
//typeWriter(teste)




//scroll suave com link interno
const menuItens = document.querySelectorAll('.barradenavegacao a')

menuItens.forEach(item => {
   item.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick(event) {
   event.preventDefault()
   const element = event.target
   const id = element.getAttribute('href')
   const toSection = document.querySelector(id).offsetTop

   const coordenadaY = toSection - 50

   window.scroll({
      top: coordenadaY,
      behavior: "smooth"
   })
}




//animação com o scroll
const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'

function animeScroll() {
   const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
   target.forEach(function (element) {
      if ((windowTop) > element.offsetTop) {
         element.classList.add(animationClass)
      }
      else {
         element.classList.remove(animationClass)
      }

   })
}

animeScroll()

window.addEventListener('scroll', function () {
   animeScroll()
})




//fotos aleatorias na seção SOBRE MIM
/*
function fotoAleatoria(indice) {
   document.getElementById('foto1').src = 'img/jogo' + indice + '.jpg'
}

setInterval(function cronometro() {
   var indice = Math.floor(Math.random() * 6)
   if (indice == 0) {
      indice = 1
   }
   fotoAleatoria(indice)
}, 4500);
*/