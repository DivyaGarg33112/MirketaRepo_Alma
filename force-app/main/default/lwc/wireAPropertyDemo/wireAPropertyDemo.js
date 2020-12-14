import { LightningElement, wire } from 'lwc';
import fetchAllContacts from '@salesforce/apex/ContactController.getAllContacts';
import { NavigationMixin } from 'lightning/navigation';
import fetchAllAccounts from '@salesforce/apex/ContactController.getAllAccounts';

export default class WireAPropertyDemo extends NavigationMixin(LightningElement) {


    /*Here fetchAllContacts will be called first time and then whenever
    there is any change in the selectedAccount property. 
    Here $specifies whenever there is any change in the value of 
    the selectedAccount property , the functions needs to be
    called... */
    //Here I want to call the getAllContacts of the Apex class which is 
    //referred as fetchAllCOntacts in my import statement . 
    //and In that apex method , I need to pass
    //parameters , where the name of the parameter is accountId and in that accountId
    //parameter I want to pass the value of selectedAccount..
    @wire(fetchAllContacts,{accountId:'$selectedAccount'})
    contactsList; //A JS Property

    selectedAccount='';
    accountsList=[];

    handleChange(event){
        this.selectedAccount=event.detail.value;
    }
    
    @wire(fetchAllAccounts)
    processAccounts({data,error}){
        if(data){
            for(var i=0;i<data.length;i++){
                this.accountsList=[...this.accountsList,{
                    label: data[i].Name,value: data[i].Id
                }];
            }
        }
        else if(error){
            console.log('error-------->'+error);
        }
    }


    handleClick(event){
        //Now here i want you to navigate to record detail page..

        this.contactId=event.target.value;
        this.pageReferenceObj={
            type: 'standard__recordPage',
            attributes: {
                recordId:this.contactId,
                objectApiPage:'Contact',
                actionName:'view'
            }
        };

        this[NavigationMixin.Navigate](this.pageReferenceObj);
    }
}