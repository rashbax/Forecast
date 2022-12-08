$(document).ready(function(){
console.log('works...');
let link = 'http://api.weatherapi.com/v1/current.json?key=b028f1ef785e4792aaf60346220712&q=Samarkand&aqi=no'
fetch(link)
  .then((response) => {
  
    
    return response.json();
    
   
  })
  .then((data) => {
    $('.header-title').text(data.location.name)
    $('.body-gradus').text(Math.round(data.current.temp_c))
    $('.body-type span').text(data.current.condition.text)
    $('.body-type img').attr('src',data.current.condition.icon) 
      
    if (data.current.is_Day = 1 ) {
      $('body').css({"background-image":"url(../images/day.jpg)"})
    } else {
      $('body').css({"background-image":"url(../images/night.jpg)"})
    }
    
      function getCurrenDate() {
        let currentDate = new Date()
    let hh = currentDate.getHours();
    let mm = currentDate.getMinutes();

    (mm < 10) ? mm = '0'+ mm : mm ;
    (hh < 10) ? hh = '0'+ hh : hh;
    
    switch (new Date().getDay()) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
      }
        $('.data').html(day + ', ' + hh + ':' + mm)
      }  

      setInterval(getCurrenDate,1000)
    // $('.data').text(currentDate.)
    let networkStatus = navigator.onLine;
    function checkConnection() {
      if(!networkStatus){
        console.log('something went wrong :(');
        $('.forecastWrapper').css({"display":"none"})
        $('html').css({"max-width":"100%"})
        $('body').text('Something went wrong :(')
        $('body').addClass('error')
      }
    }

    checkConnection();
    console.log(data);
  })
  .catch(error => {
    console.log(error);
    
  })

})