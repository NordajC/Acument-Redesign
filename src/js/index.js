// document.addEventListener('DOMContentLoaded', function() {
//   const logo = document.querySelector('.logo-container img');
//   const gradientScreen = document.querySelector('.gradient-screen');
//   const parts = document.querySelectorAll('.gradient-part');

//   logo.addEventListener('animationend', () => {
//     gradientScreen.style.visibility = 'visible';
//     parts.forEach((part, index) => {
//       part.style.animation = `moveAndFade 1.5s ease forwards ${index * 0.5 + 0.5}s`; // Delay each part correctly
//       part.style.opacity = 1; // Start visible state
//     });
//   });

//   // Wait for the last part's animation to complete
//   parts[parts.length - 1].addEventListener('animationend', () => {
//     document.body.classList.add('animation-complete');
//     document.getElementById('splash-screen').style.display = 'none';
//   });
// });


// document.addEventListener('DOMContentLoaded', function() {
//   AOS.init({
//       duration: 800,
//       once: true,
//       easing: 'ease'
//   });

//   const splashScreen = document.getElementById('splash-screen');
//   const logo = document.querySelector('.logo-container img');
//   const gradientScreen = document.querySelector('.gradient-screen');
//   const gradientParts = document.querySelectorAll('.gradient-part');

//   // Start by showing the logo
//   setTimeout(() => {
//       // Fade out the logo
//       logo.style.opacity = '0';

//       // After logo fades, show the gradient screen
//       setTimeout(() => {
//           gradientScreen.style.visibility = 'visible';
//           // Stagger the animation of each gradient part
//           gradientParts.forEach((part, index) => {
//               setTimeout(() => {
//                   part.style.opacity = '1';  // Fade in each part
//                   AOS.refresh();  // Refresh AOS to trigger the animation
//               }, index * 500);  // Staggered delay for each part
//           });

//           // Set timeout to hide splash screen after all animations
//           setTimeout(() => {
//               splashScreen.style.opacity = '0';
//               splashScreen.style.visibility = 'hidden';

//               setTimeout(() => {
//                   splashScreen.style.display = 'none';
//               }, 2000);  // Ensure this matches the opacity transition time

//           }, gradientParts.length * 500 + 1000);  // After all parts have animated

//       }, 2000);  // Time to wait after logo fades out

//   }, 1000);  // Initial delay to show logo
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const splashScreen = document.getElementById("splash-screen");
//   const logo = document.querySelector(".logo-container img");
//   const gradientScreen = document.querySelector(".gradient-screen");
//   const gradientParts = document.querySelectorAll(".gradient-part");

//   // Initially hide gradient screen and parts
//   gradientScreen.style.display = "none";
//   gradientParts.forEach(part => part.style.opacity = "0");

//   // Display the logo for some time then fade out
//   setTimeout(() => {
//     logo.style.opacity = "0"; // Fade out the logo

//     setTimeout(() => {
//       splashScreen.style.backgroundColor = "transparent"; // Change background
//       gradientScreen.style.display = "flex"; // Show gradient screen

//       // Animate each gradient part
//       gradientParts.forEach((part, index) => {
//         setTimeout(() => {
//           part.style.opacity = "1"; // Fade in
//           part.style.transform = "translateY(-100%)"; // Move up
//         }, index * 500);

//         setTimeout(() => {
//           part.style.opacity = "0"; // Fade out
//           part.style.transform = "translateY(100%)"; // Move down
//         }, 2500 + index * 500); // Delay each animation
//       });

//       // Hide splash screen after all animations
//       setTimeout(() => {
//         splashScreen.style.opacity = "0";
//         setTimeout(() => {
//           splashScreen.style.display = "none";
//         }, 2000);
//       }, gradientParts.length * 1000 + 3000);
//     }, 2000); // Time after logo fade
//   }, 3000); // Logo display duration
// });



document.addEventListener("DOMContentLoaded", function () {
  const splashScreen = document.getElementById('splash-screen');
  const logo = document.querySelector('.logo-container img');
  const gradientScreen = document.querySelector('.gradient-screen');
  const gradientParts = document.querySelectorAll('.gradient-part');

  // Initially hide gradient screen and reset positions
  gradientScreen.style.display = "none";
  gradientParts.forEach(part => {
    part.style.opacity = "0";
    part.style.transform = "translateY(0%)"; // Reset position before animation
  });

  // Fade in the logo initially
  setTimeout(() => {
    logo.style.opacity = '1';  // Fade in the logo to full visibility

    // After the logo fades in, wait then start fade out
    setTimeout(() => {
      logo.style.opacity = '0';

      setTimeout(() => {
        // Display the gradient screen but keep the background solid
        gradientScreen.style.display = 'flex';

        gradientParts.forEach((part, index) => {
          setTimeout(() => {
            part.style.opacity = '1';
            part.style.transform = 'translateY(0%)'; // Make visible onscreen
          }, index * 300); // Faster appearance
        });

        // Delay the background change until all parts are fully visible
        setTimeout(() => {
          splashScreen.style.backgroundColor = 'transparent';

          // Start moving parts downward after they've all appeared
          gradientParts.forEach((part, index) => {
            setTimeout(() => {
              part.style.opacity = '0';
              part.style.transform = 'translateY(100%)'; // Move down
            }, 1000 + index * 300); // Reduced time for moving down
          });

          // Hide splash screen after the last part has moved
          setTimeout(() => {
            splashScreen.style.opacity = '0';
            setTimeout(() => {
              splashScreen.style.display = 'none';
            }, 1500); // Reduced post-animation clearance time
          }, gradientParts.length * 300 + 1500); // Adjust total time for all parts to move

        }, gradientParts.length * 300); // Wait for all parts to appear before fading background

      }, 2000); // Time after logo fades in
    }, 2000); // Logo visibility duration
  }, 500); // Initial delay before logo starts fading in
});

document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById('myModal');
  var btn = document.querySelector('.text-button');
  var span = document.querySelector('.close');

  btn.onclick = function() {
      modal.style.display = "block";
  }

  span.onclick = function() {
      modal.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
});

function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle('visible');
}

async function fetchJobs() {
  try {
      const response = await fetch('http://localhost:1337/api/jobs', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
      });

      const json_response = await response.json();

      console.log('Response JSON', json_response);
      console.log('Response JSON Attributes', json_response.data[0].attributes.title);

      const job = json_response.data[0];
      const attributes = job.attributes;

      const title = attributes.title;
      const category = attributes.category;
      const date = attributes.date;
      const location = attributes.location;
      const rolesAndResponsibilities = attributes.roles_and_responsibilities;

      console.log('title: ', title);
  } catch (error) {
      console.error('Error fetching jobs:', error);
  }
}

fetchJobs();

