import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyB80Y6B_Qc7P2Sh3_8A3VCSxxw3Hcxp1oo",
    authDomain: "webavstreetc.firebaseapp.com",
    databaseURL: "https://webavstreetc-default-rtdb.firebaseio.com",
    projectId: "webavstreetc",
    storageBucket: "webavstreetc.appspot.com",
    messagingSenderId: "942136257500",
    appId: "1:942136257500:web:97a85282da2aeca3613d19",
    measurementId: "G-6PC9LXE5WC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const feedbackRef = ref(database, 'feedbacks');

// Show modal function
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "flex";
    }
}

// Close modal function
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}

// Attach the closeModal function to the window object to make it globally accessible
window.closeModal = closeModal;

document.getElementById("feedbackForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    const name = getElementVal("name");
    const project = getElementVal("project");
    const feedback = getElementVal("feedback");

    saveMessages(name, project, feedback)
    .then(() => {
        showModal('successModal');
    })
    .catch(() => {
        showModal('errorModal');
    });

    // Reset the form
    document.getElementById("feedbackForm").reset();
}

const saveMessages = (name, project, feedback) => {
    return push(feedbackRef, {
        name: name,
        project: project,
        feedback: feedback
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};
