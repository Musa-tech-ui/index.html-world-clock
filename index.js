 function updateTime(event){
 let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("MMMM	Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  
  let maléElement = document.querySelector("#malé");
  if (maléElement) {
    let maléDateElement = maléElement.querySelector(".date");
    let maléTimeElement = maléElement.querySelector(".time");
    let maléTime = moment().tz("Asia/Malé");

    maléDateElement.innerHTML = maléTime.format("MMMM	Do YYYY");
    maléTimeElement.innerHTML = maléTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
  updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);