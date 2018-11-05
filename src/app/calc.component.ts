import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
	selector: 'calc-root',
	templateUrl: './calc.component.html',
	styleUrls: ['./calc.component.less']
})
/*
This class is being used for the calculator operation and initialisation
*/
export class CalculatorComponent {
	title = 'Calculator';
/*
Calculator variables initialisation
*/
	public calcPattern = "^[0-9]+[.]?[0-9]*$";
	public firstNum	;
	public secondNum;
	public operation:string="Add";
	public result	:number=0;
	constructor(){}
/*
Calculator function for its basic operations
*/
	calculate() {

		if(this.operation == 'Add') {
			this.result= Number(this.firstNum) +  Number(this.secondNum);
		}
		else if(this.operation == 'Subtract') {
			this.result= Number(this.firstNum) -  Number(this.secondNum);
		}
		else if(this.operation == 'Multiply') {
			this.result= Number(this.firstNum) *  Number(this.secondNum);
		}
		else if(this.operation == 'Divide') {
			this.result= Number(this.firstNum) /  Number(this.secondNum);
		}
	
	}

}
