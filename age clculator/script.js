const calculateAge = () => {
    let input = document.querySelector(".input-box input");
    let birthdate = new Date(input.value);
    let currDate = new Date();

    let age =  currDate.getFullYear() - birthdate.getFullYear() ;
    let months = birthdate.getMonth() - currDate.getMonth();
    let days = birthdate.getDate() - currDate.getDate();
    if (
      months > 0 ||
      (months === 0 && currDate.getDate() < birthdate.getDate())
    ) {
      age--;
    }
    let result = document.querySelector("#output");
    if ( days <0){
        days *= -1;
    }
    if (months < 0) {
      months *= -1;
    }
    result.innerHTML = `your age is ${age} years and ${months} months  and ${days} days`;
  };