import { createElement } from 'lwc';
import MyFirstLWC from 'c/MyFirstLWC';

describe('test block for data binding',()=>{
    beforeEach(()=>{
        //created element in the DOM of Javascript.
        const element=createElement('c-my-first-lwc',{
            is:MyFirstLWC
        })
        document.body.appendChild(element);
        
    })
    test('Test Default Msg should be Hello Morning',()=>{
        //Here i have accessed my Lwc component which I have appended to the DOM in before
        //each method..
        const element=document.querySelector('c-my-first-lwc');

        //Now,from the lwc component, access the reference of div element.
        const text=element.shadowRoot.querySelector('div');

        //Here I am getting the reference of the ligthning-input field
        const inputElement=element.shadowRoot.querySelector('lightning-input');

        //assigning the value to that input field..
        inputElement.value='Salesforce';

        //Here i have configured that I want to handle the onchange event..
        inputElement.dispatchEvent(new CustomEvent('change'));

        //This will be called after event will be performed..
        return Promise.resolve().then(()=>{
            //compare the value of div with Hello . Salesforce..
            expect(text.textContent).toBe('Hello , Salesforce!');
        })

    })

})