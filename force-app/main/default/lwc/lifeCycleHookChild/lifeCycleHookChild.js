import { LightningElement } from 'lwc';

export default class LifeCycleHookChild extends LightningElement {

   
    constructor(){
        super();
        //console.log('Inside constructor -child of  lifecycle hook...');
        
    }
    connectedCallback(){
        //console.log('Inside connected callback - child of life cycle hook');
    }
    disconnectedCallback(){
        //console.log('Inside disconnected callback - child of life cycle hook');
    }
    
    
}