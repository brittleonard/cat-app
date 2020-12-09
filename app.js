$(() => {

   // let arrayIndex = $('#fact').children().attr('text')
   $.ajax({
         url:'https://cat-fact.herokuapp.com/facts/random',
      }).then(
         (data) => {
           //handler for success
           // console.log(data);
           $("#fact").html(data.text);
        })
        
   $('.next').on('click', ()=>{

   $.ajax({
         url:'https://cat-fact.herokuapp.com/facts/random',
      }).then(
         (data) => {
           // console.log(data);
           $("#fact").html(data.text);
        })
   });

   $('.previous').on('click', ()=>{

   $.ajax({
         url:'https://cat-fact.herokuapp.com/facts/random',
      }).then(
         (data) => {
           // console.log(data);
           $("#fact").html(data.text);
        })
   });


  // array of random images
  let imgIndex = 0;
  let numOfImages = $('.carousel-image').children().length -1;
  // console.log(numOfImages);

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
