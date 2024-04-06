fetch("components/header.html")
.then(response => response.text())
.then(data => {
    document.querySelector(".header").innerHTML = data
})
.catch(error => {
    console.log(error)
})

fetch("components/footer.html")
.then(response => response.text())
.then(data => {
    document.querySelector(".footer").innerHTML = data
})
.catch(error => {
    console.log(error)
})

//SLIDER

let imagen = document.querySelector(".imagen1")

let carrusel = ["assets/Portfolio/Home/Postal.png",
"assets/Portfolio/Home/LM_HAZLO-VERDE_7ed_REGLA_mock.jpg",
"assets/Portfolio/Home/Diploma2.jpg",
"assets/Portfolio/Home/28-JUN-PYP-Pride-2.jpg",
"assets/Portfolio/Home/123x1.jpg",
"assets/Portfolio/Home/Kiehls3.jpg",
"assets/Portfolio/Home/Mockup.jpg"
]

let sliderActual = 0

imagen.src = carrusel [0]

function next(){
    sliderActual ++
    if(sliderActual >= carrusel.length){
        sliderActual = 0}
    
    imagen.src = carrusel[sliderActual]
}

function prev(){
    if(sliderActual <= 0){
        sliderActual = carrusel.length - 1
    } else {
        sliderActual -- }
        imagen.src = carrusel[sliderActual]
} 
