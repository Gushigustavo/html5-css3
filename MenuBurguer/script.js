const btnJ = document.getElementById('btnH')  // Seleção de elemento pelo id='btnH' do HTML e guardando em uma variável
const burguerJ = document.getElementById('burguer') // Seleção de elemento pelo id='burguer' do HTML e guardando em uma variável
const menuJ = document.getElementById('menu') // Seleção de elemento pelo id='menu' do HTML e guardando em uma variável

function menuMobile(event){  // Função disparada pelo evento click ou touchstart
    if(event.type === 'touchstart') event.preventDefault(); // Estrutura de condição  que filtra o tipo de evento capturado
    burguerJ.classList.toggle('active') // Adicionando se não tiver e removendo se conter uma class de nome active com o classList.toggle  no elemento  que foi selecionado, este elemento esta em uma variavel de nome (burguerJ).
    menuJ.classList.toggle('active') // Adicionando se não tiver e removendo se conter uma class de nome active com o classList.toggle  no elemento  que foi selecionado, este elemento esta em uma variavel de nome (menuJ).
    const active = menuJ.classList.contains('active') // verifica de no objeto contem uma classe com o nome de active retornando um valor boleano
    event.currentTarget.setAttribute('aria-expanded', active) // capture o evento onde ocorreu e configure um atributo de nome (aria-expended, com valor boleano)
   if(active){ // se o valor for verdadeiro
    event.currentTarget.setAttribute('aria-label', 'fechar Menu') // capture o evendo onde ocorreu e configure um atributo a esse objeto(aria-label) de valor (fechar Menu).
   }
   else{ // se for falso
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu') // capture o evendo onde ocorreu e configure um atributo a esse objeto(aria-label) de valor (fechar abrir).
   }
}

btnJ.addEventListener('click', menuMobile) // escutador de eventos click chamando a função menuMobile
btnJ.addEventListener('touchstart',menuMobile) // escutador de eventos touchstart chamando a função menuMobile