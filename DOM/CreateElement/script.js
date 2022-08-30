
 const body = document.querySelector('body')
 
 //CreateElement
 // Os elementos Criados dentro dos metodos devem esta em aspas dentro dos metodos.
 const div = document.createElement('div')
 const imagem = document.createElement('img')
 const link = document.createElement('a')
 const header = document.createElement('h1')
 
 // Adicionando elemento criado dentro do body.
 // As variaveis devem estar sem aspas dentro do metodo que forem usadas
 body.appendChild(header) 
 body.appendChild(div)
 body.appendChild(imagem) 
 body.appendChild(link)

 
//setAttribute // Adicionando atributos dentro do elemento criado
 // O atributo e seus valores devem esta separados por virgula dentro dos metodo e ambos em aspas simples.
imagem.setAttribute('src','Sorvete.jpg')
imagem.setAttribute('id', '4')

// getAttribute //Pega o atributo do elemento

const teste = imagem.getAttribute('src')
imagem.getAttribute('id')





 









 









 