
/*
$(function(){
    $('.divHeader').each(function(indx){
        var self = $(this);
        self.affix();
    });
});
*/

$(function(){
    $("table.table").colResizable({
        fixed:false,
        liveDrag:false,
        postbackSafe:true,
        headerOnly:false,
        overflow:true,
        onResize:function(){ $(window).resize(); }
    });
});

    $('.list-group.select.sortable').sortable({ // включаем jquery-ui sortable
        items: "a:not(:first-child.heading)", // запрещаем передвигать что либо выше первого heading (не может быть картинок вне глав)
        handle:'.move' // задаем маркер перетягивания
    });
    var volumelength = $('.volumetable tr').length-1;
    var sublength = $('.subseriestable a.list-group-item').length;
    $(function(){
        checkCheck()
    });
    function checkCheck(){
        $('[name="LABEL"]').each(function(i){
            $('.volumetable table td:nth-child('+(i+2)+'),.volumetable table th:nth-child('+(i+1)+')').toggle($(this).prop('checked'));
        });
        $(window).resize();
    }
    $('#btn-sub-add').click(function(){
        sublength++;
        var newSub = '<a data-toggle="collapse" data-parent="#subseries" data-type="subseries_n'+sublength+'" href="#sub'+sublength+'" aria-expanded="true" aria-controls="sub'+sublength+'" class="list-group-item FormAjax FormUpdate" >';
        newSub +=  '<i class="fa fa-ellipsis-v move"></i>'
        newSub +=  '<input type="text" class="form-control" placeholder="<пусто>" id="'+sublength+'sub_input" name="external_url">'
        newSub +=  '</a>';
        if($('.subseriestable a.list-group-item').hasClass('active')){
            $(newSub).insertAfter($(".subseriestable a.list-group-item.active"));
        } else {
            $(newSub).appendTo($("#subseries"));
        }
            $('[href="#sub'+sublength+'"]').click();
            $('#'+sublength+'sub_input').focus();
    });
    $('#btn-sub-delete').click(function(){
        if($('.subseriestable a.list-group-item').hasClass('active')){
                    var type = $(this).data('type');
                    var Needdelete = $('[data-parent="#'+type+'"].info')
                    AdminOnDelete(Needdelete.data('type'));
            $thissub = $('.subseriestable a.list-group-item.active');
            if($thissub.index() == $('.subseriestable a.list-group-item:last').index()){
                $nextsub = $thissub.prev('a.list-group-item');
            } else {
                $nextsub = $thissub.next('a.list-group-item');
            }
            $thissub.remove();
            $nextsub.addClass('active');
            $nextsub.children('input').focus();
            sublength--
        }
        else {
            alert('Сначала выделите подсерию!')
        }
    });

    $('.subseriestable').on('click','a.list-group-item',function(){
        $('.subseriestable a.list-group-item').removeClass('info');
        $(this).addClass('info');
    });
    $('.dropdown-menu.noclose li').click(function(){checkCheck()});
    $('.volumetable').on('click','tr',function(){
        $('.volumetable tr').removeClass('info');
        $(this).addClass('info');
    });
    $('#btn-update-clone').click(function(){
        if($('.volumetable tr').hasClass('info')){
            volumelength++
            $('.volumetable tr').removeClass('clonned');
            $('.volumetable tr.info')
                .clone()
                .addClass('clonned')
                .appendTo('.volumetable table')
                .click();
            $('.volumetable tr.clonned .form-control:first').val(volumelength);
            $('.volumetable tr.clonned .form-control').each(function(){
                $(this).attr('id',volumelength+$(this).attr('id').substr(1));
            });
            $("#"+volumelength+"url").focus().val('');
            checkCheck()

        }
        else {
            alert('Сначала выделите главу!')
        }
    });
    $('#btn-update-delete').click(function(){
        if($('.volumetable tr').hasClass('info')){
                    var type = $(this).data('type');
                    var Needdelete = $('[data-parent="#'+type+'"].info')
                    AdminOnDelete(Needdelete.data('type'));
            $thisvol = $('.volumetable tr.info');
            if($thisvol.index() == $('.volumetable tr:last').index()){
                $nextvol = $thisvol.prev();
            } else {
                $nextvol = $thisvol.next();
            }
            volumelength--
            $thisvol.remove();
            $nextvol.addClass('info');
        }
        else {
            alert('Сначала выделите главу!')
        }
    });


    $('#btn-update-add').click(function(){
        volumelength++;
        var newVolume = '';
        newVolume +=  '<tr class="FormAjax FormUpdate" data-parent="#volume" data-type="volume_n'+volumelength+'">';
        newVolume +=  '<td><input type="text" class="form-control" id="'+volumelength+'number" name="number" value="'+volumelength+'"></td>';
        newVolume +=  '<td><input type="text" class="form-control" id="'+volumelength+'url" name="url" placeholder="<пусто>"></td>';
        newVolume +=  '<td><input type="text" class="form-control" id="'+volumelength+'name_file" name="name_file" placeholder="<пусто>"></td>';
        newVolume +=  '<td><input type="text" class="form-control" id="'+volumelength+'name_title" name="name_title" placeholder="<пусто>"></td>';
        newVolume +=  '<td><input type="text" class="form-control" id="'+volumelength+'name_jp" name="name_jp" placeholder="<пусто>"></td>';
        newVolume +=  '<td><input type="text" class="form-control" id="'+volumelength+'name_en" name="name_en" placeholder="<пусто>"></td>';
        newVolume +=  '<td><input type="text" class="form-control" id="'+volumelength+'name_ru" name="name_ru" placeholder="<пусто>"></td>';
        newVolume +=  '<td><input type="text" class="form-control" id="'+volumelength+'name_romaji" name="name_romaji" placeholder="<пусто>"></td>';
        newVolume +=  '<td><input type="text" class="form-control" id="'+volumelength+'name_short" name="name_short" placeholder="<пусто>"></td>';
        newVolume +=  '<td><select class="form-control" id="'+volumelength+'project_id" name="project_id" placeholder="<пусто>">';
        newVolume +=  '<option>Sword Art Online</option>';
        newVolume +=  '<option>2</option>';
        newVolume +=  '<option>3</option>';
        newVolume +=  '<option>4</option>';
        newVolume +=  '<option>5</option>';
        newVolume +=  '</select></td>';
        newVolume +=  '<td><input type="text" class="form-control" id="'+volumelength+'sequence_number" name="sequence_number" placeholder="<пусто>"></td>';
        newVolume +=  '<td><input class="form-control typeahead author-name" type="text" id="'+volumelength+'author" name="author"  placeholder="<пусто>"></td>';
        newVolume +=  '<td><input class="form-control typeahead illustrator-name" type="text" id="'+volumelength+'illustrator" name="illustrator"  placeholder="<пусто>"></td>';
        newVolume +=  '<td><input type="text" class="form-control" id="'+volumelength+'release_date" name="release_date" placeholder="<пусто>"></td>';
        newVolume +=  '<td><input type="text" class="form-control" id="'+volumelength+'ISBN" name="ISBN"  placeholder="<пусто>"></td>';
        newVolume +=  '<td><select class="form-control" id="'+volumelength+'volume_type" name="volume_type" >';
        newVolume +=  '<option>Ранобэ</option>';
        newVolume +=  '<option>Побочные истории</option>';
        newVolume +=  '<option>Авторские додзинси</option>';
        newVolume +=  '<option>Другое</option>';
        newVolume +=  '</select>';
        newVolume +=  '</td>';
        newVolume +=  '<td><select class="form-control" id="'+volumelength+'volume_status" name="volume_status">';
        newVolume +=  '<option value="1">Скрыт</option>';
        newVolume +=  '<optgroup label="Сторонний перевод">';
        newVolume +=  '<option value="3">Заброшенный сторонний перевод</option>';
        newVolume +=  '<option value="4">Активный сторонний перевод</option>';
        newVolume +=  '<option value="5">Завершенный сторонний перевод</option>';
        newVolume +=  '</optgroup>';
        newVolume +=  '<optgroup label="Не в работе">';
        newVolume +=  '<option value="6">Отсутствует анлейт</option>';
        newVolume +=  '<option value="7">Заморожен</option>';
        newVolume +=  '<option value="8">Приостановлен</option>';
        newVolume +=  '<option value="9">Очередь перевода</option>';
        newVolume +=  '</optgroup>';
        newVolume +=  '<optgroup label="В работе">';
        newVolume +=  '<option value="10">Перевод в онгоинге</option>';
        newVolume +=  '<option value="11">Перевод</option>';
        newVolume +=  '<option value="12">Редактура</option>';
        newVolume +=  '</optgroup>';
        newVolume +=  '<optgroup label="Опубликован">';
        newVolume +=  '<option value="13">Не оформлен</option>';
        newVolume +=  '<option value="14">Завершен</option>';
        newVolume +=  '</optgroup>';
        newVolume +=  '</select></td>';
        newVolume +=  '<td><input type="text" class="form-control" id="'+volumelength+'external_url" name="external_url"  placeholder="<пусто>"></td>';
        newVolume +=  '<td><textarea class="form-control" id="'+volumelength+'annotation" name="annotation" rows="3" style="width: 100%;"  placeholder="<пусто>"></textarea></td>';
        newVolume +=  '<td><input type="checkbox" class="form-control" id="'+volumelength+'adult" name="adult"  placeholder="<пусто>"></td>';
        newVolume +=  '</tr>';
        $(newVolume).appendTo($(".volumetable table"));
        $("#"+volumelength+"url").focus();
        $('.volumetable tr').removeClass('info');
        $("#"+volumelength+"url").parent().parent().addClass('info');
        checkCheck();
    });






    $('#banner').fileupload({
        url: "/rura/loading_files.php",
        dataType: 'json',
        formData: {
            id: $('#banner_id').val()
        },
        acceptFileTypes: /(\.|\/)(jpe?g|png|jpg)$/i,
        previewMaxHeight: 73,
        previewMaxWidth: 220,
        maxNumberOfFiles: 1,
    }).on('fileuploadadd', function (e, data) {
        $('#imageform .progress').collapse('show');
        $('#banner').attr('src','loading.gif');
        data.submit();
    }).on('fileuploadprocessalways', function (e, data) {
        var index = data.index,
            file = data.files[index];
        if (file.error) // выводим сообщение об ошибке обработки на клиенте
            $('.progress').after('<div class="alert alert-danger alert-dismissible fade in" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Ошибка!</strong> '+file.error+'</div>');
    }).on('fileuploadprogressall', function (e, data) { // обновляем прогресбар
        var progress = parseInt(data.loaded / data.total * 100, 10);
        $('.progress-bar').css('width', progress + '%');
        $('.progress-bar').attr('aria-valuenow', progress);
        $('.progress-bar span').text(progress + '% Complete');
    }).on('fileuploaddone', function (e, data) { // при завершении загрузки заменяем превюшку на img тег с адресом уже загруженной ирасты
        $('.progress').collapse('hide');
        //console.log(data) // с сервера в json`е должны прийти поля url и id
        $.each(data.result.files, function (index, file) {
            if (file.url) {
                $('#banner_id').val(file.id);
                $('#banner').attr('src',file.url);
            } else if (file.error) // выводим ошибку возвращенную с сервера
                $('.progress').after('<div class="alert alert-danger alert-dismissible fade in" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Ошибка!</strong> '+file.error+'</div>');
        });
    }).on('fileuploadfail', function (e, data) { // выводим ошибку аякса
        $('.progress').after('<div class="alert alert-danger alert-dismissible fade in" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Ошибка!</strong> Загрузка не удалась</div>');
    });


    /*     Старт редактирование подсерия       */
