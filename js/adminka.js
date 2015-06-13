$('button[type=submit]').on('click',
    function(){
        var parent = $(this).closest(".FormAjax");
        if( parent.hasClass("FormUpdate") ){
            AdminOnUpdate(parent, parent.children("#volume_id").val(), parent.data('type'));
        }
        return false;
    }
)
$('body').on('click','button.btn-success',
    function(){
        var type = $(this).data('type');
        var length = $('[data-parent="#'+type+'"]').length
        AdminOnInsert(type+'_n'+length);
        return false;
    }
)
$('body').on('change','input, textarea',
    function(){
        var parent = $(this).closest(".FormAjax");
        if( parent.hasClass("FormUpdate") ){
            AdminOnUpdate(parent, parent.children("#volume_id").val(), parent.data('type'));
        }
        return false;
    }
)
function AdminOnDelete (type) {
    var projectId = $('[data-type="'+type+'"').children('#volume_id').val();
    console.log(type);
    alert('Need Delete: '+type);
}
function AdminOnUpdate (parent, projectId, type) {
    var projectInfo = {};
    console.log(parent);
    for (var i = 0 ; i < parent.find('input[type=text]').length ; i++){
        var el = parent.find('input[type=text]:eq('+i+')');
        projectInfo[el.attr('name')] = el.val();
    }
    for (var i = 0 ; i < parent.find('input[type=checkbox]').length ; i++){
        var el = parent.find('input[type=checkbox]:eq('+i+')');
        projectInfo[el.attr('name')] = el.prop("checked");;
    }
    for (var i = 0 ; i < parent.find('textarea').length ; i++){
        var el = parent.find('textarea:eq('+i+')');
        projectInfo[el.attr('name')] = el.val();
    }
    var info = {'type': type, 'projectId': projectId, 'projectInfo': projectInfo}
    console.log(info);
    alert(JSON.stringify(info));
}
function AdminOnInsert (type) {
    var projectId = $('[data-type="'+type+'"').children('#volume_id').val();
    AdminOnUpdate ($('[data-type="'+type+'"'), projectId, type);
}