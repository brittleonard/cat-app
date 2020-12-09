$(() => {

   arrayIndex = $(event.target).attr('text')



   $.ajax({
         url:'https://cat-fact.herokuapp.com/facts' + arrayIndex,
      }).then(
         (data) => {
           //handler for success
           console.log(data);
           $("#fact").html(data.text);
        })

  // array of random images
  let imgIndex = 0;
  let numOfImages = $('.carousel-image').children().length -1;
  console.log(numOfImages);

  $('.next').on('click', () => {

    $('.carousel-image').children().eq(imgIndex).css('display', 'none');
    if(imgIndex < numOfImages) {
      imgIndex++;
    } else {
      imgIndex = 0;
    }
    $('.carousel-image').children().eq(imgIndex).css('display', 'block');
  });

$('.previous').on('click', () => {
  $('.carousel-image').children().eq(imgIndex).css('display', 'none');
  if(imgIndex > 0) {
    imgIndex--;
  } else {
    imgIndex = numOfImages;
  }
  $('.carousel-image').children().eq(imgIndex).css('display', 'block');
});


});



//
// const settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://api.thecatapi.com/v1/images/search",
//     "method": "GET",
//     "headers": {
//       "x-api-key": "abd3fb7e-101b-470d-b095-d8b0c8939b9d",
//     }
// //   }
//
// "",
// "https://cdn2.thecatapi.com/images/b6r.jpg",
// "https://cdn2.thecatapi.com/images/dtp.jpg",
// "https://cdn2.thecatapi.com/images/a4c.jpg",
// "https://cdn2.thecatapi.com/images/b6c.jpg",
// "https://cdn2.thecatapi.com/images/d3t.jpg",
