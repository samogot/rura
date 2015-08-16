/*классы:
    list-group - бутстрапны класс
    select - мой класс для обозначения list-group`ов админки с возможностью выбора
    sortable - мой класс для обозначения тех .list-group.select в которых пользователь может перетягивать елементы
    move - дочерный елемент в елементах sortable - маркер за который разрешается перетягивать
    heading - такие елементы .list-group.select которые не могут быть выбраны, но могут быть перетянуты. по сути используется только для глав в редактировании изображений - в других модулях потребности в них нет
    */
$('.list-group.select.sortable').sortable({ // включаем jquery-ui sortable
    items: "a:not(:first-child.heading)", // запрещаем передвигать что либо выше первого heading (не может быть картинок вне глав)
    handle: '.move' // задаем маркер перетягивания
});



$(".date-input").datetimepicker({
    format: "YYYY-MM-DD HH-mm",
    locale: 'ru',
    useCurrent: 'hour'
}); // инициализация дейтпикера

/* ------------------------------------------ PARTISIPANTS START ------------------------------------------ */

$('#participantselect').on("sortupdate", function() { // для списка участников перевода задаем обработчик перетягивания
    var p_order = 0; // поставим для каждого участника порядковый номер
    $(this).children().each(function() { // проверяем каждый элемент
        $($(this).attr('href') + '_order').val(++p_order); // обновляем порядок
    });
});

var i = 0; // id каждого элемента в пункте участников перевода

$('#btn-participant-add').click(function() { // обработка кнопки добавления новых участников
    i++;
    var newParticipant = '<a data-toggle="collapse" data-parent="#participantform" href="#participant' + i + '" aria-expanded="true" aria-controls="participant' + i + '" class="list-group-item" >' + '<i class="fa fa-ellipsis-v move"></i>' + '<span class="hidden-sm hidden-xs"  id="participant' + i + '_name">New</span> - <span class="hidden-sm hidden-xs" id="participant' + i + '_role">Role</span>' + '</a>';
    var newPanel = '<div class="panel">' +
        '<div class="row collapse participant-data" role="tabpanel" id="participant' + i + '">' +
        '<input type="hidden" id="participant' + i + '_id">' +
        '<input type="hidden" id="participant' + i + '_order">' +
        '<input type="hidden" id="participant' + i + '_delete">' +
        '<div class="participant-data-main">' +
        '<h3>Настройка участника</h3>' +
        '<div class="form-group">' +
        '<label for="participant' + i + '_name">Участник</label>' +
        '<div id="participant' + i + '_names_selector">' +
        '<input class="form-control typeahead name-input" type="text" id="participant' + i + '_name_input" value="New">' +
        '</div>' +
        '<label for="participant' + i + '_role">Роль</label>' +
        '<select class="form-control role-input" id="participant_roles_selector">' +
        '<option selected>Перевод с английского</option>' +
        '<option>Эдит</option>' +
        '<option>Редактура</option>' +
        '<option>Test</option>' +
        '</select>' +
        '<input type="checkbox" id="name_title" name="name_title"><label for="name_title"> Отображать команду</label>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
    $('#participantselect').append(newParticipant);
    $('#participantform').append(newPanel);
    $('#participant' + i + '_names_selector .typeahead').typeahead({ // инициализируем обработчик имен при каждом создании участника
        hint: true,
        limit: 10,
        highlight: true,
        minLength: 1
    }, {
        name: 'participant_names',
        source: substringMatcher(names)
    });
    $('.typeahead').bind('typeahead:select', function(ev, suggestion) {
        var id = $('.participant-data.in').attr('id');
        $('#' + id + '_name').html(suggestion);
    });
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

var names = ['Ushwood', 'Danholm', 'Lady Astrel', 'Test'];

var authors = ['Oda Shiichiro', 'Sorachi Hideyaki', 'Lev Tolstoi', 'Test'];

var illustrators = ['Andrew Rublev', 'Someone Someoneson', 'Hitomi Akira', 'Test'];

$('#participantform').children('.panel').each(function() {
    i++;
    $('#participant' + i + '_names_selector .typeahead').typeahead({ // обработчик никнеймов
        hint: true,
        limit: 10,
        highlight: true,
        minLength: 1
    }, {
        name: 'participant_names',
        source: substringMatcher(names)
    });
});

$('#author-name-typeahead .typeahead').typeahead({ // обработчик имен авторов
    hint: true,
    limit: 10,
    highlight: true,
    minLength: 1
}, {
    name: 'author_names',
    source: substringMatcher(authors)
});

$('#illustrator-name-typeahead .typeahead').typeahead({ // обработчик имен иллюстраторов
    hint: true,
    limit: 10,
    highlight: true,
    minLength: 1
}, {
    name: 'illustrator_names',
    source: substringMatcher(illustrators)
});
// ---------- typeahead end --------------

$('#participantselect').on('click', 'a.list-group-item', function() { // баг фикс кнопки удаления
    $('.participant-data.in').collapse('hide');
    $($(this).attr('href')).collapse('show');
});

$('.typeahead').bind('typeahead:select', function(ev, suggestion) {
    var id = $('.participant-data.in').attr('id');
    $('#' + id + '_name').html(suggestion);
});

$('#participantform').on('keyup', '.name-input', function() {
    var elem = $(this); // засовываем этот объект в переменную (на всякий случай)
    var id = $('.participant-data.in').attr('id'); // получаем id участника
    $('#' + id + '_name').html(elem.val()); // при помощи предыдущего значения вытворяем с именами, что хотим
});

$('#participantform').on('change', '.role-input', function() {
    var elem = $(this); // засовываем этот объект в переменную (на всякий случай)
    var id = $('.participant-data.in').attr('id'); // получаем id участника
    $('#' + id + '_role').html(elem.val()); // при помощи предыдущего значения вытворяем с ролями, что хотим
});

$('#participantform').on('hidden.bs.collapse', '.participant-data', function() { // обработка активности кнопки удаления
    $('#btn-participant-delete').attr('disabled', true);
}).on('shown.bs.collapse', '.participant-data', function() {
    $('#btn-participant-delete').attr('disabled', false);
});

$('#btn-participant-delete').on('click', function() { // обработка кнопки удаления для участников
    var id = $('.participant-data.in').attr('id');
    var nextParticipant = $('#participantselect [href="#' + id + '"]').next();
    var nextPanel = $(nextParticipant.attr('href'));
    $('.participant-data.in').collapse('hide');
    $('#' + id + '_detele').val(true);
    $('#participantselect [href="#' + id + '"]').detach();
    if (nextParticipant.attr('class') && nextPanel.attr('class')) {
        nextParticipant.addClass('active');
        nextPanel.collapse('show');
    } else {
        $('#participantselect').children().last().addClass('active');
        $($('#participantselect').children().last().attr('href')).collapse('show');
    }
});

/* ----------------------------------------- PARTISIPANTS END ----------------------------------------- */

/* ------------------------------------------ CHAPTERS START ------------------------------------------ */

var OptionsForSelect = '<option>Весь том</option>'; // опции для селекта
var u = 0; // переменная для select'а

$('#chapterselect').on("sortupdate", function(event, ui) { // для списка глав задаем обработчик перетягивания
    var p_order = 0; // поставим для каждой главы порядковый номер
    $(this).children().each(function() { // проверяем каждый элемент
        $($(this).attr('href') + '_order').val(++p_order); // обновляем порядок
        //              console.log($(this).attr('href')); // на всякий случай пока оставлю
        //              console.log(p_order);
    });
    var id = ui.item.attr('href').substring(8); // находим id главы, которую только что перетащили
    var isRightChapter = false; // переменная поиска
    var chapter = []; // массив для картинок с главой
    chapter.push($('.heading[data-chapter-id=' + id + ']').get(0)); // пихаем саму главу в массив
    $('#imageselect').children().each(function() { // проверим главу на наличие картинок под ней
        if (($(this).is('.heading[data-chapter-id]')) && ($(this).attr('data-chapter-id') == id * 1)) { // если это нужный нам heading,
            isRightChapter = true; // то начинаем искать
        } else if (($(this).attr('data-parent') == '#imageform') && (isRightChapter)) {
            chapter.push($(this).get(0)); // пихаем последнюю картинку что нашли в массив
        } else {
            isRightChapter = false; // перестаем искать, как только натыкаемся на другой heading
        }
    });
    if (ui.item.next().attr('href')) { // если следующий элемент в списке присутствует,
        var nextElem = ui.item.next(); // то получаем его
        id = nextElem.attr('href').substring(8); // находим id следующей главы
        $('.heading[data-chapter-id=' + id + ']').before(chapter); // и вставляем перед ней
    } else { // иначе
        $('#imageselect').append(chapter); // вставляем в конце селекта
    }
    OptionsForSelect = '<option>Весь том</option>'; // при любом перетаскивании строим селект снова
    u = 0;
    $('#chapterselect').children('a').each(function() {
        u++;
        OptionsForSelect = OptionsForSelect + '<option id="select_chapter' + u + '">' + $(this).children('span').text() + ' (' + u + ')</option>';
    });
    $('#updateform').children('.panel').find('.update_chapter').html(OptionsForSelect);
});

var j = 0; // id каждого элемента в пункте "Главы"
var k = 0; // нужна, чтобы считать непосредственно сами главы (красивости)
var chapterTypes = []; //Типы (глава/часть и прочие)
function find(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == value) return i;
    }
    return -1;
}

