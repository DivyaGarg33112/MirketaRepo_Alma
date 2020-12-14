import { LightningElement } from 'lwc';
import logoImg from '@salesforce/resourceUrl/AlmaLogo';

//Import the static resource
import allResources from '@salesforce/resourceUrl/myResources';

//Import the loadstyle library to import css from the static resouce
import { loadStyle} from 'lightning/platformResourceLoader';

export default class StaticResourceEx extends LightningElement {

    imgSource=logoImg;
    imgSource2=allResources+'/staticResources/images/salesforce.jpg';
    


    //connectedCallback - it is a life cycle which is getting called when component
    //is inserted into the DOM
    connectedCallback(){
        
        //Promise is a call which is having all which can take an array of all the
        //css and js files we want to import...
        //In the then I can do whatever i want if all the resources are succesfully
        //loaded . the way I have then i also can have catch which
        //will be called if there is any error in uploading the resources..
        Promise.all([
            loadStyle(this, allResources + '/staticResources/css/style.css')
          ]).then(() => {
            console.log('Css loaded succesfully...');
          });
    }
}