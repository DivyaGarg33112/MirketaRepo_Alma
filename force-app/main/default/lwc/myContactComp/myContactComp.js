import { LightningElement,api } from 'lwc';

export default class MyContactComp extends LightningElement {
    
    //step 1:- Create a public property in child component in which parent component
    //will pass the data.. using @api decorator and importing it in the import statement..
    @api contactObj={
        contactId:0,
        firstName:'No Defined',
        lastName:'Not Defined',
        email:'abc@test.com',
        contactNumber:'7485968596',
        accountName:'Test Company'
    }
 
    firstName;
    handleChange(event){
        this.firstName=event.target.value;
        alert('First Name : '+this.firstName);
        //code... imperative approach to call apex method...
    }
}