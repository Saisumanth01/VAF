// Add any features-related JavaScript functionality here
// For example, you could add an animation to the feature items on scroll
window.addEventListener('scroll', function() {
    var featureItems = document.querySelectorAll('.feature');
    featureItems.forEach(function(item) {
        var itemTop = item.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
        if (itemTop < windowHeight * 0.8) {
            item.classList.add('animate');
        }
    });
});
// Add any technical-details-related JavaScript functionality here
// For example, you could add an accordion-style toggle for the detail items

document.querySelectorAll('.detail-item').forEach(function(item) {
    item.addEventListener('click', function() {
      this.classList.toggle('active');
      var content = this.querySelector('.detail-description');
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
  // Add any pricing-related JavaScript functionality here
// For example, you could add a toggle between monthly and annual pricing

document.querySelectorAll('.plan-item').forEach(function(item) {
    item.addEventListener('click', function() {
      // Add any click handler functionality here
      // For example, you could redirect the user to the signup page
      window.location.href = this.querySelector('.btn').getAttribute('href');
    });
  });
  // Add any call-to-action-related JavaScript functionality here
// For example, you could add a smooth scrolling effect to the CTA buttons

document.querySelectorAll('.cta-buttons a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var targetId = this.getAttribute('href');
      var targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  // Add any footer-related JavaScript functionality here
// For example, you could add form validation to the newsletter signup

document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var emailInput = document.querySelector('.newsletter-input');
    var email = emailInput.value.trim();
    if (isValidEmail(email)) {
      // Perform newsletter signup logic here
      console.log('Signed up for newsletter:', email);
      emailInput.value = '';
      alert('Thank you for subscribing to our newsletter!');
    } else {
      alert('Please enter a valid email address.');
    }
  });
  
  function isValidEmail(email) {
    // Basic email validation regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }