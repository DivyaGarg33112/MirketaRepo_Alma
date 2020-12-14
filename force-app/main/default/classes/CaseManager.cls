public with sharing class CaseManager {

    @AuraEnabled(cacheable=true)
    public static List<Case> fetchCaseDetails(String accountName){

        if(String.isNotBlank(accountName)){
            String searchString='%'+accountName+'%';
            List<Case> caseList=[select Id,Account.Name,CaseNumber,IsClosed,
            Origin,Description,Priority,Subject,Status from Case
            where Account.Name like :searchString];
            return caseList;
        }
        else {
            List<Case> caseList=[select Id,Account.Name,CaseNumber,IsClosed,
            Origin,Description,Priority,Subject,Status from Case];
            return caseList;
        }
    }
    @AuraEnabled
    public static String closeDate(String caseId){
        String message;
        try {
            Case cs=new Case(Id=caseId);
            cs.status='Closed';
            update cs;
            message='Case with Id '+caseId+' has been closed succesfully..';
        }
        catch(Exception ex){
            message=ex.getMessage();
        }
        return message;
    }
}
