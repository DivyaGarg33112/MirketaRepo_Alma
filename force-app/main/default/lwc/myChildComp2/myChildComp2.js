import { LightningElement,api } from 'lwc';

export default class MyChildComp2 extends LightningElement {

    message='Hello All , How r u ? Hope u r enjoying learning LWC';

    @api changeCase(){
        this.message=this.message.toUpperCase();
    }

}