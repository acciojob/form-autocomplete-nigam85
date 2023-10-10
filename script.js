const form = document.getElementById('myForm');
const inputs = form.querySelectorAll('input');

// Load form data from Local Storage and populate the inputs
function loadFormData() {
    const storedData = JSON.parse(localStorage.getItem('formData'));
    if (storedData) {
        for (const input of inputs) {
            const name = input.name;
            if (storedData[name]) {
                input.value = storedData[name];
            }
        }
    }
}

// Save form data to Local Storage
function saveFormData() {
    const formData = {};
    for (const input of inputs) {
        formData[input.name] = input.value;
    }
    localStorage.setItem('formData', JSON.stringify(formData));
}

// Load form data when the page loads
window.addEventListener('load', loadFormData);

// Save form data when the form is submitted
form.addEventListener('submit', (e) => {
    e.preventDefault();
    saveFormData();
    alert('Form data saved to Local Storage.');
});
