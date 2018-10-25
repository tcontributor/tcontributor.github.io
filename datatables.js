// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable({
        "ajax": 'data/rewards.json',
        "deferRender": true,
        "order": [[ 0, "desc" ], [ 4, "desc" ]]        
    });
});



