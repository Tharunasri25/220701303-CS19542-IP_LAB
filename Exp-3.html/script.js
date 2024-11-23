document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const studentName = document.getElementById('studentName').value;
    const rollNumber = document.getElementById('rollNumber').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const year = document.getElementById('year').value;
    const department = document.getElementById('department').value;
    const section = document.getElementById('section').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;
    const subjectCode = document.getElementById('subjectCode').value;
    const credit = document.getElementById('credit').value;
    const pincode = document.getElementById('pincode').value;

    // Email 
    if (!email.includes('@')) {
        alert('E-Mail ID must contain @ character.');
        return;
    }

    // Subject code 
    const subjectCodeRegex = /^[A-Za-z]{2}[0-9]{5}$/;
    if (!subjectCodeRegex.test(subjectCode)) {
        alert('Subject code must start with 2 alphabets followed by 5 digits and should not exceed 7 characters.');
        return;
    }

    // Pincode 
    if (!/^\d{6}$/.test(pincode)) {
        alert('Pincode must be a 6-digit integer.');
        return;
    }

    // Mobile number 
    if (!/^\d{10}$/.test(mobileNumber)) {
        alert('Mobile number must be a 10-digit integer.');
        return;
    }

    // Display form data (you can process it further)
    alert(`Student Name: ${studentName}\nRoll Number: ${rollNumber}\nGender: ${gender}\nYear: ${year}\nDepartment: ${department}\nSection: ${section}\nMobile Number: ${mobileNumber}\nE-Mail ID: ${email}\nCourse: ${course}\nSubject Code: ${subjectCode}\nCredit: ${credit}\nPincode: ${pincode}`);

    // Reset the form
    document.getElementById('registrationForm').reset();
});
