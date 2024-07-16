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
  const splashScreen = document.getElementById("splash-screen");
  const logo = document.querySelector(".logo-container img");
  const gradientScreen = document.querySelector(".gradient-screen");
  const gradientParts = document.querySelectorAll(".gradient-part");

  // Initially hide gradient screen and reset positions
  gradientScreen.style.display = "none";
  gradientParts.forEach((part) => {
    part.style.opacity = "0";
    part.style.transform = "translateY(0%)"; // Reset position before animation
  });

  // Fade in the logo initially
  setTimeout(() => {
    logo.style.opacity = "1"; // Fade in the logo to full visibility

    // After the logo fades in, wait then start fade out
    setTimeout(() => {
      logo.style.opacity = "0";

      setTimeout(() => {
        // Display the gradient screen but keep the background solid
        gradientScreen.style.display = "flex";

        gradientParts.forEach((part, index) => {
          setTimeout(() => {
            part.style.opacity = "1";
            part.style.transform = "translateY(0%)"; // Make visible onscreen
          }, index * 300); // Faster appearance
        });

        // Delay the background change until all parts are fully visible
        setTimeout(() => {
          splashScreen.style.backgroundColor = "transparent";

          // Start moving parts downward after they've all appeared
          gradientParts.forEach((part, index) => {
            setTimeout(() => {
              part.style.opacity = "0";
              part.style.transform = "translateY(100%)"; // Move down
            }, 1000 + index * 300); // Reduced time for moving down
          });

          // Hide splash screen after the last part has moved
          setTimeout(() => {
            splashScreen.style.opacity = "0";
            setTimeout(() => {
              splashScreen.style.display = "none";
            }, 1500); // Reduced post-animation clearance time
          }, gradientParts.length * 300 + 1500); // Adjust total time for all parts to move
        }, gradientParts.length * 300); // Wait for all parts to appear before fading background
      }, 2000); // Time after logo fades in
    }, 2000); // Logo visibility duration
  }, 500); // Initial delay before logo starts fading in
});

document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("myModal");
  var btn = document.querySelector(".text-button");
  var span = document.querySelector(".close");

  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle("visible");
}

//value propersitions:

document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("data-case");
  var btn = document.getElementById("data-case-btn");
  var span = document.getElementById("data-case-close");

  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("engineering-case");
  var btn = document.getElementById("engineering-case-btn");
  var span = document.getElementById("engineering-case-close");

  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("digital-case");
  var btn = document.getElementById("digital-case-btn");
  var span = document.getElementById("digital-case-close");

  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

// let jobs = [];

// let title = "";
// let category = "";
// let date = "";
// let location = "";
// let rolesAndResponsibilities = "";

// async function fetchJobs() {
//   try {
//     //TODO Change the URL to the correct one
//       const response = await fetch('https://supportive-action-24aa34bd56.strapiapp.com/api/jobs', {
//           method: 'GET',
//           headers: {
//               'Content-Type': 'application/json'
//           }
//       });

//       const json_response = await response.json();

//       console.log('Response JSON', json_response);
//       console.log('Response JSON Attributes', json_response.data[0].attributes.title);

//       const job = json_response.data[0];
//       const attributes = job.attributes;

//       title = attributes.title;
//       category = attributes.category;
//       date = attributes.date;
//       location = attributes.location;
//       rolesAndResponsibilities = attributes.roles_and_responsibilities;

//       console.log('Title:', title);
//   } catch (error) {
//       console.error('Error fetching jobs:', error);
//   }
// }

// fetchJobs();

// async function fetchJobPostings() {
//   try {
//     const response = await fetch('https://supportive-action-24aa34bd56.strapiapp.com/api/jobs', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });

//     const json_response = await response.json();
//     const json_data = json_response.data;
//     console.log('data:', json_data);
//     displayJobPostings(json_response.data);
//   } catch (error) {
//     console.error('Error fetching job postings:', error);
//   }
// }

// function displayJobPostings(jobPostings) {
//   const jobList = document.getElementById('job-list');
//   jobPostings.forEach(job => {
//     const jobItem = document.createElement('div');
//     jobItem.classList.add('job-item');
//     jobItem.innerHTML = `
//       <h2>${job.attributes.title}</h2>
//       <p><strong>Category:</strong> ${job.attributes.category}</p>
//       <p><strong>Location:</strong> ${job.attributes.location}</p>
//       <p><strong>Date:</strong> ${job.attributes.date}</p>
//       <p><strong>Roles and Responsibilities:</strong> ${job.attributes.roles_and_responsibilities}</p>
//       ${job.attributes.image ? `<img src="${job.attributes.image.url}" alt="${job.attributes.title}" />` : ''}
//     `;
//     jobList.appendChild(jobItem);
//   });
// }

// document.addEventListener('DOMContentLoaded', function() {
//   fetchJobPostings();
// });

//console fetcher     console.log("Response JSON", json_response);



