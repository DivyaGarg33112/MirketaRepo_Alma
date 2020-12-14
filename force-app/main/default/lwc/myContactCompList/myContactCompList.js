import { LightningElement } from 'lwc';

export default class MyContactCompList extends LightningElement {

    //This is an array of Object type..
    contactList=[
        {
            contactId:101,
            firstName:'Divya',
            lastName:'Garg',
            email:'divya.garg@almamate.in',
            contactNumber:'8650226655',
            accountName:'Almamate Infotech Pvt. Ltd.'
        },
        {
            contactId:102,
            firstName:'Bhoomika',
            lastName:'Hastir',
            email:'bhoomika.hastir@almamate.in',
            contactNumber:'7485968596',
            accountName:'Almamate Infotech Pvt. Ltd.'
        },
        {
            contactId:103,
            firstName:'Kavya',
            lastName:'Agarwal',
            email:'kavya.agarwal@almamate.in',
            contactNumber:'8650226655',
            accountName:'Almamate Infotech Pvt. Ltd.'
        },
        {
            contactId:104,
            firstName:'Sachin',
            lastName:'Bhati',
            email:'sachin.bhati@almamate.in',
            contactNumber:'8650226655',
            accountName:'Almamate Infotech Pvt. Ltd.'
        },
        {
            contactId:105,
            firstName:'Swati',
            lastName:'Sharma',
            email:'swati.sh@almamate.in',
            contactNumber:'8580226655',
            accountName:'Almamate Infotech Pvt. Ltd.'
        },
    ];

}