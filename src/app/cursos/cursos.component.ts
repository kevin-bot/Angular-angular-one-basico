import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  estadoBtn:boolean = true;

  getconsepto(){
    let cadena = 'Es un mecanismo de Angular de sustitución de una expresión por un valor de cadea en un tamplate.';
    let cadena2 = 'Puede usar interpolación como valor de un elemento HTMl, <img src={{urlimagen}}>';

    return cadena + cadena2;
  }
  getconseptoProperty(){
    let cadena = ' Ej: <img [src] = "UrlImg" > \n ';
    let cadena2 = 'Sirve para asignar un valor a un propiedad del DOM ';
    return cadena + cadena2;
  }

  cambiar_estadoBtn(){
    this.estadoBtn = false;
  }

  getconseptClassBinding(){
    let cadena = 'Anadir una clase a un elemento determinado, podemos utilizar la clase en un CSS, y en base a una condición la clase se ejecuta o no '
    let cadena2 = '< h1 [class.text-red] = "hasError"></h1>'
    return cadena + cadena2
  }
  getHasError(){
    return this.estadoBtn
  }


  getconseptStyleBinding(){
    let cadena = 'Es muy parecido a class bindig, utilizando las propiedades de l DOM prodremos hacer uso de este \n'
    let cadena2 = 'El ejemplo siguiente es usado style binding y deacuerdo a el valor de una variale booleana, se aplica un colo o otro \n '

    let cadena3 = '<button [style.baggroundcolor] = "aplicar ? "green":"read" " ? ></button> \n'
    return cadena + cadena2 + cadena3
  }

  save(event){
    console.log(event);
  }
}
