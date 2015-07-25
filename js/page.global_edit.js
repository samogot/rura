
/* SAVE */
$('.save').click(function(){
    var type = $(this).parent().data('type');
    var returnInfo;
    var info = [];
    switch (type){
        case 'series':
            $.each($('#seriesform .panel > div'), function(indx, el)
                {
                    var elID = $(this).attr('id');
                    info.push(
                            {projectId:$(el).children('#'+elID+"_id").val(),
                             orderNumber:$(el).children('#'+elID+"_order").val(),
                             projectTitle:$(el).find('#'+elID+'_name_input').val(),
                             projectUrl:$(el).find('#'+elID+'_url_input').val()}
                    );
                }
            );
            break;
        case 'activities':
            $.each($('#activitiesform .panel > div'), function(indx, el)
                {
                    var elID = $(this).attr('id');
                    info.push(
                            {activitiesId:$(el).children('#'+elID+"_id").val(),
                             orderNumber:$(el).children('#'+elID+"_order").val(),
                             activitiesTitle:$(el).find('#'+elID+'_name_input').val(),
                             activitiesType:$(el).find('#'+elID+'_type_input').val()}
                    );
                }
            );
            break;
        case 'teams':
            $.each($('#teamsform .panel > div'), function(indx, el)
                {
                    var elID = $(this).attr('id');
                    info.push(
                            {teamsId:$(el).children('#'+elID+"_id").val(),
                             orderNumber:$(el).children('#'+elID+"_order").val(),
                             teamsTitle:$(el).find('#'+elID+'_name_input').val(),
                             teamsUrl:$(el).find('#'+elID+'_url_input').val()}
                    );
                }
            );
            break;
        case 'teammembers':
            $.each($('#teammembersform .panel > div'), function(indx, el)
                {
                    var elID = $(this).attr('id');
                    info.push(
                            {teammemberId:$(el).children('#'+elID+"_id").val(),
                             orderNumber:$(el).children('#'+elID+"_order").val(),
                             teammemberName:$(el).find('#'+elID+'_name_input').val(),
                             teammemberTeam:$(el).find('#'+elID+'_team_input').val(),
                             teammemberActive:$(el).find('#'+elID+'_checkbox_input').attr('checked')}
                    );
                }
            );
            break;
   }
   returnInfo = {'type': type, 'info': info};
   alert(JSON.stringify(returnInfo));
})








