import { LightningElement } from 'lwc';

export default class ChildComponentComp extends LightningElement {
    
    handleChange(event){
        console.log('I m handleChange of Child..');
        const msg=event.target.value;
        
        //create event
        const custEvent=new CustomEvent('mycustomevent',{detail:msg,bubbles:true});

        //dispatch Event
        this.dispatchEvent(custEvent);
    }
}