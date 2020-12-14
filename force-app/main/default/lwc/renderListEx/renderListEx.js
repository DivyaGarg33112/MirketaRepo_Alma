import { LightningElement } from 'lwc';

export default class RenderListEx extends LightningElement {

    contacts=[
        {
            Id:101,
            name:'Lokesh Kumar',
            contactNumber:'8574859685',
            email:'lokesh@mirketa.com',
            accountName:'Mirketa'
        },
        {
            Id:102,
            name:'Rohit Arya',
            contactNumber:'7574859685',
            email:'rohit.arya@mirketa.com',
            accountName:'Mirketa'
        },
        {
            Id:103,
            name:'Deepak Kumar Singh',
            contactNumber:'74859685',
            email:'deepakkumarsingh@mirketa.com',
            accountName:'Mirketa'
        },
        {
            Id:104,
            name:'Divya Garg',
            contactNumber:'7574859685',
            email:'divya.garg@almamate.in',
            accountName:'Almamate'
        },
        {
            Id:105,
            name:'Shweta',
            contactNumber:'74859685',
            email:'deepakkumarsingh@mirketa.com',
            accountName:'Mirketa'
        }
    ];
}