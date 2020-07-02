
const userID = sessionStorage.getItem("activeUser")

 const messagesComponent = {
     HTMLComponent: (messageObject) => {
        if(messageObject.userID == userID) {
        const messageHtmlString = `<section class="messageObject">
        
        <section id="messageObject--${messageObject.id}" class="messageObject">
        <p class="messages-title--${messageObject.userID}---${messageObject.userName}-${messageObject.id}">${messageObject.userName}</p>
        <br><p>${messageObject.message}</p>
        <button id="message--DeleteButton--${messageObject.id}--${messageObject.userID}">Delete</button>
        <button id="message--EditButton--${messageObject.id}--${messageObject.userID}">Edit</button></section>
       
        </section>`
        
        return messageHtmlString}
        else {
           return `<section class="messageObject">
        
           <section id="messageObject--${messageObject.id}" class="messageObject">
           <p class="messages-title--${messageObject.userID}---${messageObject.userName}-${messageObject.id}">${messageObject.userName}</p>
           <br><p>${messageObject.message}</p>
           </section>
          
           </section>`
        }
         },
         //populates a text box to submit a message
         messageInputComponent: () => {
            const inputComponent = `<input class="message--Input" name="message__Input" type="text"><button class="message--SubmitButton">Submit</button>`
            return inputComponent
         },


         //factory function that will change the message sent inner html to hold the value for editing
         messageFactoryInputFunction: (messageObject) => {
            const messageInputBox = document.querySelector(`#messageObject--${messageObject.id}`)

            messageInputBox.innerHTML = `<input class="message--Input" name="message__Input" type="text">
            <button class="message--SubmitButton">Save</button>
            <input type="hidden" id="hiddenIdValue" value="${messageObject.id}" />`

            const inputValue = messageObject.message
            const inputLocation = document.querySelector(".message--Input")
            inputLocation.value = inputValue
         },

         messageAddFreind: () => {

         }
 }

 export default messagesComponent