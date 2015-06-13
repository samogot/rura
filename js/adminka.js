$('button[type=submit]').on('click',
    function(){
        var parent = $(this).closest(".FormAjax");
        if( parent.hasClass("FormUpdate") ){
            AdminOnUpdate(parent.children("#volume_id").val(), parent.data('type'));
        }
        return false;
    }
)
$('button.btn-success').on('click',
    function(){
        var type = $(this).data('type');
        var length = $('[data-parent="#'+type+'"]').length
        AdminOnInsert(type+'_n'+length);
        return false;
    }
)
$('button.btn-danger').on('click',
    function(){
        var type = $(this).data('type');
        var Needdelete = $('[data-parent="#'+type+'"].info')
        AdminOnDelete(Needdelete.data('type'));
        return false;
    }
)
$('body').on('change','input, textarea',
    function(){
        var parent = $(this).closest(".FormAjax");
        if( parent.hasClass("FormUpdate") ){
            AdminOnUpdate(parent.children("#volume_id").val(), parent.data('type'));
        }
        return false;
    }
)
function AdminOnDelete (type) {
    var projectId = $('[data-type="'+type+'"').children('#volume_id').val();
    alert('Need Delete: '+type);
}
function AdminOnUpdate (projectId, type) {
    var projectInfo = {};
    for (var i = 0 ; i < $('.FormUpdate input[type=text]').length ; i++){
        var el = $('.FormUpdate input[type=text]:eq('+i+')');
        projectInfo[el.attr('name')] = el.val();
    }
    for (var i = 0 ; i < $('.FormUpdate input[type=checkbox]').length ; i++){
        var el = $('.FormUpdate input[type=checkbox]:eq('+i+')');
        projectInfo[el.attr('name')] = el.prop("checked");;
    }
    for (var i = 0 ; i < $('.FormUpdate textarea').length ; i++){
        var el = $('.FormUpdate textarea:eq('+i+')');
        projectInfo[el.attr('name')] = el.val();
    }
    var info = {'type': type, 'projectId': projectId, 'projectInfo': projectInfo}
    alert(JSON.stringify(info));
}
function AdminOnInsert (type) {
    var projectId = $('[data-type="'+type+'"').children('#volume_id').val();
    AdminOnUpdate (projectId, type);
}