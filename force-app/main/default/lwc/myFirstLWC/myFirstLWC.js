import { LightningElement } from 'lwc';

export default class MyFirstLWC extends LightningElement {
    greeting='Morning';

    handleChange(event){
        this.greeting=event.target.value;
    }
}