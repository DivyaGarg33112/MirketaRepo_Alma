import { LightningElement } from 'lwc';

//Step1 :- Import the NavigationMixin from Lightning/navigation module..
import {NavigationMixin} from 'lightning/navigation'; 


//Step2 :- Apply the NavigationMixin to the base class of LWC component 
export default class NavigationEx extends NavigationMixin(LightningElement) {

    inputData;

    handleChange(event){
        this.inputData=event.target.value;
    }

    navigateToAccountHomePage(){

        //Step 3:- Create the object of PageReference 
        this.pageReferenceObj={
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home'
            }
        };

        //Step 4:- Dispatch your request using NavigationMixin.Navigate service...
        this[NavigationMixin.Navigate](this.pageReferenceObj);
    }

    navigateToAccountNewRecordPage(){
        
        //Here Step 3 and 4 has been clubed together..
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            },
            state: {
                defaultFieldValues:'Name='+this.inputData+',AccountNumber=1001'
            }
        });
    }

    navigateToAccountViewRecordPage(){
        
        //Here Step 3 and 4 has been clubed together..
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId:'0015g000002LDefAAG',
                objectApiName: 'Account',
                actionName: 'view'
            }
        });
    }

    navigateToAccountEditRecordPage(){
        
        //Here Step 3 and 4 has been clubed together..
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId:'0015g000002LDefAAG',
                objectApiName: 'Account',
                actionName: 'edit'
            }
        });
    }

    navigateToWebPage(){
        
        //Here Step 3 and 4 has been clubed together..
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://www.salesforce.com'
            }
        });
    }
}