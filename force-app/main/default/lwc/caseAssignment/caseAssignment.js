import { LightningElement, wire } from 'lwc';
import allCases from '@salesforce/apex/CaseController.getAllCases';
import closeCase from '@salesforce/apex/CaseController.closeCase';
import { refreshApex } from '@salesforce/apex';

export default class CaseAssignment extends LightningElement {

//    showCaseComment=false;
    /*Here we are calling getAllCases method of the apex , and we are also passing
    the value to the parameter of that method which is named as account Name. 
    VEry first time , searchstr will be empty so method of apex class will
    return all the cases , when there is any change in searchStr , the apex
    method will be called again and will return the cases for the given account Name */
    @wire(allCases,{accountName:'$searchStr'})
    cases;

    searchStr='';
    myCaseId;

    handleChange(event){
        this.searchStr=event.target.value;
        //this searchStr we want to pass to the apex method..
    }
    

    closeCase(event){
        //Here i need to fetch the case Id for which button has been clicked..
        this.myCaseId=event.target.name;

        //Imperative way to call apex method..
        /*
        Reason to choose imperative approach :-
            1. through wire we cant control when to call the apex method.
            2. through we can only read the data , we cant modify the data.
         */

        closeCase({caseId:this.myCaseId})
            .then(result=>{
                /*Here I want to show a Toast once a case has been
                    closed succesfully.. which i will discuss tomorrow */
                this.resultMsg=result;            
                refreshApex(this.cases);
            })
            .catch(error=>{
                this.resultMsg=error.getMessage();
            })       
        

    }

    newCommentAdd(event){

        this.caseId=event.target.name;
        
        //Lets pass the case Id to the child component by 
        //calling its public method..
        this.template.querySelector('c-case-comment-comp').setCaseRecordId(this.caseId);

        
    }
    
}