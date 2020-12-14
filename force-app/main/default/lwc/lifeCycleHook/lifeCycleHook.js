import { LightningElement } from 'lwc';
import firstTemplate from './lifeCycleHook.html';
import secondTemplate from './lifeCycleHook2.html';



export default class LifeCycleHook extends LightningElement {

    
    isShow=true;
    constructor(){
        super();
//        console.log('Inside constructor - lifecycle hook...');
        
    }
    connectedCallback(){
        
  //     console.log('Inside connected callback - life cycle hook');
        
    }
    disconnectedCallback(){
    //    console.log('Inside disconnected callback - life cycle hook');
    }
   
    showChild(){
        this.isShow=true;
    }
    hideChild(){
        this.isShow=false;
    }

    templateno='temp1';

    changeTemplate(){
        console.log('I m here in change template');
       if(this.templateno==='temp1'){
            this.templateno='temp2';
        }
        else {
            this.templateno='temp1';
        }
    }

    
    render(){
        console.log('Inside Render');
        
        if(this.templateno==='temp1'){
            return firstTemplate;
        }
        else {
            
            return secondTemplate;
        }
    }

    /*If error is coming in any of the life cycle hook of the child component
    then parent component can handle  it in errorCallback hook . It is like
    a catch.... errorCallback takes two arguments - 
    one is error and second is stack . error is a native Javascript object
    and stack is a string...*/
    errorCallback(error,stack){
 //       console.log('I m error Call back : '+error+' '+stack);
    }
}