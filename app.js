const twenty_words = ['Cerrar','Descarga','Parte','Homosexual','Carrito','Ley','Jaula','Revolver','Siameses','Orilla',
                       'Movimiento','Riachuelo','Diagrama','Cuchilla','Almendra','Espumar','Desgarrar','Nervio',
                       'Asteroide','Sufrir']
const ten_words =     ['Movimiento','Riachuelo','Jaula','Revolver','Siameses','Espumar','Cerrar','Cuchilla','Sufrir','Ley']


const word_box_1 = document.querySelector('.box-1')
const word_box_2 = document.querySelector('.box-2')
const word_box_3 = document.querySelector('.box-3')
const btn = document.querySelector('.btn')


//Iteramos la lista para dibujar las palabras a buscar


ten_words.forEach(function(element,index){
    let counter = 0
    setTimeout(function(){
        word_box_2.textContent = element
        
    },index*5000)
    
})

var cont = 0
function contador(){
    
    var contador = document.querySelector(".footer");
    cont++;
    if(cont > 5){
        cont = 0
    }
    contador.innerHTML = `Tiempo: ${cont}`;
    
}

myTimer = setInterval('contador()',800);



//Iteramos la lista para dibujar las veinte palabras base
twenty_words.forEach(i=>{
    word_box_1.innerHTML += `<ul><li style="list-style: none";><input type="checkbox" id="${i}" name="vehicle1" value="${i}">
    <label for="vehicle1" id=${i + '-check'}> ${i}</label></li></ul>`
})




var  selected_words = []
twenty_words.forEach(i=>{

    let miCheckbox = document.getElementById(i);
    miCheckbox.addEventListener('click',function(){
        if(miCheckbox.checked){
            selected_words.push(i)
        }
    }) 
})


var  same_words = []
btn.addEventListener('click',function(){
    
    selected_words.forEach(i=>{
        ten_words.forEach(j=>{
            if(i == j){
                var miLabel = document.getElementById(i + '-check');
                miLabel.innerHTML = `<label for="vehicle1" id=${i + '-check'}> ${i} <i class="fas fa-check"></i></label>`
                same_words.push(i)
            }
            
        })
        
    })


const dataArr = new Set(same_words);

let result = [...dataArr];

word_box_3.innerHTML = result


})


