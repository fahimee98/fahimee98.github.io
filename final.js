document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });



  var navLinks = document.querySelectorAll('nav li');

  function animateNav() {
      navLinks.forEach(function(link) {
          link.addEventListener('mouseover', function() {
              this.style.transform = 'scale(1.2)';
          });

          link.addEventListener('mouseout', function() {
              this.style.transform = 'scale(1)';
          });
      });
  }

  animateNav();

  var form = document.querySelector('#contactForm');
  var nameInput = document.querySelector('#nameInput');
  var emailInput = document.querySelector('#emailInput');
  var messageInput = document.querySelector('#messageInput');


  form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    if (validateForm()) {
       
        alert('Form submitted successfully!');
        
        form.reset();
    }
});


function validateForm() {
    var isValid = true;
    var errorMessages = document.querySelectorAll('.error');

    
    errorMessages.forEach(function(errorMessage) {
        errorMessage.remove();
    });

    
    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Name is required');
        isValid = false;
    }

    
    if (emailInput.value.trim() === '') {
        showError(emailInput, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
        showError(emailInput, 'Invalid email format');
        isValid = false;
    }

    
    if (messageInput.value.trim() === '') {
        showError(messageInput, 'Message is required');
        isValid = false;
    }

    return isValid;
}


function showError(input, message) {
    var errorElement = document.createElement('p');
    errorElement.className = 'error';
    errorElement.textContent = message;
    input.parentNode.appendChild(errorElement);
}


function isValidEmail(email) {
    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}






const filterBtns = document.querySelectorAll(".filter .btn");


filterBtns.forEach(btn => {
btn.addEventListener("click", filterProjects);
});


function filterProjects(e) {


const btn = e.target;


const category = btn.dataset.category;


const projects = document.querySelectorAll(".project");


projects.forEach(project => {


const projectCategory = project.dataset.category;


if (projectCategory === category || category === "all") {


project.style.display = "block";

} else {


project.style.display = "none";
}
});


filterBtns.forEach(btn => {
btn.classList.remove("active");
});


btn.classList.add("active");
}



// part about me
function showMore() {
    var moreInfo = document.getElementById("more-info");
    var showMore = document.getElementById("show-more");
    if (moreInfo.style.display == "none") {
    moreInfo.style.display = "block";
    showMore.innerHTML = "Show less";
    } else {
    moreInfo.style.display = "none";
    showMore.innerHTML = "Show more";
    }
    }