$('.open').click(function(){
    $('nav').css('left', '0')
})
$('.fa-xmark').click(function(){
    $('nav').css('left', '-240px')
})



// $('ul li a').click(function () {

//     let id = $(this).attr('href');
//     let offset = $(id).offset();
//     $('body','html').animate({screenTop: offset}, 2000);

// })



$('.head').click(function() {
    $(this).next('.body').slideToggle();
    
    $('.body').not($(this).next('.body')).slideUp(500);
   
  });




  $('textarea').keyup(function () { 
    

let myLen = $(this).val().length;
$('.count').text(


100 - myLen <= 0 ? 'your avali charcter finished' : 100 - myLen


)

  });




















  
  window.onload = function() {
   
    countDownToTime("10 october 2023 9:56:00");
  }

  function countDownToTime(countTo) {
  
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }
