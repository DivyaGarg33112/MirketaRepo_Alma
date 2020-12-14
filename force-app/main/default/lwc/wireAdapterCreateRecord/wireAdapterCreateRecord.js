import { LightningElement } from 'lwc';
import AccountObj from '@salesforce/schema/Account';
import NameField from '@salesforce/schema/Account.Name';
import PhoneField from '@salesforce/schema/Account.Phone';
import IndustryField from '@salesforce/schema/Account.Industry';
import noOfEmployeesField from '@salesforce/schema/Account.NumberOfEmployees';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class WireAdapterCreateRecord extends LightningElement {

    //one variable of object type
    accRecord={
        Name:'',
        Phone:'',
        Industry:'',
        noOfEmployees:''
    };

    //Here i am fetching the values from text fields and initializing them into accRecord 
    handleChange(event){
        if(event.target.name==='accName'){
            this.accRecord.Name=event.target.value;
        }
        else if(event.target.name==='accPhone'){
            this.accRecord.Phone=event.target.value;
        }
        else if(event.target.name==='accIndustry'){
            this.accRecord.Industry=event.target.value;
        }
        else if(event.target.name==='accNoOfEmployees'){
            this.accRecord.noOfEmployees=event.target.value;
        }
    }
    
    //This will be called to create the Account record
    //when user clicks the button
    createAccount(event){

        //Here creating one object 
        const fields={};
        //Initializaing the different fields in account object from the accRecord..
        fields[NameField.fieldApiName]=this.accRecord.Name;
        fields[IndustryField.fieldApiName]=this.accRecord.Name;
        fields[PhoneField.fieldApiName]=this.accRecord.Phone;
        fields[noOfEmployeesField.fieldApiName]=this.accRecord.noOfEmployees;

        //Create an object of Record type and specified the 
        //object apiName and fields details..
        const recordInput={apiName:AccountObj.objectApiName,fields};
        
        createRecord(recordInput)
            .then(result=>{
                console.log(result);
                this.dispatchEvent(new ShowToastEvent({
                    title:'Success',
                    message:'Account Created succesfully with Id : '+result.id,
                    variant:'success'
                })
                );
            })
            .error(error=>{
                this.dispatchEvent(new ShowToastEvent({
                    title:'Error',
                    message:'Account Not  Created',
                    variant:'error'
                })
                );
            })
    }

}