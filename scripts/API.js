
const ID = document.getElementById('cityAPI');

fetch("https://ipinfo.io/json?token=67021aebf9cb34").then(
  (response) => response.json()
).then(
  (jsonResponse) => ID.innerHTML=jsonResponse.city
)



const ID1 = document.getElementById('cityAPI1');

fetch("https://ipinfo.io/json?token=67021aebf9cb34").then(
  (response) => response.json()
).then(
  (jsonResponse) => ID1.innerHTML=jsonResponse.city
)



const ID2 = document.getElementById('cityAPI2');

fetch("https://ipinfo.io/json?token=67021aebf9cb34").then(
  (response) => response.json()
).then(
  (jsonResponse) => ID2.innerHTML=jsonResponse.city
)


const ID3 = document.getElementById('cityAPI3');

fetch("https://ipinfo.io/json?token=67021aebf9cb34").then(
  (response) => response.json()
).then(
  (jsonResponse) => ID3.innerHTML=jsonResponse.city
)
