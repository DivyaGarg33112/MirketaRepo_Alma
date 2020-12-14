import { LightningElement, wire, track } from 'lwc';
import MyMessageChannel from '@salesforce/messageChannel/MyMessageChannel__c';
import { publish, MessageContext , subscribe , unsubscribe} from 'lightning/messageService';

export default class MyPublisherComp3 extends LightningElement {

    @track messages=[];
    
    @wire(MessageContext)
    messageContext;

    subscription=null;

    sendHandler(){
        //Here I am getting the reference of input field..
        const inpElement=this.template.querySelector('lightning-input');

        //If reference is found..`
        if(inpElement){
            const inpMsg=inpElement.value; //fetch the value from the input field.
            
            //Creating an object
            const myData={
                id:this.messages.length,
                message:inpMsg,
                from:'LWC'
            };
            this.messages.push(myData);
            publish(this.messageContext,MyMessageChannel,myData);
        }
    }
    connectedCallback(){
        this.subscribeToMessageChannel();
    }
    
    subscribeToMessageChannel(){
        if(!this.subscription){
            this.subscription=subscribe(
                this.messageContext,
                MyMessageChannel,
                (myResult)=>{
                    console.log(JSON.stringify(myResult));
                    this.messages.push(myResult);
                }
            );
        }
    }

    disconnectedCallback(){
        unsubscribe(this.subscription);
        this.subscription=null;
    }
    
}