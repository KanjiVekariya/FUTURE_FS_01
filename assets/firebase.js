// Your Firebase config (replace with your real config)
 const firebaseConfig = {
    apiKey: "AIzaSyClM4V6COoEoS19ilBlkfoWXLumJHFSM4M",
    authDomain: "my-portfolio-68f14.firebaseapp.com",
    projectId: "my-portfolio-68f14",
    storageBucket: "my-portfolio-68f14.firebasestorage.app",
    messagingSenderId: "37460194791",
    appId: "1:37460194791:web:b1cb9ab8b04b6b3ff5b942"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to database
const contactFormDB = firebase.database().ref("contactForm");

// Get form
const form = document.querySelector(".contact__form");

// Handle submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const name = form.querySelectorAll("input")[0].value;
  const email = form.querySelectorAll("input")[1].value;
  const message = form.querySelector("textarea").value;

  // Save to Firebase
  contactFormDB.push({
    name: name,
    email: email,
    message: message
  });

  // Optional: clear form + show alert
  form.reset();
  alert("Message submitted successfully!");
});
