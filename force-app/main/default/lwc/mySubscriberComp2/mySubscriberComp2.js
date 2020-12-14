import { LightningElement, wire, track } from 'lwc';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';


export default class MySubscriberComp2 extends LightningElement {
    
    @track color;

    @wire(CurrentPageReference) pageRef

    connectedCallback(){
        registerListener("colorChanged",this.handleColorChanged,this);
    }
    disconnectedCallback(){
        unregisterAllListeners(this);
    }
    handleColorChanged(cCode){
        this.color=cCode;
    }
    get choosenColor(){
        return 'background-color:'+this.color;
    }
}