import { LightningElement } from 'lwc';

export default class ChildComponentEvent extends LightningElement {
    
    handleChange(event){
        const msg=event.target.value;

        const myEmpObj={
            empId:101,
            empName:'Divya Garg'
        }

        //want to send this msg from child to parent
        //step 1:- Create the event
        const custEvent=new CustomEvent('mycustevent',{detail:myEmpObj,bubbles:true});

        //step 2:- Dispatch the event
        this.dispatchEvent(custEvent);
    }
}