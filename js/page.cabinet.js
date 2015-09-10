$(document).on("click", ".settingsPass", function(e) {
    $('.bootbox').modal('hide');
    $('body').addClass('modal-open');
    bootbox.dialog({
        onEscape: true,
        title: "Сменить пароль",
        message: '<form id="settingsPass" class="form-inline" align="center">' +
            '  <div class="form-group">' +
            '    <label for="passNow">Введите текущий пароль&nbsp;&nbsp;</label>' +
            '    <input type="password" class="form-control" name="passNow" id="passNow" value="">' +
            '  </div>' +
            '  <div class="form-group">' +
            '    <label for="passNew">Введите новый пароль&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>' +
            '    <input type="password" class="form-control" name="passNew" id="passNew" value="">' +
            '  </div>' +
            '  <div class="form-group">' +
            '    <label for="passNewRepeat">Повторите новый пароль&nbsp;</label>' +
            '    <input type="password" class="form-control" name="passNewRepeat" id="passNewRepeat" value="">' +
            '  </div>' +
            '</form>',
        buttons: {
          cancel: {
            label: "Отменить",
            className: "btn-default",
            callback: function() {
              setTimeout(function(){$('body').css('padding-right','0px');},400);
            }
          },
          success: {
            label: "Сохранить",
            className: "btn-success",
            callback: function() {
              console.log('GG!')
              setTimeout(function(){$('body').css('padding-right','0px');},400);
            }
          }
        }
      });
});
$(document).on("click", ".settingsEmail", function(e) {
    $('.bootbox').modal('hide');
    $('body').addClass('modal-open');
    bootbox.dialog({
        onEscape: true,
        title: "Сменить Email",
        message: '<form id="settingsEmail" class="form-inline" align="center">' +
            '  <div class="form-group">' +
            '    <label for="passNow">Введите текущий пароль&nbsp;&nbsp;</label>' +
            '    <input type="password" class="form-control" name="passNow" id="passNow" value="">' +
            '  </div>' +
            '  <div class="form-group">' +
            '    <label for="passNew">Введите новый Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>' +
            '    <input type="password" class="form-control" name="passNew" id="passNew" value="">' +
            '  </div>' +
            '  <div class="form-group">' +
            '    <label for="passNewRepeat">Повторите новый Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>' +
            '    <input type="password" class="form-control" name="passNewRepeat" id="passNewRepeat" value="">' +
            '  </div>' +
            '</form>',
        buttons: {
          cancel: {
            label: "Отменить",
            className: "btn-default",
            callback: function() {
              setTimeout(function(){$('body').css('padding-right','0px');},400);
            }
          },
          success: {
            label: "Сохранить",
            className: "btn-success",
            callback: function() {
              console.log('GG!')
              setTimeout(function(){$('body').css('padding-right','0px');},400);
            }
          }
        }
      });
});
$(document).on("click", ".settings", function(e) {
    bootbox.dialog({
        onEscape: true,
        title: "Настройки сайта",
        message: '<form id="settingsForm" class="form-inline">' +
            '  <div class="form-group">' +
            '    <label for="downloadType">Предпочитаемый формат скачивания</label>' +
            '    <select class="form-control" name="downloadType" id="downloadType">' +
            '       <option value="fb2">fb2</option>' +
            '       <option value="docx">docx</option>' +
            '       <option value="epub">epub</option>' +
            '    </select>' +
            '  </div>' +
            '  <div class="form-group">' +
            '    <label for="downloadType">Приемущественно навигация по</label>' +
            '    <select class="form-control" name="downloadType" id="downloadType">' +
            '       <option value="chapter">Главам</option>' +
            '       <option value="subchapter">Подлавам</option>' +
            '    </select>' +
            '  </div>' +
            '  <hr/>' +
            '  <div class="form-group">' +
            '     <input type="checkbox" checked name="downloadImage" id="downloadImage" value="yes">' +
            '     <label for="downloadImage">Скачивать с иллюстрациями</label>' +
            '  </div>' +
            '  <br/>' +
            '  <div class="form-group">' +
            '     <input type="checkbox" name="adult18" id="adult18" value="yes">' +
            '     <label for="adult18">Отображать материалы для взрослых (18+)</label>' +
            '  </div>' +
            '  <br/>' +
            '  <div class="form-group">' +
            '     <input type="checkbox" checked name="blackImage" id="blackImage" value="yes">' +  
            '     <label for="downloadImage">Отображать цветные иллюстрации вместо чернобелых при наличии</label>' +
            '  </div>' +
            '  <hr/>' +
            '  <div class="form-group">' +
            '    <label for="irastSize">Размер ираст в конвентере</label>' +
            '    <input type="text" class="form-control" name="irastSize" id="irastSize" value="1080" size="4"> px' +
            '  </div>' +
            '</form>' +  
            '<hr/>' + 
            '<center>' +   
            '<button type="button" class="btn btn-default btn-sm settingsPass"><i class="fa fa-cog"></i> Сменить пароль</button>' +
            '<button type="button" class="btn btn-default btn-sm settingsEmail"><i class="fa fa-cog"></i> Сменить Email</button>' +
            '</center>',
        buttons: {
          cancel: {
            label: "Отменить",
            className: "btn-default",
            callback: function() {
              setTimeout(function(){$('body').css('padding-right','0px');},400);
            }
          },
          success: {
            label: "Сохранить",
            className: "btn-success",
            callback: function() {
              console.log('GG!');
              setTimeout(function(){$('body').css('padding-right','0px');},400);
            }
          }
        }
      });
});

