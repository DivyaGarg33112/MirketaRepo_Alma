import { LightningElement } from 'lwc';

/*Here greetingMsg is the name of the custom label and c is the default
namespace... */
import myMsg from '@salesforce/label/c.greetingMsg';


export default class CustomLabelEx extends LightningElement {

    greetings=myMsg;
}