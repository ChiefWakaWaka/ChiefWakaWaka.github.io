$(document).ready(function(){
  $('.welcome').css('display', 'none');
  $('.titleText').css('display', 'none');
  $('.buttons').css('display', 'none');
  $('.projectsText').css('display', 'none');
  $('.projectsList').css('display', 'none');
  $('.backButton').css('display', 'none');
  $('.swimmingButtons').css('display', 'none');
  $('.swimmingText').css('display', 'none');
  $('.swimmingTimes').css('display', 'none');
  $('.welcome').fadeIn(1000);
  $('.welcome').delay(1000).fadeOut(1000);
  $('.titleText').delay(3000).fadeIn(1000);
  $('.buttons').delay(3000).fadeIn(1000);
});

function projectClick() {
  $('.titleText').fadeOut(1000);
  $('.buttons').fadeOut(1000);
  $('.projectsText').delay(1000).fadeIn(1000);
  $('.projectsList').delay(1000).fadeIn(1000);
  $('.backButton').delay(1000).fadeIn(1000);
};

function swimmingClick() {
  $('.titleText').fadeOut(1000);
  $('.buttons').fadeOut(1000);
  $('.swimmingText').delay(1000).fadeIn(1000);
  $('.swimmingTimes').delay(1000).fadeIn(1000);
  $('.swimmingButtons').delay(1000).fadeIn(1000);
  $('.backButton').delay(1000).fadeIn(1000);
}

function swimmingTimesClick() {
  $('.swimmingTimes').delay(1000).fadeIn(1000);
}

function returnHome() {
  $('.projectsText').fadeOut(1000);
  $('.projectsList').fadeOut(1000);
  $('.swimmingButtons').fadeOut(1000);
  $('.swimmingText').fadeOut(1000);
  $('.swimmingTimes').fadeOut(1000);
  $('.backButton').fadeOut(1000);
  $('.titleText').delay(1000).fadeIn(1000);
  $('.buttons').delay(1000).fadeIn(1000);
};
