document.getElementById('submission').onclick = function(){

   let passwordCheck = document.querySelector('#password').value;
   let passwordConfirmationCheck = document.querySelector('#confirmPassword').value;
   passwordCheck = passwordCheck.trim();
   passwordConfirmationCheck = passwordConfirmationCheck.trim();

   if(passwordCheck !== "" && passwordConfirmationCheck !== ""){

      if(passwordCheck === passwordConfirmationCheck){
         console.log(passwordCheck);
         console.log(passwordConfirmationCheck);
         document.getElementsByTagName('p')[0].innerHTML = "thank you for fill out the form";

      } else{
         console.log(passwordCheck);
         console.log(passwordConfirmationCheck);
         document.getElementsByTagName('p')[0].innerHTML = "your passwords are not matching each other!";
      }
   } else {
      document.getElementsByTagName('p')[0].innerHTML = "empty password? now a good idea!";
   }

}