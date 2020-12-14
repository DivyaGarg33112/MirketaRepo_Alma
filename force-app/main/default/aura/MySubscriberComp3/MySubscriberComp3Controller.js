({
    sendHandler : function(component, event, helper) {
        //getting the reference of input Field through its aura:id
        const inpElement=component.find("inputBox");
        
        //if reference is found
        if(inpElement){
            //getting the value from the text field
            const inpMsg=inpElement.get("v.value");
            
            //Here i am getting the messages attribute which is of list type
            const msgs=component.get('v.messages');

            //creating an object
            var payload={
                id:msgs.length,
                value:inpMsg,
                from:"Aura"
            };
         
            msgs.push(payload);
            //component.set("v.messages",msgs);
            component.find("myMessageChannel").publish(payload);
          
        }
    },
    messageHandler : function(component,event,helper){
        if(event && event.getParam("message") && event.getParam("from")!="AURA"){
            const msg=event.getParam("message");
            const messages=component.get("v.messages");
            messages.push({
                id:messages.length,
                value:msg,
                from:event.getParam("from")
            });
            component.set("v.messages",messages);
        }   
    }
})
