import { createElement } from 'lwc';
import MyFirstComponent from 'c/firstComp';

describe('c-first-comp component test suite',()=>{
    
    test('display Message',()=>{
        const element=createElement('c-first-comp',{
            is:MyFirstComponent
        })
        document.body.appendChild(element)
        const firstDiv=element.shadowRoot.querySelector('div.first')
        expect(firstDiv.textContent).toBe('Welcome to LWC Training from Divya Garg..')
    })
    
})