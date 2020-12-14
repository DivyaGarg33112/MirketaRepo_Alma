import { LightningElement, api } from 'lwc';
import addCaseComment from '@salesforce/apex/CaseController.addCaseComment';

export default class CaseCommentComp extends LightningElement {

    caseCommentBody;
    
    caseRecordId;

    //This is a public method , will be called by parent component to set the caseRecordId..
    @api
    setCaseRecordId(cId){
        console.log('Case Record in public method : '+cId);
        this.caseRecordId=cId;
    }

    handleChange(event){
        this.caseCommentBody=event.target.value;
    }

    createCaseComment(event){
        /*Here i do have caseRecordId which has been passed from parent and 
        case comment Body through text field, through imperative approach
        lets pass the caseId for which we want to create comment and also
            the comment body... */
        addCaseComment({caseId:this.caseRecordId,cBody:this.caseCommentBody})
            .then(result=>{
                console.log('result--------'+result);
            })
            .catch(error=>{
                console.log('error ----------'+error);
            })

    }
}