$('#chapterModalSave').click(function() {
    var col = $('#chapterModal_col').val();
    var name = $('#chapterModal_name').val();
    if (find(chapterTypes, name) == -1) {
        chapterTypes.push(name);
        localStorage.setItem('chapterTypes', chapterTypes);
    }
    if ($('#chapterModal_i').prop('checked')) {
        addChapter('Начальные иллюстрации');
    }
    if ($('#chapterModal_p').prop('checked')) {
        addChapter('Пролог');
    }
    if ($('#chapterModal_e').prop('checked')) {
        addChapter('Эпилог');
    }
    if ($('#chapterModal_a').prop('checked')) {
        addChapter('Послесловие');
    }
    if ($('#chapterModal_at').prop('checked')) {
        addChapter('Послесловие команды');
    }
    reinitAffix();
    $('#chapterModal').modal('hide');
    return false;
});

$('#podglavaModalSave').click(function() {
    var col = $('#podglavaModal_col').val();
    var name = $('#podglavaModal_name').val();
    if (find(chapterTypes, name) == -1) {
        chapterTypes.push(name);
        localStorage.setItem('chapterTypes', chapterTypes);
    }
    if ($('#chapterselect .list-group-item.active').length == 0) {
        $('#podglavaModal').modal('hide');
        alert('Сначала выберите главу, в которую хотите вставить подглавы :D');
        return false;
    }
    if (col >= 1) {
        for (var i = 1; i <= col; i++) {
            addChapter(name, true, i);
        }
    }
    reinitAffix();
    $('#podglavaModal').modal('hide');
    return false;
});

$('#btn-chapter-add').click(function() {
        addChapter();
        reinitAffix()
    }) // обработка кнопки добавления новой главы
