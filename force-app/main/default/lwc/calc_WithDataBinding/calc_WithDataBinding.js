import { LightningElement } from 'lwc';

export default class Calc_WithDataBinding extends LightningElement {

    firstNumber=10;
    secondNumber;
    result;
    showResult=false;

    handleFirst(event){
        this.firstNumber=event.target.value;
    }
    handleSecond(event){
        this.secondNumber=event.target.value;
    }
    handleAdd(){
        this.showResult=true;
        this.result=Number(this.firstNumber)+Number(this.secondNumber);

    }
}