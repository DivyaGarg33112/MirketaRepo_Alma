import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener, unregisterAllListeners } from 'c/pubsub';

export default class MySubscriberComp extends LightningElement {

    message;  //property to hold the data coming from the publisher

    @wire(CurrentPageReference) pageRef;

    connectedCallback(){
        registerListener("myevent",this.handleEvent,this);
    }
    handleEvent(msg){
        this.message=msg;
    }
    disconnectedCallback(){
        unregisterAllListeners(this);
    }

}