function addChapter(name, podglava, num) {
    var name = name ? name : "Глава";
    var podglava = podglava ? 'checked=""' : '';
    var link = '';
    j++;
    var number = 0;
    var chapterTen = false;
    $('#chapterselect').children().each(function() { // обрабатываем количество "Глав"
        var str1 = $(this).children('span').text();
        if (str1.substring(0, 8) == "Глава 10" || str1.substring(0, 8) == "Часть 10") chapterTen = true;
    });
    $('#chapterselect').children().each(function() { // обрабатываем количество "Глав"
        var str1 = $(this).children('span').text();
        var str2 = str1.substring(0, 5); // вычленяем первые 5 букв
        //              if (str1.substring(0,8) == "Глава 10") chapterTen = true;
        if (((str2 == "Глава") || (str2 == "Часть")) && (str1.substring(6, 7) * 1 > number) && (!chapterTen)) { // если они совпадают с "главой", и глава меньше 10,
            number = str1.substring(6, 7) * 1; // то присваеваем наибольшее число переменной
        }
        if (((str2 == "Глава") || (str2 == "Часть")) && (str1.substring(6, 8) * 1 > number) && (chapterTen)) { // если они совпадают с "главой", и глава больше 10,
            number = str1.substring(6, 8) * 1; // то присваеваем наибольшее число переменной
        }
    });
    if (!podglava) {
        k = number
    } else {
        k = num - 1
    }
    k++;
    var chapterName = (name == "Глава" || name == "Часть") ? name + ' ' + k : name;
    if (name == "Начальные иллюстрации") {
        link = 'i';
    } else if (name == "Пролог") {
        link = 'p';
    } else if (name == "Эпилог") {
        link = 'e';
    } else if (name == "Послесловие") {
        link = 'a';
    } else if (name == "Послесловие команды") {
        link = 'at';
    } else if (podglava) {
        link = $('#chapterform .in .url-input').val() + 'c' + k;
    } else {
        link = 'ch' + k;
    }
    console.log(link);
    var newChapter = '<a data-toggle="collapse" data-parent="#chapterform" href="#chapter' + j + '" aria-expanded="true" aria-controls="chapter' + j + '" class="list-group-item" data-podglava="' + podglava + '">' +
        '<i class="fa fa-ellipsis-v move"></i>' +
        '<span class="hidden-sm hidden-xs"  id="chapter' + j + '_name">' + chapterName + '</span>' +
        '</a>';
    var newPanel = '<div class="panel">' +
        '<div class="row collapse chapter-data" role="tabpanel" id="chapter' + j + '">' +
        '<input type="hidden" id="chapter' + j + '_id">' +
        '<input type="hidden" id="chapter' + j + '_order">' +
        '<input type="hidden" id="chapter' + j + '_delete">' +
        '<div class="chapter-data-main">' +
        '<h3>Настройка главы</h3>' +
        '<div class="form-group checkbox">' +
        '<label>' +
        '<input type="checkbox" class="form-control is-subchapter"' + podglava + '" id="chapter' + j + '_is_subchapter" name="chapter' + j + '_is_subchapter">' +
        '&emsp;Подглава' +
        '</label>' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="chapter' + j + '_url">Ссылка</label>' +
        '<input class="form-control url-input" type="text" id="chapter' + j + '_url_input" value="' + link + '">' +
        '<label for="chapter' + j + '_name">Заголовок</label>' +
        '<input class="form-control name-input" type="text" id="chapter' + j + '_name_input" value="' + chapterName + '">' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
    var newChapterHeading = '<a class="list-group-item heading" data-chapter-id="' + j + '"><span class="move">' + chapterName + '</span></a>';
    if (!($('#chapterselect').children('.active').attr('href'))) { // если не выбранно ни одного элемента
        $('#chapterselect').append(newChapter);
        $('#chapterform').append(newPanel);
        $('#imageselect').append(newChapterHeading); // то вставляем новые главы, панели для глав, heading'и в конец
    } else { // иначе
        $('#chapterselect').children('.active').after(newChapter)
        $('#chapterform').children('.panel').each(function() {
            if ($(this).children().hasClass('in')) $(this).after(newPanel); // вставляем после выбранного элемента
        });
        var isRightChapter = false; // переменная поиска
        var imageAfterChapter; // переменная для картинки
        var id = $('.chapter-data.in').attr('id'); // id выбранного элемента
        id = id.substring(7); // берем оттуда только цифру
        $('#imageselect').children().each(function() { // в случае с heading мы будеми проверять его на наличие картинок под ним
            if (($(this).is('.heading[data-chapter-id]')) && ($(this).attr('data-chapter-id') == id * 1)) {
                isRightChapter = true; // если это нужный нам heading, то начинаем искать
            } else if (($(this).attr('data-parent') == '#imageform') && (isRightChapter)) {
                imageAfterChapter = $(this); // пихаем последнюю картинку что нашли в переменную
            } else {
                isRightChapter = false; // перестаем искать, как только натыкаемся на другой heading
            }
        });
        if (imageAfterChapter) { // если мы отыскали какую-либо картинку под выбранной главой
            imageAfterChapter.after(newChapterHeading); // то вставляем после нее
        } else {
            $('.heading[data-chapter-id="' + id + '"]').after(newChapterHeading); // иначе втавляем после выбранного heading
        }
    }
    $('#chapter' + j + '_name').css({
        'margin': '0px 0px 0px 3px'
    }); // отступ для вновь созданого элемента, дабы он выглядел как все
    var p_order = 0; // поставим для каждой главы порядковый номер
    $(this).children().each(function() { // проверяем каждый элемент
        $($(this).attr('href') + '_order').val(++p_order); // обновляем порядок
        console.log($(this).attr('href')); // на всякий случай пока оставлю
        console.log(p_order);
    });
    OptionsForSelect = '<option>Весь том</option>'; // Начинаем строить селект
    u = 0;
    $('#chapterselect').children('a').each(function() {
        u++;
        OptionsForSelect = OptionsForSelect + '<option id="select_chapter' + u + '">' + $(this).children('span').text() + ' (' + u + ')</option>';
    });
    $('#updateform').children('.panel').find('.update_chapter').html(OptionsForSelect);
    if (podglava) {
        $('#chapter' + j + '_name').css('margin', '0px 0px 0px 28px')
    }
};

