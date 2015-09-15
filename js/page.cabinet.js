$('.settingsPass, .settingsEmail').click(function(){
  $('#settingsModal').modal('hide');
  $('body').addClass('modal-open')
})
$('#settingsModal, #settingsPassModal, #settingsEmailModal').on('hidden.bs.modal', function (e) {
  $('body').css('padding-right','0')
})