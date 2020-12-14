import { LightningElement,wire, track } from 'lwc';
import fetchAllCases from '@salesforce/apex/CaseManager.fetchCaseDetails';
import { ShowToastEvent} from 'lightning/platformShowToastEvent';
import closeCase from '@salesforce/apex/CaseManager.closeDate';
import { refreshApex } from '@salesforce/apex';

export default class WireServiceDemo2 extends LightningElement {

    searchStr='';

    @wire(fetchAllCases,{accountName:'$searchStr'})
    allCases


    handleChange(event){
        this.searchStr=event.target.value;
    }

    caseId;
    caseCloseMessage;
    
    closeCase(event){
        this.caseId=event.target.name;
    
        closeCase({caseId:this.caseId})
        .then(result=>{
            
            refreshApex(this.allCases);
        })
        .catch(error=>{
            
        })
    }
}