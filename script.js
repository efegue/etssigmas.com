// Add future JavaScript here
// Example: Display a message when a social link is clicked

document.addEventListener('DOMContentLoaded', () => {
  const socialLinks = document.querySelectorAll('.social a');
  socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      alert('This would redirect to our social media page.');
    });
  });
});
