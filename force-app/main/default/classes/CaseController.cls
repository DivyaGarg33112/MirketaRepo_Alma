public with sharing class CaseController {

    //Method must be cacheable =true if it will be called through wire service
    @AuraEnabled(cacheable=true)
    public static List<Case> getAllCases(String accountName){

        if(String.isNotBlank(accountName)){

            String str='%'+accountName+'%';
            List<Case> caseList=[select Id,Account.Name,CaseNumber,IsClosed,Origin,
            Description,Priority,Subject,Status from Case where Account.Name like :str];
            return caseList;
        }
        else {
            List<Case> caseList=[select Id,Account.Name,CaseNumber,IsClosed,Origin,
            Description,Priority,Subject,Status from Case];
            return caseList;
        }

    }

    //IF method will be imperatively , it is required to decorate it 
    //with cacheable=true
    @AuraEnabled
    public static String closeCase(String caseId){
        String message;
        try {
            Case cs=new Case(Id=caseId);
            cs.status='Closed';
            update cs;
            message='Case with Id '+caseId+' has been closed succesfully...';            
        } catch (Exception e) {
            message=e.getMessage();
        }
        return message;
    }

    @AuraEnabled
    public static string addCaseComment(String caseId,String cBody){
        if(String.isNotBlank(caseId) && string.isNotBlank(cBody)){
            CaseComment comm=new CaseComment(parentId=caseId,commentBody=cBody);
            insert comm;
        }
        return 'Success';
    }
}









