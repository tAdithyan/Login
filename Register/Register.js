// let form = document.getElementById('loginForm');
// let errorMessage = document.getElementById("errorMessage");
// errorMessage.style.display = "none";
// export const Users = [];

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let user = document.getElementById("userName").value;
//   let userName= user.toLowerCase()
//   let password = document.getElementById("password").value;
//   let confirmPassword = document.getElementById("confirmPassword").value;

//   if (password ==='' || confirmPassword === '' || userName === ''  ) {
//     errorMessage.style.display = "block";
//     errorMessage.innerText = "Enter Valid Informations";    
//   }
//   else{
//     let isValid = validateForm(password, confirmPassword,userName);
//   if (isValid) {
//     storeDetails(userName, password);
//   }

//   }
  
// });

// function storeDetails(userName, password) {
//   let isPresent = Present(userName);
//   if (isPresent) {
//     errorMessage.style.display = "block";
//     errorMessage.innerText = "User already exists";
//   } else {
//     Users.push(userName);
//     Passwords.push(password);
//     errorMessage.style.display = "none";
//   }
// }

// function Present(userName) {
//   return Users.includes(userName);
// }

