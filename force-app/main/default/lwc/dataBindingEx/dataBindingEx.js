import { LightningElement } from 'lwc';

export default class DataBindingEx extends LightningElement {

    //This is known as property or Field
    //message='Hi All , How r u ? Are u excited to learn LWC';

    //get message(){
      //  return 'Hi All , How r u ? Are u excited to learn LWC through getter';
    //}

    message;

    handleOnChange(event){
        this.message=event.target.value;
    }

}