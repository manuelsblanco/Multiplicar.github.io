import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.multiplicar();
  }

title = 'Multiplicar';
char: any;
tabla2: string[] = ["2x1","2x2","2x3","2x4","2x5","2x6","2x7","2x8","2x9"];
tabla3: string[] = ["3x1","3x2","3x3","3x4","3x5","3x6","3x7","3x8","3x9"];
tabla4: string[] = ["4x1","4x2","4x3","4x4","4x5","4x6","4x7","4x8","4x9"];
tabla5: string[] = ["5x1","5x2","5x3","5x4","5x5","5x6","5x7","5x8","5x9"];
tabla6: string[] = ["6x1","6x2","6x3","6x4","6x5","6x6","6x7","6x8","6x9"];
tabla7: string[] = ["7x1","7x2","7x3","7x4","7x5","7x6","7x7","7x8","7x9"];
tabla8: string[] = ["8x1","8x2","8x3","8x4","8x5","8x6","8x7","8x8","8x9"];
tabla9: string[] = ["9x1","9x2","9x3","9x4","9x5","9x6","9x7","9x8","9x9"];

tablas: string[] = ["2x1","2x2","2x3","2x4","2x5","2x6","2x7","2x8","2x9",
                    "3x1","3x2","3x3","3x4","3x5","3x6","3x7","3x8","3x9",
                    "4x1","4x2","4x3","4x4","4x5","4x6","4x7","4x8","4x9",
                    "5x1","5x2","5x3","5x4","5x5","5x6","5x7","5x8","5x9",
                    "6x1","6x2","6x3","6x4","6x5","6x6","6x7","6x8","6x9",
                    "7x1","7x2","7x3","7x4","7x5","7x6","7x7","7x8","7x9",
                    "8x1","8x2","8x3","8x4","8x5","8x6","8x7","8x8","8x9",
                    "9x1","9x2","9x3","9x4","9x5","9x6","9x7","9x8","9x9"];

correctas: number = 0;
incorrectas: number = 0;
porcentaje: number = 0;
operacion: string="";
resultado:number = 0;
desempeno: boolean = false;
timeoutId: number = 0;
ctx: any;
config: any;
chartData: number[] = [];
chartDataLabels: string[] = [];

getRandomElement(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

asignar(){
  let numbers = Array.from({length: this.tablas.length}, (_, i) => i);
  let assignedNumbers = [];
  let index;

  while (numbers.length > 0) {
      index = this.getRandomElement(numbers);
      assignedNumbers.push(index);
      numbers.splice(numbers.indexOf(index), 1);
  }

  let value = this.tablas[index];
  this.tablas.splice(index, 1);
  return value;
}

multiplicar(){
    if(this.tablas.length>0){
      this.operacion = this.asignar()?.toString()!;
    }
    else{
      this.operacion = "No hay números que multiplicar"
      this.porcentaje = this.porcentajes(this.correctas,this.incorrectas,this.tablas);
    }

  }



calcular() {
  const inputElement = document.getElementById("resultado") as HTMLInputElement;
  this.resultado = Number(inputElement.value);
  if(((Number(this.operacion[0]))*(Number(this.operacion[2]))==this.resultado)){
    this.correctas++;
    const button = document.getElementById("calcular")!;
    button.style.backgroundColor = "green";
  }
  else{
    this.incorrectas++;
    const button = document.getElementById("calcular")!;
    button.style.backgroundColor = "red";
  }
  inputElement.value = "";
  this.multiplicar();
  clearTimeout(this.timeoutId);
  this.timeoutId = (Number(setTimeout(() => {
    this.calcular();
  }, 10000)));
}


  porcentajes(correctas: number, incorrectas: number, respuestas: Array<any>): number {
    const totalRespuestas = correctas + incorrectas;
    const porcentajeCorrectas = (correctas / totalRespuestas) * 100;
    this.desempeno = true;
    return porcentajeCorrectas;
  }

}