var SubPositions = {};
$('body').on('change','#subseries input',
    function(){
        $.map($('#subseries').find('a'), function(el) {
            SubPositions[$(el).index()+1]= $(el).children('input').val();
        });
        alert(JSON.stringify(SubPositions));
        return false;
    }
)
$('#subseries').sortable({
    stop: function(e, ui) {
        $.map($(this).find('a'), function(el) {
            SubPositions[$(el).index()+1]= $(el).children('input').val();
        });
        alert(JSON.stringify(SubPositions));
    }
});

    /*     Старт редактирование подсерия       */


//афикс заголовков блоков
$(function(){
    $('.admin-header').each(function() {
        $(this).affix({ offset: {
            top: $(this).offset().top, 
            bottom: $(document).height() - $(this).closest('form').offset().top - $(this).closest('form').outerHeight() + $(this).outerHeight() + 75
        }});
    });
});


//афикс скролбара
function updateScrollbar()
{
    $('#scrollbar').width($('#scrollable').width());
    $('#innerScrollbar').width($('#scrollable').children('table').width());
    var x = $('#scrollbar').get(0).scrollLeft
    $('#scrollable').get(0).scrollLeft = x;
    $('.volumetable .header-copy').css({
        'margin-left': -x-1, 
        clip: 'rect(0, ' + ($('#scrollable').width() + x) + 'px, auto, ' + x + 'px)'
    });
}