$('#chapterform').children('.panel').each(function() {
    j++; // считаем кажую панель
});


function supportsLocalStorage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

if (supportsLocalStorage()) {
    if (localStorage.getItem("chapterTypes") != undefined) {
        chapterTypes = localStorage.getItem("chapterTypes").split(',');
    } else {
        chapterTypes = ['Глава', 'Часть']
    }
}

$('#chapterform .panel .name-input, #chapterModal_name, #podglavaModal_name').typeahead({ // обработчик имен иллюстраторов
    hint: true,
    limit: 10,
    highlight: true,
    minLength: 1
}, {
    name: 'chapter_types',
    source: substringMatcher(chapterTypes)
});

$('#chapterform').on('keyup', '.name-input', function() {
    var elem = $(this); // засовываем этот объект в переменную (на всякий случай)
    var id = $('.chapter-data.in').attr('id'); // получаем id главы
    $('#' + id + '_name').html(elem.val()); // при помощи предыдущего значения вытворяем с именами, что хотим
    id = id.substring(7);
    $('.heading[data-chapter-id="' + id + '"]').children().html(elem.val());
    $('#select_chapter' + id).html(elem.val());
    //      console.log($('#select_chapter' + id));
});

$('#chapterform').on('click', '.is-subchapter', function() { // обработчик подглав
    var id = $('.chapter-data.in').attr('id'); // получаем id главы
    if ($(this).prop("checked")) { // если выделено, то
        $('#' + id + '_name').css({
            'margin': '0px 0px 0px 28px'
        }); // при помощи css делаем подглаву
    } else {
        $('#' + id + '_name').css({
            'margin': '0px 0px 0px 3px'
        }); // либо делаем наоборот
    }
})

$('#chapterselect').on('click', 'a.list-group-item', function() { // баг фикс кнопки удаления (line 1185)
    $('.chapter-data.in').collapse('hide');
    $($(this).attr('href')).collapse('show');
});

$('#chapterform').on('hidden.bs.collapse', '.chapter-data', function() { // обработка активности кнопки удаления
    $('#btn-chapter-delete').attr('disabled', true);
}).on('shown.bs.collapse', '.chapter-data', function() {
    $('#btn-chapter-delete').attr('disabled', false);
});

$('#btn-chapter-delete').on('click', function() { // обработка кнопки удаления для глав
    var id = $('.chapter-data.in').attr('id');
    var nextChapter = $('#chapterselect [href="#' + id + '"]').next();
    var nextPanel = $(nextChapter.attr('href'));
    $('.chapter-data.in').collapse('hide');
    $('#' + id + '_detele').val(true);
    $('#chapterselect [href="#' + id + '"]').detach();
    id = id.substring(7);
    $('.heading[data-chapter-id="' + id + '"]').detach();
    if (nextChapter.attr('class') && nextPanel.attr('class')) {
        nextChapter.addClass('active');
        nextPanel.collapse('toggle');
    } else {
        $('#chapterselect').children().last().addClass('active');
        $($('#chapterselect').children().last().attr('href')).collapse('toggle');
    }
});

/* ------------------------------------------ CHAPTERS END ------------------------------------------ */

/* ------------------------------------------ UPDATES START ----------------------------------------- */

$('#updateselect').on("sortupdate", function() { // для списка обновлений задаем обработчик перетягивания
    var up_order = 0; // поставим для каждого обновления порядковый номер
    $(this).children().each(function() { // проверяем каждый элемент
        $($(this).attr('href') + '_order').val(++up_order); // обновляем порядок
    });
});

var v = 0; // id каждого элемента в пункте "Обновления"

$('#chapterselect').children('a').each(function() {
    u++;
    OptionsForSelect = OptionsForSelect + '<option id="select_chapter' + u + '">' + $(this).children('span').text() + ' (' + u + ')</option>';
});

$('#btn-update-add').click(function() { // обработка кнопки добавления нового обновления
    v++;
    var nowDate = new Date();
    var nowMonth = ('0' + (nowDate.getMonth() + 1)).slice(-2);
    var nowDay = ('0' + nowDate.getDate()).slice(-2);
    var nowHours = ('0' + nowDate.getHours()).slice(-2);
    var nowMinutes = ('0' + nowDate.getMinutes()).slice(-2);
    var today = nowDate.getFullYear() + '-' + nowMonth + '-' + nowDay + ' ' + nowHours + '-' + nowMinutes;
    var newUpdate = '<a data-toggle="collapse" data-parent="#updateform" href="#update' + v + '" aria-expanded="true" aria-controls="update' + v + '" class="list-group-item" >' +
        '<span class="hidden-sm hidden-xs"  id="update' + v + '_date">' + today + '</span>:' +
        '<span class="hidden-sm hidden-xs"  id="update' + v + '_chapter">Весь том</span>' +
        '</a>';
    var newPanel = '<div class="panel">' +
        '<div class="row collapse update-data" role="tabpanel" id="update' + v + '">' +
        '<input type="hidden" id="update' + v + '_id">' +
        '<input type="hidden" id="update' + v + '_order">' +
        '<input type="hidden" id="update' + v + '_delete">' +
        '<div class="update-data-main">' +
        '<h3>Настройка обновления</h3>' +
        '<div class="form-group">' +
        '<label for="update' + v + '_type">Тип</label>' +
        '<select id="update' + v + '_type" class="form-control update_type">' +
        '<option>Перевод</option>' +
        '<option>Глобальная редактура</option>' +
        '<option>Обновление иллюстраций</option>' +
        '<option>Другое</option>' +
        '</select>' +
        '<label for="update' + v + '_chapter">Глава</label>' +
        '<select id="update' + v + '_chapter_select" class="form-control update_chapter">' +
        '</select>' +
        '<label for="update' + v + '_date_input">Дата</label>' +
        '<input class="form-control date-input" type="text" id="update' + v + '_date_input" value="' + today + '">' +
        '<label for="update' + v + '_name">Описание (опционально)</label>' +
        '<input class="form-control" type="text" id="update' + v + '_description" placeholder="Перевод">' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
    $('#updateselect').prepend(newUpdate);
    $('.update-insert').after(newPanel);
    $('#update' + v + '_chapter_select').append(OptionsForSelect);
    $('#update' + v + '_date_input').datetimepicker({
        format: "YYYY-MM-DD HH-mm",
        locale: 'ru',
        useCurrent: 'hour'
    });
});

