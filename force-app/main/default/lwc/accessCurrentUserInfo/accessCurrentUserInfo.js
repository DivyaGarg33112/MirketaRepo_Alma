import { LightningElement } from 'lwc';
import myUserId from '@salesforce/user/Id';
import isUserMyGuest from '@salesforce/user/isGuest';

export default class AccessCurrentUserInfo extends LightningElement {

    userId=myUserId;
    userStatus=isUserMyGuest;
}