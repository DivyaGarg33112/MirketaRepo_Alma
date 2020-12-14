import { LightningElement } from 'lwc';

export default class MyOwnerComp extends LightningElement {

    msg;

    handleOnChange(event){
        this.msg=event.target.value;
    }
}