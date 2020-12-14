import { LightningElement, wire} from 'lwc';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class MyPublisherComp2 extends LightningElement {

    selectedColor;

    @wire(CurrentPageReference)
    pageRef;

    listOfColor=[
        {label:"Red",value:"red"},
        {label:"Yellow",value:"yellow"},
        {label:"Blue",value:"blue"},
        {label:"Green",value:"green"},
    ];

    changeColor(event){
        this.selectedColor=event.target.value;
    }
    handleColorChange(){
        //from here i want to publish an event
        fireEvent(this.pageRef,"colorChanged",this.selectedColor);
    }
}