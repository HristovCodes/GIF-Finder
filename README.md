# GIF-Finder
Enter a keyword and a gif about that keyword will appear on the screen like magic.  
The code is very simple, we send a call to the api when we press a button and query it with the value of an imput box. I haven't done much styling due to the simplicity of the project. This is just a simple project to experiment with async/await.  
Source:  
```JavaScript
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
```
