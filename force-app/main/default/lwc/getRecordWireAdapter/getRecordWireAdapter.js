import { LightningElement,api, wire} from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';

export default class GetRecordWireAdapter extends LightningElement {

     @api recordId;
    //myFields=[NAME_FIELD,PHONE_FIELD,EMAIL_FIELD,TITLE_FIELD];

    /*@wire(getRecord,{recordId:'$recordId',
    fields:['Contact.Name','Contact.Title','Contact.Phone','Contact.Email']})
    contactRecord;*/

    @wire(getRecord,{recordId:'$recordId',
    fields:[NAME_FIELD,PHONE_FIELD,EMAIL_FIELD,TITLE_FIELD]})
    contactRecord;


    /*@wire(getRecord,{recordId:'$recordId',fields:myFields})
    contactRecord;*/

    get contactTitle(){
        if(this.contactRecord.data){
            console.log('Title : '+this.contactRecord.data.fields.Title.value);
            return this.contactRecord.data.fields.Title.value;
        }
    }
    get contactName(){
        if(this.contactRecord.data){
            console.log('Name : '+this.contactRecord.data.fields.Name.value);
            return this.contactRecord.data.fields.Name.value;
        }
    }
    get contactPhone(){
        if(this.contactRecord.data){
            console.log('Phone : '+this.contactRecord.data.fields.Phone.value);
            return this.contactRecord.data.fields.Phone.value;
        }
    }
    get contactEmail(){
        if(this.contactRecord.data){
            console.log('Email : '+this.contactRecord.data.fields.Email.value);
            return this.contactRecord.data.fields.Email.value;
        }
    }

}