$('#updateform').children('.panel').each(function() {
    v++; // считаем кажую панель (читай кажый объект)
    $(this).find('.update_chapter').append(OptionsForSelect);
});

$('#updateform').on('dp.change', '.date-input', function() {
    var elem = $(this); // засовываем этот объект в переменную (на всякий случай)
    var id = $('.update-data.in').attr('id'); // получаем id главы
    $('#' + id + '_date').html(elem.val()); // при помощи предыдущего значения вытворяем с именами, что хотим
});

$('#updateform').on('change', '.update_type', function() {
    var elem = $(this); // засовываем этот объект в переменную (на всякий случай)
    var id = $('.update-data.in').attr('id'); // получаем id главы
    $('#' + id + '_description').prop('placeholder', elem.val()); // при помощи предыдущего значения вытворяем с именами, что хотим
});

$('#updateform').on('change', '.update_chapter', function() {
    var elem = $(this); // засовываем этот объект в переменную (на всякий случай)
    var id = $('.update-data.in').attr('id'); // получаем id главы
    $('#' + id + '_chapter').text(elem.val()); // при помощи предыдущего значения вытворяем с именами, что хотим
});

$('#updateselect').on('click', 'a.list-group-item', function() { // баг фикс кнопки удаления
    $('.update-data.in').collapse('hide');
    $($(this).attr('href')).collapse('show');
});

$('#updateform').on('hidden.bs.collapse', '.update-data', function() { // обработка активности кнопки удаления
    $('#btn-update-delete').attr('disabled', true);
}).on('shown.bs.collapse', '.update-data', function() {
    $('#btn-update-delete').attr('disabled', false);
});

$('#btn-update-delete').on('click', function() { // обработка кнопки удаления для глав
    var id = $('.update-data.in').attr('id');
    var nextUpdate = $('#updateselect [href="#' + id + '"]').next();
    var nextPanel = $(nextUpdate.attr('href'));
    $('.update-data.in').collapse('hide');
    $('#' + id + '_detele').val(true);
    $('#updateselect [href="#' + id + '"]').detach();
    if (nextUpdate.attr('class') && nextPanel.attr('class')) {
        nextUpdate.addClass('active');
        nextPanel.collapse('show');
    } else {
        $('#updateselect').children().last().addClass('active');
        $($('#updateselect').children().last().attr('href')).collapse('show');
    }
});

/* ------------------------------------------ UPDATES END ------------------------------------------- */

/* ------------------------------------------ IMAGES START ------------------------------------------ */

var img = $('#imageselect a[href^="#image"]').length + 1;
$('#imageselect').on("sortupdate", function(event, ui) { // для списка изображений задаем обработчик перетягивания
    if (ui.item.hasClass('heading')) // если мы перетянули главу, мы должны убедится что не нарушили порядок следовани глав
    {
        var start = 0; // jquery-ui sortable не дает информации о том какой у елемента был индекс до перетягивания
        $(this).children().each(function(i, e) { // поэтому мы находим его линейно
            if ($(e).position().top <= ui.originalPosition.top) // сравнивая по y координате каждого елемента в пикселах с координатой изначального положения
                start = i;
            else return false;
        });
        var end = ui.item.index() // индекс итоговой позиции известен
        if (start < end) // если мы перетянули вниз
            $(this).children().slice(start, end).filter('.heading').insertAfter(ui.item); // то перемещаем все заголовки (если они есть) между индексами и ставим их в том же порядке после тепущего
        else
            $(this).children().slice(end + 1, start + 1).filter('.heading').insertBefore(ui.item); // в противном случае точно так же ставим перед текущим
    }
    var order = 0,
        chapter_id = 0; // теперь нам нужно для каждого изображения поставить его порядковый номер и id главы к которой оно принадлежит
    $(this).children().each(function() { // вообще делать это линейно для всех елементов при любом изменении не очень хорошо. правельные было бы обновлять только для тех изображений для которых что-то изменилось. но мне было лень
        if ($(this).is('.heading[data-chapter-id]'))
            chapter_id = $(this).attr('data-chapter-id'); // если мы попали на елемент заголовка - запомнили номер текущей главы
        else {
            $($(this).attr('href') + '_order').val(++order); // посчитали порядок
            $($(this).attr('href') + '_chapter_id').val(chapter_id); // вспомнили последний известный айдишник главы
        }
    });
});

$('#imageselect').on('click', 'a.list-group-item', function() { // баг фикс кнопки удаления
    $('.image-data.in').collapse('hide');
    $($(this).attr('href')).collapse('show');
});

// дальше пошел код спецефический для изображений. его я буду комментировать не так подробно


// активируем и деактивируем кнопку удаления иллюстраций в зависимости от того выбрано что то или нет
$('.image-data').on('hidden.bs.collapse', function() {
    $('#btn-image-delete').attr('disabled', true);
}).on('shown.bs.collapse', function() {
    $('#btn-image-delete').attr('disabled', false);
});

