// control the auto refresh rate -> 1000 = 1 second
var refreshRate = 10000; // 10 seconds

// Automatically reload the browser
setInterval(function() {
   window.location.reload();
}, refreshRate);


// Menu trigger
$.ajax({
  url : 'https://api.unsplash.com/photos/random?collections=1318081&w=1920&h=1080&client_id=542a52862af1d927653c8cea3899842958fcb6a9256496b58b7ac0be3eb3220b',
  type : 'GET',
  dataType : 'json',
  success : function(data) {
    console.log(data);
        
    // Get photo url
    var imageurl = data.urls.custom;
    // Get photographer name
    var photog = data.user.name;
    // Get link to photographer portfolio
    var photogurl = data.user.links.html;
    
    
    // Hide the images on load
    $('.image-container').hide();

    // Get a random image from Unsplash and fade it in on load
 
      // serves a random image from this collection on Unsplash.com
      'background-image' : 'url(' + imgl + ')'
    
    
    // Credit photographer in main menu
    $('.photog-credit').html('Photog // <a href="' + photogurl + '?utm_source=explorethegreatcitiesoftheworld&utm_medium=referral&utm_campaign=api-credit" target="_blank">' + photog + '</a>');
    }
    
});


// $('.grayscale-yes').on('click', function() {
//   $(this).addClass('hide');
//   $('.grayscale-no').removeClass('hide');
//   $('.image-container').addClass('black-white');
// });

// $('.grayscale-no').on('click', function() {
//   $(this).addClass('hide');
//   $('.grayscale-yes').removeClass('hide');
//   $('.image-container').removeClass('black-white');
// });
