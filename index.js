let dark = document.styleSheets[0];
let lightStyles = document.styleSheets[1];



let emailCollectorForm = document.getElementById("Email-Collector")
emailCollectorForm.addEventListener("submit", event => {
    // Stop the default event behavior
    event.preventDefault()

    // use FormData to get the User's name and email    
    let ourFormData = new FormData(event.target)
    
    let userFirstName = ourFormData.get("firstName")
    let userEmailAddress = ourFormData.get("emailAddress")
        
    let updatedHtmlContent = `
        <h2>Congratulations, ${userFirstName}!</h2>

        <p>You're on your way to becoming ONE with the Scape</p>
        
        <p class="fine-print">We will contacting very shortly at: ${userEmailAddress}</p>
        <p class="fine-print">This is a portfolio mock-up page, your email was not seen or recorded</p>
    `
    
    let updatedContentContainer = document.getElementById("Main-Content")
    updatedContentContainer.innerHTML = updatedHtmlContent
})

