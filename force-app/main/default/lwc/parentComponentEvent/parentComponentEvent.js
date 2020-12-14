import { LightningElement } from 'lwc';

export default class ParentComponentEvent extends LightningElement {

    empId;
    empName;

    handleCustomEvent(event){
        const eObj=event.detail;
        this.empId=eObj.empId;
        this.empName=eObj.empName;
    }
}