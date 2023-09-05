// Mail
const emailElement = document.getElementById('email');

emailElement.addEventListener('click', function() {
  const email = emailElement.textContent;
  const subject = 'Betreff deiner E-Mail';
  const body = 'Hier ist der Text deiner E-Mail.';
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  window.location.href = mailtoLink;
});


// Interests
const interHoverElements = document.querySelectorAll('.interHover');

interHoverElements.forEach((element) => {
  const icon = element.previousElementSibling; 

  icon.addEventListener('mouseenter', () => {
    element.classList.add('active');
  });

  icon.addEventListener('mouseleave', () => {
    element.classList.remove('active');
  });
});
