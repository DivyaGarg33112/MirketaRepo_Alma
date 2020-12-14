import { LightningElement } from 'lwc';

export default class ParentComponentComp extends LightningElement {
    message;

    constructor(){
        super();
        this.template.addEventListener('mycustomevent',this.handleCustomEvent.bind(this));
    }

    handleCustomEvent(event){
        const childMsg=event.detail;
        this.message=childMsg;
    }
}