



function addRecommendations(){

    let nameObj = document.getElementById("name-recommendation");
    let textObj = document.getElementById("recommendation_info");

    if(nameObj==null || nameObj.value.trim()==""){
        alert("Please enter your name");
    }else if(textObj==null || textObj.value.trim()==""){
        alert("Please enter the text");
    }else{
        // create new recommendation form
        var element = document.createElement("div");
        element.setAttribute("class","recommendation");
        element.innerHTML = "<span>&#8220;</span>"+textObj.value+"<span>&#8221;</span>"+"<p>---name</p>";
        // append to the parent
        document.getElementById("all-rcommendations").appendChild(element);

        // reset the value
        nameObj.value="";
        textObj.value="";
        // notice
        showPopupRecommendation(true);
    }

}


function sendContactInfo(){
    // get the message
    let nameObj = document.getElementById("name-contact");
    let emailObj = document.getElementById("user-email");
    let contact_infoObj = document.getElementById("contact_info");


    if(nameObj==null || nameObj.value.trim()==""){
        alert("Please enter your name");
    }else if(emailObj==null){
        alert("Please enter your mail address");
    }else if(contact_infoObj==null || contact_infoObj.value.trim()==""){
        alert("Please enter your contact information");
    }else{
        // sned email
        sendEmail(nameObj.value,emailObj.value.trim(),contact_infoObj.value);
        // reset value
        nameObj.value = "";
        emailObj.value = "";
        contact_infoObj.value = "";
        showPopupContact(true);
    }
}


function showPopupContact(bool){
    if(bool){
        document.getElementById("popup-contact").style.visibility='visible'
    }else{
        document.getElementById("popup-contact").style.visibility='hidden'
    }
}



function showPopupRecommendation(bool){
    if(bool){
        document.getElementById("popup-recommendation").style.visibility='visible'
    }else{
        document.getElementById("popup-recommendation").style.visibility='hidden'
    }
}

function checkEmail(email) {
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailPattern.test(email)) {
        return true;
    } else {
        return false;
    }
}

function sendEmail(name,email,message){

    emailjs.init({
        publicKey: 'p2R_vKqKWH-ONbgcb',    /*YOUR_PUBLIC_KEY*/
    });

    var templateParams = {
        user_name: name,
        user_email: email,
        message: message,
      };

    emailjs.send('contact_service', 'contact_form', templateParams).then(
        (response) => {
          console.log('Email sent successfully!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
    );
}