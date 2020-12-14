public with sharing class ContactController {
    

    @AuraEnabled(cacheable=true)
    public static List<Account> getAllAccounts(){
        List<Account> accList=[select Id,Name from Account];
        return accList;
    }


    @AuraEnabled(cacheable=true)
    public static List<Contact> getAllContacts(String accountId){

          if(String.isNotBlank(accountId)){
                List<Contact> conList=[select Id,Name,Phone,Email,Account.Name from Contact where accountId=:accountId];
                return conList;
            }
            else {
                List<Contact> conList=[select Id,Name,Phone,Email,Account.Name from Contact];
                return conList;
            }
            
        
    }
}
