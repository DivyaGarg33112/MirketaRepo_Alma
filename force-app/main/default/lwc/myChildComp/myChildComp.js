import { LightningElement,api } from 'lwc';

export default class MyChildComp extends LightningElement {


    //Lets see how to pass the data from parent component to child component using
    //public property of child component

    //Lets declare a public property..
    /*
    To declare a public property in lwc component , we need to use a decorator
    @api with the property.. and then we need to import it from the lwc module also...
     */
    @api childMsg;

}