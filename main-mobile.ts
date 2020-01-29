import {Mobile} from "./mobile"

let Nokia3310:Mobile
let iPhone3G:Mobile
let SamsungGalaxy10:Mobile

Nokia3310 = new Mobile("Nokia 3310", "3310", "Nokia", 1, "negro", true, 5, 100)
iPhone3G = new Mobile("iPhone 3G", "3G", "iPhone", 10, "blanco", false, 2, 400)
SamsungGalaxy10 = new Mobile("Samsung Galaxy 10", "Galaxy 10", "Samsung", 2, "gris", true, 3, 900)

console.log("Nombre: " + Nokia3310.name +"\nModelo: "+ Nokia3310.model +"\nMarca: "+ Nokia3310.trademark +"\nTamaño SD: "+ Nokia3310.sdSize +"Gb\nColor: "+ Nokia3310.color +"\nEs 5G: "+ Nokia3310.is5G + "\nNº de cámaras: " + Nokia3310.cameraNumber +"\nPrecio: "+ Nokia3310.price +"€")
console.log("Nombre: " + iPhone3G.name +"\nModelo: "+ iPhone3G.model +"\nMarca: "+ iPhone3G.trademark +"\nTamaño SD: "+ iPhone3G.sdSize +"Gb\nColor: "+ iPhone3G.color +"\nEs 5G: "+ iPhone3G.is5G + "\nNº de cámaras: " + iPhone3G.cameraNumber +"\nPrecio: "+ iPhone3G.price +"€")
console.log("Nombre: " + SamsungGalaxy10.name +"\nModelo: "+ SamsungGalaxy10.model +"\nMarca: "+ SamsungGalaxy10.trademark +"\nTamaño SD: "+ SamsungGalaxy10.sdSize +"Gb\nColor: "+ SamsungGalaxy10.color +"\nEs 5G: "+ SamsungGalaxy10.is5G + "\nNº de cámaras: " + SamsungGalaxy10.cameraNumber +"\nPrecio: "+ SamsungGalaxy10.price +"€")

