import { LightningElement,api, track} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import AccName from '@salesforce/schema/Account.Name';
import AccPhone from '@salesforce/schema/Account.Phone';
import AccIndustry from '@salesforce/schema/Account.Industry';
import AccAnnualRev from '@salesforce/schema/Account.AnnualRevenue';

export default class BaseComponentsEx extends LightningElement {

    accountName=AccName;
    accountPhone=AccPhone;
    accountIndustry=AccIndustry;
    accountAnnualRevenue=AccAnnualRev;

    /*This recorId will inherit the record ID of the current record detail page... */
    @api recordId;
    @api objectApiName;


    objectName='Account';
    fields = ['Type', 'Name', 'Industry', 'Phone', 'Website'];

    handleAccountCreated(event){
        const evnt=new ShowToastEvent({
            title:'Account Created',
            message:'Account with Id '+event.detail.id+' created succesfully',
            variant:'success'
        });
        this.dispatchEvent(evnt);
    }
    handleCancel(event){
        //Here we fetching the reference of all the lightning-input-field
        const inputFields=this.template.querySelectorAll('lightning-input-field');
        if(inputFields){
            //Here we are iterating over all the inputFields, fetching the field
            //one by one and then reseting them.
            inputFields.forEach(field=>{
                field.reset();
            });
        }
    }   
}