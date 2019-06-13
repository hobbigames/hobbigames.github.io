if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}
var count = 0;
var ToggleMenuButton = function() {
  count++;
  console.log( getBootstrapDeviceSize() );
  if ( getBootstrapDeviceSize() =="sm" || getBootstrapDeviceSize() =="xs" || getBootstrapDeviceSize() =="md" ) {
    console.log("collapse" + count);
    $(".navbar").removeClass("collapsed_navbar");


  } else {
    console.log("not collapse" + count);
    if (!$(".navbar").hasClass("collapsed_navbar"))
      $(".navbar").addClass("collapsed_navbar");
  }
}

function getBootstrapDeviceSize() {
  return $('#users-device-size').find('div:visible').first().attr('id');
}

ToggleMenuButton();

$(window).resize(function() {
  ToggleMenuButton();
});