// рисуем дропзоны при затягивании файла на страницу браузера
$(document).on('dragover', function(e) {
    if (window.dropZoneTimeout)
        clearTimeout(window.dropZoneTimeout);
    else $('body').addClass('dragover'); //выставляем класс на body который активирует css отрисовку дропзон

    // при затягивании файла в одну из дропзон, она подсвечивается
    $('.image-data-main,.image-data-color,#imageselect').removeClass('hover');
    $(e.target).closest('.image-data-main,.image-data-color,#imageselect').addClass('hover');

    // если в течении 400мс событие не повторяется предпологаем что никто уже ничего не перетягивает и выключаем отрисовку дропзон
    window.dropZoneTimeout = setTimeout(function() {
        window.dropZoneTimeout = null;
        $('body').removeClass('dragover');
        $('.image-data-main,.image-data-color,#imageselect').removeClass('hover');
    }, 400);
}).on('drop dragover dragstart', function(e) {
    e.preventDefault();
}); // выключаем стандортное поведение браузера на drag'n'drop

// настраиваем jQuery File Upload для кнопки заменить или затягивания файла на существующую ирасту
function replaceImage() {
    $('.btn-image-replace').each(function() {
        var $this = $(this);
        $(this).fileupload({
            url: "/rura/loading_files.php",
            dataType: 'json',
            formData: {
                ctype: $this.closest('.image-data-main').length ? 'main' : 'color',
                num: $this.closest('.image-data').attr('id').substr(5),
                id: $('#' + $this.closest('.image-data').attr('id') + '_id').val()
            },
            acceptFileTypes: /(\.|\/)(jpe?g|png|jpg)$/i,
            previewMaxHeight: 180,
            previewMaxWidth: 260,
            maxNumberOfFiles: 1,
            dropZone: $this.closest('.image-data-main,.image-data-color')
        }).on('fileuploadadd', function(e, data) {
            data.files[0].num = $this.closest('.image-data').attr('id').substr(5);
            data.files[0].ctype = $this.closest('.image-data-main').length ? 'main' : 'color';
            $this.closest('.image-data-main,.image-data-color').find('img').after('<center class="btn-image-replace"><i class="fa fa-spinner fa-spin"></i></center>').detach();
            $('#imageform .progress').collapse('show');
            data.submit();
        })
    });

    $('#btn-image-add,.btn-image-replace').on('fileuploadprocessalways', function(e, data) {
        console.log(data);
        var index = data.index,
            file = data.files[index];
        if (file.preview) { // заменяем иконку загрузки за превюшку, как только она становится доступна
            $('#imageselect a[href="#image' + file.num + '"] center').empty().append(file.preview);
            var newCanvas = $(file.preview).clone().get(0);
            newCanvas.getContext('2d').drawImage(file.preview, 0, 0);
            $('#image' + file.num + ' .image-data-' + file.ctype + ' center').empty().append(newCanvas);
        }
        if (file.error) // или выводим сообщение об ошибке обработки на клиенте
            $('#imageform .progress').after('<div class="alert alert-danger alert-dismissible fade in" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Ошибка!</strong> ' + file.error + '</div>');
    }).on('fileuploadprogressall', function(e, data) { // обновляем прогресбар
        var progress = parseInt(data.loaded / data.total * 100, 10);
        $('#imageform .progress-bar').css('width', progress + '%');
        $('#imageform .progress-bar').attr('aria-valuenow', progress);
        $('#imageform .progress-bar span').text(progress + '% Complete');
    }).on('fileuploaddone', function(e, data) { // при завершении загрузки заменяем превюшку на img тег с адресом уже загруженной ирасты
        $('#imageform .progress').collapse('hide');
        console.log(data) // с сервера в json`е должны прийти поля url и id
        var $button = $(this);
        $.each(data.result.files, function(index, file) {
            if (file.url) {
                $button.closest('.image-data-main,.image-data-color').find('input:eq(1)').val(moment(data._time).format('DD.MM.YYYY HH:mm:ss'));
                $button.closest('.image-data-main,.image-data-color').find('input:eq(2)').val(file.name);
                $button.closest('.image-data-main,.image-data-color').find('center').empty().append($('<img>').attr('src', file.url).addClass('img-responsive'));
                $('#image' + data.files[index].num).find('.image-data-' + data.files[index].ctype).find('center').empty().append($('<img>').attr('src', file.url).addClass('img-responsive')).append($('<input type="file" class="fileupload">'));
                $('#image' + data.files[index].num + '_id').val(file.id);
                $('#imageselect a[href="#image' + data.files[index].num + '"] center').empty().append($('<img>').attr('src', file.url));
            } else if (file.error) // выводим ошибку возвращенную с сервера
                $('#imageform .progress').after('<div class="alert alert-danger alert-dismissible fade in" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Ошибка!</strong> ' + file.error + '</div>');
        });
        $('#imageform .progress').collapse('hide');
    }).on('fileuploadfail', function(e, data) { // выводим ошибку аякса
        $('#imageform .progress').after('<div class="alert alert-danger alert-dismissible fade in" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Ошибка!</strong> Загрузка не удалась</div>');
    });
}
replaceImage();