$('#seriesselect').sortable({ // включаем jquery-ui sortable
        items: "a:not(:first-child.heading)", // запрещаем передвигать что либо выше первого heading (не может быть картинок вне глав)
        handle:'.move' // задаем маркер перетягивания
    });


    var j= $('#seriesselect .list-group-item').length; // id каждого элемента в пункте "Главы"

    $('#btn-series-add').click(function(){ // обработка кнопки добавления новой серии
        j++;
        var newSeries = '<a data-toggle="collapse" data-parent="#seriesform" href="#series' + j + '" aria-expanded="true" aria-controls="series' + j + '" class="list-group-item" >'+
        '<i class="fa fa-ellipsis-v move"></i>'+
        '<span class="hidden-sm hidden-xs"  id="series' + j + '_name">Серия ' + j + '</span>'+
        '</a>';
        var newPanel = '<div class="panel">'+
        '<div class="row collapse series-data" role="tabpanel" id="series' + j + '">'+
        '<input type="hidden" id="series' + j + '_id">'+
        '<input type="hidden" id="series' + j + '_order">'+
        '<input type="hidden" id="series' + j + '_delete">'+
        '<div class="series-data-main">'+
        '<h3>Настройка серии</h3>'+
        '<div class="form-group">'+
        '<label for="series' + j + '_url">Ссылка</label>'+
        '<input class="form-control url-input" type="text" id="series' + j + '_url_input">'+
        '<label for="series' + j + '_name">Заголовок</label>'+
        '<input class="form-control name-input" type="text" id="series' + j + '_name_input" value="Серия ' + j + '">'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>';
        var newChapterHeading = '<a class="list-group-item heading" data-chapter-id="' + j + '"><span class="move">Серия ' + j + '</span></a>';
        if (!($('#seriesselect').children('.active').attr('href'))) { // если не выбранно ни одного элемента
                    $('#seriesselect').append(newSeries);
                    $('#seriesform').append(newPanel);
                    $('#imageselect').append(newSeriesHeading); // то вставляем новые серии, панели для глав, heading'и в конец
        } else {                                         // иначе
                    $('#seriesselect').children('.active').after(newSeries);
                    $('#seriesform').children('.panel').each(function(){
                        if ($(this).children().hasClass('in')) $(this).after(newPanel); // вставляем после выбранного элемента
                    });
                    var isRightSeries = false; // переменная поиска
                    var imageAfterSeries; // переменная для картинки
                    var id = $('.series-data.in').attr('id'); // id выбранного элемента
                    id = id.substring(7); // берем оттуда только цифру
                    $('#imageselect').children().each(function(){ // в случае с heading мы будеми проверять его на наличие картинок под ним
                        if(($(this).is('.heading[data-series-id]')) && ($(this).attr('data-series-id') == id*1)) {
                            isRightSeries = true; // если это нужный нам heading, то начинаем искать
                        } else if (($(this).attr('data-parent') == '#imageform') && (isRightSeries)) {
                            imageAfterSeries = $(this); // пихаем последнюю картинку что нашли в переменную
                        } else {
                            isRightSeries = false; // перестаем искать, как только натыкаемся на другой heading
                        }
                    });
                    if (imageAfterSeries) { // если мы отыскали какую-либо картинку под выбранной главой
                        imageAfterSeries.after(newSeriesHeading); // то вставляем после нее
                    } else {
                        $('.heading[data-series-id="' + id + '"]').after(newSeriesHeading); // иначе втавляем после выбранного heading
                    }
        }
        $('#series' + j + '_name').css({'margin': '0px 0px 0px 3px'}); // отступ для вновь созданого элемента, дабы он выглядел как все
        var p_order = 0; // поставим для каждой серии порядковый номер
        $(this).children().each(function(){ // проверяем каждый элемент
            $($(this).attr('href')+'_order').val(++p_order); // обновляем порядок
                console.log($(this).attr('href')); // на всякий случай пока оставлю
                console.log(p_order);
        });
        OptionsForSelect = '<option>Весь том</option>'; // Начинаем строить селект
        u = 0;
        $('#seriesselect').children('a').each(function(){
                    u++;
                    OptionsForSelect = OptionsForSelect + '<option id="select_series' + u + '">' + $(this).children('span').text() + ' (' + u + ')</option>';
                });
                $('#updateform').children('.panel').find('.update_series').html(OptionsForSelect);
    });


    $('#seriesform').on('keyup', '.name-input', function(){
        var elem = $(this);  // засовываем этот объект в переменную (на всякий случай)
        var id = $('.series-data.in').attr('id'); // получаем id серии
        $('#' + id + '_name').html(elem.val()); // при помощи предыдущего значения вытворяем с именами, что хотим
        id = id.substring(7);
        $('.heading[data-series-id="' + id + '"]').children().html(elem.val());
        $('#select_series' + id).html(elem.val());
//      console.log($('#select_series' + id));
    });
    $('#seriesselect').on('click', 'a.list-group-item', function() { // баг фикс кнопки удаления (line 1185)
            $('.series-data.in').collapse('hide');
            $($(this).attr('href')).collapse('show');
        });

    $('#seriesform').on('hidden.bs.collapse', '.series-data', function () { // обработка активности кнопки удаления
        $('#btn-series-delete').attr('disabled',true);
    }).on('shown.bs.collapse', '.series-data', function() {
        $('#btn-series-delete').attr('disabled',false);
    });

    $('#btn-series-delete').on('click',function(){ // обработка кнопки удаления для глав
        var id = $('.series-data.in').attr('id');
        var nextSeries = $('#seriesselect [href="#'+id+'"]').next();
        var nextPanel = $(nextSeries.attr('href'));
        $('.series-data.in').collapse('hide');
        $('.series-data.in').parent().hide();
        $('#'+id+'_delete').val(true);
        $('#seriesselect [href="#'+id+'"]').detach();
        id = id.substring(7);
        $('.heading[data-series-id="'+id+'"]').detach();
        if (nextSeries.attr('class') && nextPanel.attr('class')) {
                    nextSeries.addClass('active');
                    nextPanel.collapse('toggle');
        } else {
                    $('#seriesselect').children().last().addClass('active');
                    $($('#seriesselect').children().last().attr('href')).collapse('toggle');
        }
    });
    var ac= $('#activitiesselect .list-group-item').length;
    var team= $('#teamsselect .list-group-item').length;
    var teamm= $('#teammembersselect .list-group-item').length;
    var teams_names = Array();
    $('#teamsselect .list-group-item span').each(function(indx){
        teams_names.push($(this).text());
    })

    function updateTeamsSelect(){
        $(".all_teams").empty();
        $(".all_teams").each(function(indx){
            var self = $(this);
            for (var i=0; i<teams_names.length; i++){
                self.append("<option name='teams"+(i+1)+"'>"+teams_names[i]+"</option>");
            }
        });
    }
    $('.btn_add').click(function(){
        var type = $(this).parent().data('type');
        var num;
        switch (type) {
            case 'activities':
                ac++;
                var newMenu = '<a data-toggle="collapse" data-parent="#activitiesform" href="#activities' + ac + '" aria-expanded="true" aria-controls="activities' + ac + '" class="list-group-item" >'+
                '<span class="hidden-sm hidden-xs"  id="activities' + ac + '_name">Название ' + ac + '</span>'+
                '</a>';
                var newPanel = '<div class="panel">'+
                '<div class="row collapse activities-data" role="tabpanel" id="activities' + ac + '">'+
                '<input type="hidden" id="activities' + ac + '_id">'+
                '<input type="hidden" id="activities' + ac + '_order">'+
                '<input type="hidden" id="activities' + ac + '_delete">'+
                '<div class="activities-data-main">'+
                '<h3>Настройка серии</h3>'+
                '<div class="form-group">'+
                '<label for="activities' + ac + '_name_input">Название</label>' +
                '<input class="form-control name-input" type="text" id="activities' + ac + '_name_input" value="Название ' + ac + '">' +
                '<label for="activities' + ac + '_type_input">Тип</label>' +
                '<select class="form-control" id="activities' + ac + '_type_input">' +
                '<option>Текст</option>' +
                '<option>Изображение</option>' +
                '</select>' +
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>';
                num = ac;
                break;
            case 'teams':
                team++;
                var newMenu = '<a data-toggle="collapse" data-parent="#teamsform" href="#teams'+team+'" aria-expanded="true" aria-controls="teams'+team+'" class="list-group-item" >'+
                '<span class="hidden-sm hidden-xs"  id="teams'+team+'_name">Название '+team+'</span>'+
                '</a>';
                var newPanel = '<div class="panel">'+
                '<div class="row collapse teams-data" role="tabpanel" id="teams'+team+'">'+
                '<input type="hidden" id="teams'+team+'_id">'+
                '<input type="hidden" id="teams'+team+'_order">'+
                '<input type="hidden" id="teams'+team+'_delete">'+
                '<div class="teams-data-main">'+
                '<h3>Настройка серии</h3>'+
                '<div class="form-group">'+
                '<label for="teams'+team+'_name_input">Название</label>'+
                '<input class="form-control name-input" type="text" id="teams'+team+'_name_input" value="Название '+team+'">'+
                '<label for="teams'+team+'_url_input">Ссылка</label>'+
                '<input class="form-control url-input" type="text" id="teams'+team+'_url_input" value="Ссылка на сайт">'+
                '</div>'+
                '</div>'+
                '</div>';
                teams_names.push('Название '+team);
                updateTeamsSelect()
                num = team;
                break;
            case 'teammembers':
                teamm++;
                var newMenu = '<a data-toggle="collapse" data-parent="#teammembersform" href="#teammembers'+teamm+'" aria-expanded="true" aria-controls="teammembers'+teamm+'" class="list-group-item" >' +
                '<span class="hidden-sm hidden-xs"  id="teammembers'+teamm+'_name">Участник '+teamm+'</span>' +
                '</a>';
                var newPanel = '<div class="panel">' +
                '<div class="row collapse teammembers-data" role="tabpanel" id="teammembers'+teamm+'">' +
                '<input type="hidden" id="teammembers'+teamm+'_id">' +
                '<input type="hidden" id="teammembers'+teamm+'_order">' +
                '<input type="hidden" id="teammembers'+teamm+'_delete">' +
                '<div class="teammembers-data-main">' +
                '<h3>Настройка участника</h3>' +
                '<div class="form-group">' +
                '<label for="teammembers'+teamm+'_name_input">Никнейм</label>' +
                '<div id="teammembers'+teamm+'_names_selector">' +
                '<input class="form-control name-input typeahead" type="text" id="teammembers'+teamm+'_name_input" value="Никнейм">' +
                '</div>' +
                '<label for="activities'+teamm+'_team_input">Название команды</label>' +
                '<select class="form-control all_teams" id="teammembers'+teamm+'_team_input">' +
                '<option name="teams1">Команда 1</option>' +
                '</select>' +
                '<input type="checkbox" id="teammembers'+teamm+'_checkbox_input">' +
                '<label for="teammembers'+teamm+'_checkbox_input">Активен</label>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>';
                num = teamm;
                break;
        }
        if (!($('#'+type+'select').children('.active').attr('href'))) { // если не выбранно ни одного элемента
            $('#'+type+'select').append(newMenu);
            $('#'+type+'form').append(newPanel);
        } else {                                         // иначе
            $('#'+type+'select').children('.active').after(newMenu)
            $('#'+type+'form').children('.panel').each(function(){
                if ($(this).children().hasClass('in')) $(this).after(newPanel)// вставляем после выбранного элемента
            });
        }
        $('[href="#'+type+num+'"').click();$('#'+type+num+' .name-input').focus();
        if (type == 'teammembers'){
            updateTeamsSelect()
        }
    });
    $('[role="tablist"').on('keyup', '.name-input', function(){
        var elem = $(this);  // засовываем этот объект в переменную (на всякий случай)
        var type = elem.closest('[role="tablist"').attr('id').slice(0,-4);
        var id1 = $('.'+type+'-data.in').attr('id'); // получаем id серии
        $('#' + id1 + '_name').html(elem.val()); // при помощи предыдущего значения вытворяем с именами, что хотим
        $('[name="'+id1+'"').html(elem.val());
        id = id1.substring(7);
        $('.heading[data-'+type+'-id="' + id + '"]').children().html(elem.val());
        $('#select_'+type+'' + id).html(elem.val());
        if (type == "teams") {
            id = parseInt(id1.substring(5),10);
            teams_names[id-1] = elem.val();
            updateTeamsSelect();
        }
    });
    $('.list-group.select.sortable').on('click', 'a.list-group-item', function() { // баг фикс кнопки удаления (line 1185)
            $('.'+$(this).closest('.list-group.select.sortable').attr('id').slice(0,-6)+'-data.in').collapse('hide');
            $($(this).attr('href')).collapse('show');
            $($(this).attr('href')).find('.name-input').focus();
    });
    $('.btn_delete').on('click',function(){ // обработка кнопки удаления для глав
        var type = $(this).parent().data('type');
        var id = $('.'+type+'-data.in').attr('id');
        var nextActivities = $('#'+type+'select [href="#'+id+'"]').next();
        var nextPanel = $(nextActivities.attr('href'));
        $('.'+type+'-data.in').collapse('hide');
        $('.'+type+'-data.in').parent().hide();
        $('#'+id+'_delete').val(true);
        $('#'+type+'select [href="#'+id+'"]').detach();
        id = id.substring(7);
        $('.heading[data-'+type+'-id="'+id+'"]').detach();
        if (nextActivities.attr('class') && nextPanel.attr('class')) {
                    nextActivities.addClass('active');
                    nextPanel.collapse('toggle');
        } else {
                    $('#'+type+'select').children().last().addClass('active');
                    $($('#'+type+'select').children().last().attr('href')).collapse('toggle');
        }
    });
    $('[role="tablist"]').on('hidden.bs.collapse', '[role="tabpanel"]', function () { // обработка активности кнопки удаления
        $(this).closest('.col-xs-8').parent().find('.btn_delete').attr('disabled',true);

    }).on('shown.bs.collapse', '[role="tabpanel"]', function() {
        $(this).closest('.col-xs-8').parent().find('.btn_delete').attr('disabled',false);
    });


    // ---------- typeahead start ----------
    var substringMatcher = function(strs) {
        return function findMatches(q, cb) {
            var matches, substringRegex;

            // an array that will be populated with substring matches
            matches = [];

            // regex used to determine if a string contains the substring `q`
            substrRegex = new RegExp(q, 'i');

            // iterate through the pool of strings and for any string that
            // contains the substring `q`, add it to the `matches` array
            $.each(strs, function(i, str) {
                if (substrRegex.test(str)) {
                    matches.push(str);
                }
            });

            cb(matches);
        };
    };
    var names = ['Ushwood', 'Danholm', 'Lady Astrel', 'Test'
    ];
    $('#teammembersform').children('.panel').each(function(){
        $('#teammembers' + teamm + '_names_selector .typeahead').typeahead({  // обработчик никнеймов
            hint: true,
            limit: 10,
            highlight: true,
            minLength: 1
        },
        {
            name: 'participant_names',
            source: substringMatcher(names)
        });
    });
    // ---------- typeahead end --------------