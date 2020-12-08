$(() => {

   $.ajax({
         url:'https://cat-fact.herokuapp.com/facts'
      }).then(
         (data) => {
           //handler for success
           console.log(data);
           $("#facts").html(data.all);
        })
   $.ajax({ //want to make a random cat image but might just need to have the images individually 
      url:'https://api.thecatapi.com/v1/images/search'
   }).then(
      (image) => {
         $('#images').html(image.all);
      })

  // array of random images
  const images = [
    "https://source.unsplash.com/random/200x200?sig=1",
    "https://source.unsplash.com/random/200x200?sig=2",
    "https://source.unsplash.com/random/200x200?sig=3",
    "https://source.unsplash.com/random/200x200?sig=4",
    "https://source.unsplash.com/random/200x200?sig=5",
    "https://source.unsplash.com/random/200x200?sig=6",
  ];

  // create our 'random image titled div' and append it to the body
  const $randomImgDiv = $("<div class='random-image-div'>")
    .text("Add Random Image")
    .appendTo("body");

  //create our 'add image' function
  const addImage = () => {
    let i = 0;
    let $img = $(`<img src="${images[i]}" alt="someImage">`);
    //If there are items in the images array, add an element to the DOM & remove position 0
    if (images.length !== 0) {
      $img.appendTo("body");
      images.shift();
    }
  };
  // create an event handler, on click execute the addImage function
  $randomImgDiv.on("click", addImage);
  //jQuery onReady ends

});
