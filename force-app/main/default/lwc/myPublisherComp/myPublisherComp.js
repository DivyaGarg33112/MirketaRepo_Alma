import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';

export default class MyPublisherComp extends LightningElement {


    @wire(CurrentPageReference) pageRef;

    handleClick(){
        fireEvent(this.pageRef,"myevent","This is simple pub sub demo..");
    }
}