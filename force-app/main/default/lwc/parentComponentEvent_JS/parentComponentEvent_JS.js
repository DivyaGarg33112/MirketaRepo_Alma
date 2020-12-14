import { LightningElement } from 'lwc';

export default class ParentComponentEvent_JS extends LightningElement {
    showChild=false;
    empId;
    empName;
    message;

    constructor(){
        super();
        this.template.addEventListener('mycustevent',this.handleCustomEvent.bind(this));
    }

    handleCustomEvent(event){
        console.log('I m here in handle Custom Event..');
        const eObj=event.detail;
        this.empId=eObj.empId;
        this.empName=eObj.empName;
        //const myMsg=event.detail;
        //this.message=myMsg;
    }
    handleClick(event){
        if(this.showChild===true){
            this.showChild=false;
        }
        else {
            this.showChild=true;
        }
    }
}