//ini javascript

function homeButton() {
    document.getElementById('home-btn').addEventListener('click', () => homeButton);
        console.log('Home button clicked');
    }
        
    function designButton() {
    document.getElementById("design-btn").addEventListener("click", () => homeButton);
        console.log("Design button clicked");
    
    }
    
    function contactButton() {
        document.getElementById("contact-btn").addEventListener("click", () => contactButton);
            console.log("Contact button clicked");
    }

    function sendButton() {
        console.log('username');
        console.log('Email');
        console.log('Reason');
        document.getElementById('username').innerHTML = username;
        document.getElementById('Email').innerHTML = Email;
        document.getElementById('Reason').innerHTML = Reason;
    }
        document.getElementById('send-button').addEventListener("click", function() {
    })
    
   