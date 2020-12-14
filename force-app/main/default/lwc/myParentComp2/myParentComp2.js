import { LightningElement } from 'lwc';

export default class MyParentComp2 extends LightningElement {

    handleClick(event){
        
        //Here i want to call the public method of child component
        // which can convert 
        //its msg into uppercase...

        //find the child component
        const childRef=this.template.querySelector('c-my-child-comp2');

        //then call the function of child component
        childRef.changeCase();
    }

}