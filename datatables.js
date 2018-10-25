// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable({
        "ajax": 'data/rewards.json'
        ,"order": [[ 0, "desc" ], [ 4, "desc" ]]        
    });
});



