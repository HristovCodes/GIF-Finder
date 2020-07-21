async function getImage() {
  //Receive an image from the api as a response
  const response = await fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=it8oluVukn1p4sFSZjWJL1YdS2ThmjD7&s=" +
      document.getElementById("selection").value,
    { mode: "cors" }
  );

  //Get the data in a json format and extract the image url from it
  const giphyData = await response.json();
  document.getElementById("img").src = giphyData.data.images.original.url;
}

//Execute getImage when we click on the submit button
document.getElementById("new").addEventListener("click", getImage);
