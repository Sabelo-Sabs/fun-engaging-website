// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Fun fact feature (from previous step)
    const funButton = document.getElementById('funButton');
    const funFactContainer = document.getElementById('funFactContainer');
    
    const funFacts = [
      "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old!",
      "A group of flamingos is called a 'flamboyance'.",
      "Bananas are berries, but strawberries are not!",
      "Octopuses have three hearts.",
      "The Eiffel Tower can be 15 cm taller during the summer."
    ];
    
    const displayFunFact = () => {
      const randomIndex = Math.floor(Math.random() * funFacts.length);
      funFactContainer.textContent = funFacts[randomIndex];
    };
    
    funButton.addEventListener('click', () => {
      displayFunFact();
    });
  
    // Modal functionality
    const modal = document.getElementById('modal');
    const modalButton = document.getElementById('modalButton');
    const closeModal = document.getElementById('closeModal');
  
    // Open modal when modalButton is clicked
    modalButton.addEventListener('click', () => {
      modal.style.display = 'block';
    });
  
    // Close modal when closeModal is clicked
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    // Close modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  