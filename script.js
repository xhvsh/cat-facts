fetch(`https://api.thecatapi.com/v1/images/search`)
  .then((response) => response.json())
  .then((data) => {
    document.querySelector('.img').src = data[0].url;
  })
  .catch((err) => console.error(err));

fetch(`https://meowfacts.herokuapp.com/`)
  .then((response) => response.json())
  .then((data) => {
    let link = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
    let text = data.data[0].replace(link, '<a href="$1" target="_blank">$1</a>');
    document.querySelector('.fact p').innerHTML = text;
  })
  .catch((err) => console.error(err));