$(updateScrollbar);
$('#scrollbar').scroll(updateScrollbar);
$(window).resize(updateScrollbar);

$(function(){
    $('#scrollbar').affix({
        offset: {
            top: function(){
                return $('#scrollable').offset().top-$(window).height()+$('#scrollbar').height()
            },
            bottom: function(){
                return $(document).height() - $('#scrollable').offset().top-$('#scrollable').outerHeight()//+$(window).height()-$('#scrollbar').height()
            }
        }
    });
});



//афикс шапки таблицы
var resizeHead = function(o)
{
  var ww = [];
  o.find('thead.header > tr:first > th').each(function (i, h){
    o.find('thead.header-copy > tr > th:eq('+i+')').css({
      width: $(h).outerWidth(), 
      display: $(h).css('display')
    });
  });
  o.find('thead.header-copy').css('width', o.outerWidth());
}

$(function(){
    $('.volumetable .header').clone().removeClass('header').addClass('header-copy').insertAfter('.volumetable .header');
    resizeHead($('.volumetable table'));
    $(window).resize(function(){ resizeHead($('.volumetable table')); });
    $('.volumetable .header-copy').affix({ offset: {
        top: $('.admin-header:eq(1)').offset().top, 
        bottom: $(document).height() - $('.admin-block:eq(1)').offset().top - $('.admin-block:eq(1)').outerHeight() + $('.admin-header:eq(1)').outerHeight() + 50
    }});
});

$(function() { $(window).resize(); });