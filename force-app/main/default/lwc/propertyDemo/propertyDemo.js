import { LightningElement,track } from 'lwc';

export default class PropertyDemo extends LightningElement {

    //In previous releases if we want to declare any property as reactive then that needs
    //to specified with @track decorator . Now now from spring 20 , all the 
    //primitive data types are by default reactive so reactive property if there
    //is any change in property of Js file the updated value will automatically
    //be rendered on the html template with no extra efforts..
    @track userName;

    handleChange(event){
        this.userName=event.target.value;
    }


}