// настраиваем jQuery File Upload для кнопки добавить или затягивания файла на список иллюстраций
$('#btn-image-add').fileupload({
    url: "/rura/loading_files.php", // "обработка" загруженых велась у меня на локально денвере. скорее всего без этого вообще работать не будет
    dataType: 'json',
    formData: {
        ctype: 'main'
    },
    acceptFileTypes: /(\.|\/)(jpe?g|png|jpg)$/i,
    previewMaxHeight: 180,
    previewMaxWidth: 260,
    imageQuality: 100,
    dropZone: $('#imageselect')
}).on('fileuploadadd', function(e, data) { // при добавлении файла сразу создаем елемент в #imageselect
    $.each(data.files, function(index, file) {
        if (!data.last_num) data.last_num = $('#imageselect a[href^="#image"]').length;
        if (!data.last_num) data.last_num = 0;
        img++;
        file.num = ++data.last_num; // num - внутренний/временный айдишник иллюстраций фронтенда - порядок добавления
        file.ctype = 'main'; // ctype - color type. основная ираста или покрас
        $('<a data-toggle="collapse" data-parent="#imageform" href="#image' + file.num + '" aria-expanded="true" aria-controls="image' + file.num + '" class="list-group-item"> <i class="fa fa-ellipsis-v move ui-sortable-handle"></i> <center><i class="fa fa-spinner fa-spin"></i></center> <span class="hidden-sm hidden-xs">' + file.name + '</span> </a>').appendTo('#imageselect');
        $('<div class="panel"><div class="row collapse image-data" role="tabpanel" id="image' + file.num + '"><input type="hidden" id="image' + file.num + '_id"><input type="hidden" id="image' + file.num + '_order"><input type="hidden" id="image' + file.num + '_chapter_id"><input type="hidden" id="image' + file.num + '_delete"><div class="col-xs-6 image-data-main"><h3>Основа <button type="button" class="btn btn-default btn-image-replace" title="Заменить изображение"><i class="fa fa-retweet"></i><input type="file" class="fileupload"></button></h3><center class="btn-image-replace"><input type="file" class="fileupload"><i class="fa fa-spinner fa-spin"></i></center><div class="form-group"><label for="image' + file.num + '_main_date">Дата загрузки</label><input type="text" class="form-control disable" disabled id="image' + file.num + '_main_date" value="' + moment(data._time).format('DD.MM.YYYY HH:mm:ss') + '"></div><div class="form-group"><label for="image' + file.num + '_main_name">Имя файла</label><input type="text" class="form-control disable" disabled id="image' + file.num + '_main_name" value="' + file.name + '"></div></div><div class="col-xs-6 image-data-color"><h3>Покрас <button type="button" class="btn btn-default btn-image-replace" title="Добавить изображение"><i class="fa fa-plus"></i><input type="file" class="fileupload"></button></h3><center class="btn-image-replace"><input type="file" class="fileupload"></center><div class="form-group"><label for="image' + file.num + '_color_date">Дата загрузки</label><input type="text" class="form-control disable" disabled id="image' + file.num + '_color_date" value=""></div><div class="form-group"><label for="image' + file.num + '_color_name">Имя файла</label><input type="text" class="form-control disable" disabled id="image' + file.num + '_color_name" value=""></div></div></div></div>').appendTo('#imageform');
    });
    $('#imageform .progress').collapse('show'); // показываем прогресбар
    data.submit(); // начинаем загрузку
    replaceImage();
});



$('#btn-image-delete').click(function() { // обработка кнопки удаления
    var id = $('.image-data.in').attr('id');
    var nextImage = $('#chapterselect [href="#' + id + '"]').next();
    var nextPanel = $(nextImage.attr('href'));
    $('.image-data.in').collapse('hide');
    $('#' + id + '_detele').val(true);
    $('#imageselect [href="#' + id + '"]').detach();
    $('#imageform #' + id).detach();
    if (nextImage.attr('class') && nextPanel.attr('class')) {
        nextImage.addClass('active');
        nextPanel.collapse('show');
    } else {
        $('#chapterselect').children().last().addClass('active');
        $($('#chapterselect').children().last().attr('href')).collapse('show');
    }
});

/* ------------------------------------------ IMAGES END ------------------------------------------ */


/* -------------------------------------- IMAGES REPLACEMENT -------------------------------------- */
function isInteger(num) {
    return (num ^ 0) === num;
}

var imagesReplacement = [];
imagesReplacement.length = 0;
var imgIndx = 0;
var needReplaceImg = 0;
$('#imageModal').on('show.bs.modal', function(e) {
    imagesReplacement = [];
    imagesReplacement.length = 0;
    needReplaceImg = 0;
    imgIndx = 0;
    $('.image-data-main').each(function(indx) {
        needReplaceImg++;
        var parentId = $(this).parent().attr('id');
        var image = '<img height="150px" src="' + $(this).find('.btn-image-replace').children('img').attr('src') + '"' +
            ' data-id="' + $(this).parent().children('#' + parentId + '_id').val() + '"' +
            ' data-order="' + $(this).parent().children('#' + parentId + '_order').val() + '"' +
            ' data-chapter_id="' + $(this).parent().children('#' + parentId + '_chapter_id').val() + '"' +
            ' data-parent_id="' + parentId + '"' +
            '>';
        var imageBlock = $('<div class="row" style="border: 1px solid #eee;padding: 15px;text-align:center;">' + '<p>' + parentId.slice(5) + '</p>' + image + '</div>').appendTo($('#imageModal').find('.modal-body .container-fluid'))
        $('<div></div>').appendTo('#imageModalUploaded').attr('class', 'imageDraggable NoImageModal').attr('data-pos', (indx + 1));
        $('#imageModalUploaded').sortable('refresh');
        imagesReplacement.push({
            'name': '',
            'order': (indx + 1),
            'size': 0
        });
    });

})
$('#imageModal').on('hide.bs.modal', function(e) {
    $('#imageModal').find('.modal-body .container-fluid').empty();
    $('#imageModal').find('#imageModalUploaded').html('<p class="text-center">Загруженные иллюстрации. Выберите число - замену.</p>');
})