function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
    '©': '&copy;',
    '®': '&reg;',
    '™': '&trade;',
    // Add other replacements as needed
  };

  return text.replace(/[&<>"'©®™]/g, function(m) { return map[m]; });
}

document.addEventListener('DOMContentLoaded', function() {
  async function fetchJobPostings() {
      try {
          const response = await fetch('https://supportive-action-24aa34bd56.strapiapp.com/api/jobs?populate=*', {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json'
              }
          });

          const json_response = await response.json();
          const jobsByCategory = groupJobsByCategory(json_response.data);
          displayCategoryButtons(jobsByCategory);
          displayJobPostings(jobsByCategory, 'All');
      } catch (error) {
          console.error('Error fetching job postings:', error);
      }
  }

  function groupJobsByCategory(jobPostings) {
      return jobPostings.reduce((acc, job) => {
          const category = job.attributes.category || 'Uncategorized';
          if (!acc[category]) {
              acc[category] = [];
          }
          acc[category].push(job);
          return acc;
      }, {});
  }

  function displayCategoryButtons(jobsByCategory) {
      const categoryMenu = document.getElementById('category-menu');

      // Add the "All" button
      const allButton = document.createElement('button');
      allButton.classList.add('job-category-button');
      allButton.textContent = 'All';
      allButton.setAttribute('data-category', 'All');
      allButton.addEventListener('click', (event) => {
          event.preventDefault(); // Prevent default action
          displayJobPostings(jobsByCategory, 'All');
          setActiveCategory(allButton);
      });
      categoryMenu.appendChild(allButton);

      // Add buttons for each category
      for (const category in jobsByCategory) {
          const categoryButton = document.createElement('button');
          categoryButton.classList.add('job-category-button');
          categoryButton.textContent = category;
          categoryButton.setAttribute('data-category', category);
          categoryButton.addEventListener('click', (event) => {
              event.preventDefault(); // Prevent default action
              displayJobPostings(jobsByCategory, category);
              setActiveCategory(categoryButton);
          });
          categoryMenu.appendChild(categoryButton);
      }
  }

  function setActiveCategory(activeButton) {
      const buttons = document.querySelectorAll('.job-category-button');
      buttons.forEach(button => {
          button.classList.remove('active');
      });
      activeButton.classList.add('active');
  }

  function displayJobPostings(jobsByCategory, selectedCategory) {
      const jobList = document.getElementById('job-list');
      jobList.innerHTML = ''; // Clear existing content

      const categoriesToDisplay = selectedCategory === 'All' ? Object.keys(jobsByCategory) : [selectedCategory];

      categoriesToDisplay.forEach(category => {
          jobsByCategory[category].forEach(job => {
              const jobItem = document.createElement('div');
              jobItem.classList.add('job-item');

              const jobTitle = document.createElement('h4');
              jobTitle.classList.add('job-title');
              jobTitle.textContent = job.attributes.title;

              const jobDetails = document.createElement('div');
              jobDetails.classList.add('job-details');
              jobDetails.style.display = 'none';

              const imageUrl = job.attributes.image?.data?.attributes?.url 
                  ? `${job.attributes.image.data.attributes.url}?t=${new Date().getTime()}` // Add a timestamp to the image URL
                  : '';
              const rolesAndResponsibilitiesHtml = marked.parse(job.attributes.roles_and_responsibilities);

              jobDetails.innerHTML = `
                  <div style="display: flex; flex-direction: column; align-items: flex-start;">
                      ${imageUrl ? `<img src="${imageUrl}" alt="${job.attributes.title}" style="width: 100%;" />` : ''}
                      <div class="roles-responsibilities" style="text-align: left; width: 100%;"><strong>Roles and Responsibilities:</strong> ${rolesAndResponsibilitiesHtml}</div>
                      <p class="location" style="text-align: left; width: 100%;"><strong>Location:</strong> ${job.attributes.location}</p>
                      <p class="date" style="text-align: left; width: 100%;"><strong>Date:</strong> ${job.attributes.date}</p>
                      <div class="form-container" style="text-align: left; width: 100%; margin-top: 20px;">
                          <iframe
                              id="JotFormIFrame-241966305117355"
                              title="Clone of Apply Now"
                              onload="window.parent.scrollTo(0,0)"
                              allowtransparency="true"
                              allow="geolocation; microphone; camera; fullscreen"
                              src="https://form.jotform.com/241966305117355"
                              frameborder="0"
                              style="min-width:100%;max-width:100%;height:1800px;border:none;" <!-- Adjust height here -->
                          ></iframe>
                          <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
                          <script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-241966305117355']", "https://form.jotform.com/")</script>
                      </div>
                  </div>
              `;

              jobItem.appendChild(jobTitle);
              jobItem.appendChild(jobDetails);
              jobList.appendChild(jobItem);

              // Add event listener for toggling job details
              jobTitle.addEventListener('click', (event) => {
                  event.preventDefault(); // Prevent default action
                  jobDetails.style.display = jobDetails.style.display === 'none' ? 'block' : 'none';
              });
          });
      });
  }

  fetchJobPostings();
});

function md_to_html(md) {
  const lines = md.split("\n");
  const modifiedLines = lines.map((line) => line.slice(1).trim());
  let html = "<ul>";

  // Add each line as an <li> element inside the <ul>
  for (let i = 0; i < modifiedLines.length; i++) {
    html += `<li>${modifiedLines[i]}</li>`;
  }

  // Close the <ul> tag
  html += "</ul>";
  return html;
}
