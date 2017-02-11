console.log(JSON.parse(localStorage.getItem('requesterDetail')));

$(function () {
  const requesterData = JSON.parse(localStorage.getItem('requesterDetail'));

  console.log(requesterData.user.image);
  $('#requesterImg').attr('src', requesterData.user.image);
  $('#requesterName').text(requesterData.user.name);
  $('#callHelpText').text('is calling for your help');
});