function swap($object, to, sort, top) {
    var before = imagesReplacement[$object.data('pos') - 1]['order'];
    imagesReplacement[$object.data('pos') - 1]['order'] = to;
    if (!sort) $object.insertAfter($('#imageModalUploaded .imageDraggable:eq(' + (to - 1) + ')'));
    $object.find('select, input').val(to);
    $(".imageDraggable").each(function(indx) {
        if ($(this).index() <= needReplaceImg) {
            imagesReplacement[$(this).data('pos') - 1]['order'] = $(this).index();
            $(this).find('select, input').val($(this).index());
        } else {
            imagesReplacement[$(this).data('pos') - 1]['order'] = 0
            $(this).find('select, input').val(0);
        }
    });
}
$('#imageModalUploaded').sortable({ // включаем jquery-ui sortable
    handle: '', // задаем маркер перетягивания,
    items: '.imageDraggable',
    stop: function(event, ui) {
        swap(ui.item, ui.item.index(), true);
    }
});
$('#imageModalUpload #fileupload').fileupload({
    url: "/rura/loading_files.php",
    dataType: 'json',
    autoUpload: false,
    previewMaxWidth: 500,
    previewMinWidth: 500,
    acceptFileTypes: /(\.|\/)(gif|jpe?g|png|jpg)$/i,
}).on('fileuploadadd', function(e, data) {
    imgIndx++;
    data.context = $('<div/>').attr('class', 'imageDraggable').attr('data-pos', imgIndx);
    if ($('.imageDraggable.NoImageModal:first').length > 0) {
        $('.imageDraggable.NoImageModal:first').remove();
        (data.context).insertBefore('#imageModalUploaded .imageDraggable.NoImageModal:first');
    } else {
        (data.context).appendTo('#imageModalUploaded').attr('data-pos', imgIndx - 1);
    }
    $('#imageModalUploaded').sortable('refresh');
    var controlBlock = $('<div class="form-inline row"></div>').appendTo(data.context);
    var selectionBlock = $('<div class="form-group col-xs-6"><label>Выберите</label> </div>').appendTo(controlBlock);
    var selection = $('<select  class="form-control uploadedModalSelect"></select>').appendTo(selectionBlock);
    selection.append('<option value="undefined"></option>')
    $('#imageModal .modal-body .container-fluid .row').each(function(indx) {
        selection.append('<option value="' + (indx + 1) + '">' + (indx + 1) + '</option>')
    })
    var input = $('<div class="form-group col-xs-6"><label>или введите</label><input type="number" style="width:80px !important" class="form-control"></div>').appendTo(data.context);
    input.appendTo(controlBlock);
}).on('fileuploadprocessalways', function(e, data) {
    var currentPosition = (data.context).data('pos');
    console.log(imagesReplacement[currentPosition - 1]);
    $.each(data.files, function(index, file) {
        if (imagesReplacement[currentPosition - 1]) {
            imagesReplacement[currentPosition - 1]['name'] = file.name;
            imagesReplacement[currentPosition - 1]['order'] = currentPosition;
            imagesReplacement[currentPosition - 1]['size'] = file.size;
        } else {
            imagesReplacement.push({
                'name': file.name,
                'order': 0,
                'size': file.size
            });
        }
        if (currentPosition <= needReplaceImg)(data.context).find('select, input').val(currentPosition);
        var added = $(file.preview).prependTo(data.context).css('height', '141px');
    });
    console.log(imagesReplacement[currentPosition - 1]);
    $('body').on('change', '.imageDraggable select, .imageDraggable input', function() {
        swap($(this).closest('.imageDraggable'), $(this).val());
        console.log(imagesReplacement);
    });
    $('#imageModalSend').click(function() {
        imgIndx = imagesReplacement.length;
        if (imagesReplacement[currentPosition - 1]['order'] != 0) data.submit();
    })
}).on('fileuploaddone', function(e, data) { // при завершении загрузки заменяем превюшку на img тег с адресом уже загруженной ирасты
    console.log(data);
    $.each(data.result.files, function(index, file) {
        imgIndx = (data.context).data('pos') - 1;
        console.log(imgIndx);
        console.log(imagesReplacement[imgIndx])
        if (file.url) {
            var $imgBlock = $('#image' + imagesReplacement[imgIndx]['order']);
            $('#imageselect a[href="#image' + imagesReplacement[imgIndx]['order'] + '"] center').empty().append($('<img>').attr('src', file.url));
            $imgBlock.find('.image-data-main').find('center').empty().append($('<img>').attr('src', file.url).addClass('img-responsive')).append($('<input type="file" class="fileupload">'));
            $imgBlock.find('.image-data-main').find('input:eq(2)').val(moment(data._time).format('DD.MM.YYYY HH:mm:ss'));
            $imgBlock.find('.image-data-main').find('input:eq(3)').val(file.name);
        } else if (file.error) // выводим ошибку возвращенную с сервера
            $('#imageModalUpload').after('<div class="alert alert-danger alert-dismissible fade in" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Ошибка!</strong> Загрузка не удалась</div>');

    });
    $('#imageModal').modal('hide');
    /*
        console.log(data) // с сервера в json`е должны прийти поля url и id
        var $button = $(this);
        $.each(data.result.files, function (index, file) {
            if (file.url) {
                $button.closest('.image-data-main,.image-data-color').find('input:eq(1)').val(moment(data._time).format('DD.MM.YYYY HH:mm:ss'));
                $button.closest('.image-data-main,.image-data-color').find('input:eq(2)').val(file.name);
                $button.closest('.image-data-main,.image-data-color').find('center').empty().append($('<img>').attr('src', file.url).addClass('img-responsive'));
                $('#image'+data.files[index].num).find('.image-data-'+data.files[index].ctype).find('center').empty().append($('<img>').attr('src', file.url).addClass('img-responsive')).append($('<input type="file" class="fileupload">'));
                $('#image'+data.files[index].num+'_id').val(file.id);
                $('#imageselect a[href="#image'+data.files[index].num+'"] center').empty().append($('<img>').attr('src', file.url));
            } else if (file.error) // выводим ошибку возвращенную с сервера
                $('#imageform .progress').after('<div class="alert alert-danger alert-dismissible fade in" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Ошибка!</strong> '+file.error+'</div>');
        });
*/
}).on('fileuploadfail', function(e, data) { // выводим ошибку аякса
    $('#imageModalUpload').after('<div class="alert alert-danger alert-dismissible fade in" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Ошибка!</strong> Загрузка не удалась</div>');
});
/* -------------------------------------- IMAGES REPLACEMENT -------------------------------------- */