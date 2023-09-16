let messages = [];

function sendMessage() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const messageObject = {
    name,
    email,
    message
  };

  messages.push(messageObject);

  displayMessages();
}

function displayMessages() {
  const displayMessage = document.getElementById('display-message');
  displayMessage.innerHTML = messages.map((message, index) => `
    <div class="message" key=${index}>
      <strong>Name:</strong> ${message.name}<br>
      <strong>Email:</strong> ${message.email}<br>
      <strong>Message:</strong> ${message.message}<br>
    </div>
    `).join('');
}


function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }




  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50, // Adjust for the fixed nav height
        behavior: 'smooth'
      });
    }
  }
  
  function sendMessage() {
    // Add your message sending logic here
    alert('Message sent!');
  }
  



  // Add your JavaScript code here

function toggleNav() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
  }
  
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50, // Adjust for the fixed nav height
        behavior: 'smooth'
      });
      // Close the nav on small screens after a link is clicked
      const navLinks = document.getElementById('nav-links');
      navLinks.classList.remove('active');
    }
  }
  