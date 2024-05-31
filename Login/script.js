const headingMessage = document.getElementById("login");
const errorMessage = document.getElementById("errorMessage");
const userList = [];

// Registration
const registerForm = document.getElementById("registerForm");
const registerError = document.getElementById("registerError"); // Moved declaration here
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userName = document.getElementById("registerUserName").value.trim().toLowerCase();
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("registerConfirmPassword").value;
    
    const isValid = validateForm(password, confirmPassword, userName);
    if (isValid) {
      const userDetails = { userName, password };
      userList.push(userDetails);
      
      registerError.style.display = "block";
      registerError.innerText = "User Created !!!!";
      
      document.getElementById("registerUserName").value = "";
      document.getElementById("registerPassword").value = "";
      document.getElementById("registerConfirmPassword").value = "";
      window.location.href="../Login/index.html"
    }
  });
}

function validateForm(password, confirmPassword, userName) {
  if (userName === "") {
    registerError.style.display = "block";
    registerError.innerText = "Username should be entered";
    return false;
  } else if (userExists(userName)) {
    registerError.style.display = "block";
    registerError.innerText = "Username exists!!!";
    return false;
  } else if (password === "" || confirmPassword === "") {
    registerError.style.display = "block";
    registerError.innerText = "Enter valid information";
    return false;
  } else if (password !== confirmPassword) {
    registerError.style.display = "block";
    registerError.innerText = "Passwords do not match";
    return false;
  } else if (password.length < 8) {
    registerError.style.display = "block";
    registerError.innerText = "Password should be atleast 8 characters long";
    return false;
  } else {
    registerError.style.display = "none";
    return true;
  }
}

function userExists(userName) {
  return userList.filter(user => user.userName === userName).length > 0;
}




// Login
const welcomePage = document.getElementById('welcomePage');
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userName = document.getElementById("loginUserName").value.trim().toLowerCase();
    const password = document.getElementById("loginPassword").value;
    
    const isValid = validateLoginForm(userName, password);
    if (isValid) {
      login(userName, password);
    }
  });
}

function login(userName, password) {
const isUser = userList.filter(user => user.userName === userName && user.password === password)
  if (isUser) {
    errorMessage.style.display = "none";
    welcomePage.innerText = `WELCOME ${userName}`;

    window.location.href = "../Welcomepage.html"
  } else {
    errorMessage.style.display = "block";
    errorMessage.innerText = "Invalid username or password";
  }
}

function validateLoginForm(userName, password) {
  if (userName === "" || password === "") {
    errorMessage.style.display = "block";
    errorMessage.innerText = "Please enter username and password";
    return false;
  } else {
    errorMessage.style.display = "none";
    return true;
  }
}
