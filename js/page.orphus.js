$(document).ready(function() { 
    $("table.orphusTable")
    .tablesorter(
        {
            cssAsc: 'headerSortUp', 
            cssDesc: 'headerSortDown', 
            headers:   {
                2: {
                    sorter: false
                },
                3: {
                    sorter: false
                },
                4: {
                    sorter: false
                }
            }
        }
    )
    .tablesorterPager({container: $(".pager")}); 
    $(".dateSortDesc, .nickSortDesc, .urlSortDesc, .dateSortAsc, .nickSortAsc, .urlSortAsc").click(function() { 
        if ($(this).hasClass('urlSortDesc')) { var sorting = [[5,1]]; }
        else if ($(this).hasClass('nickSortDesc')) { var sorting = [[1,1]]; }
        else if ($(this).hasClass('dateSortDesc')) { var sorting = [[0,1]]; }
        else if ($(this).hasClass('urlSortAsc')) { var sorting = [[5,0]]; }
        else if ($(this).hasClass('nickSortAsc')) { var sorting = [[1,0]]; }
        else if ($(this).hasClass('dateSortAsc')) { var sorting = [[0,0]]; }
        $("table.orphusTable").trigger("sorton",[sorting]); 
        return false; 
    });
});
