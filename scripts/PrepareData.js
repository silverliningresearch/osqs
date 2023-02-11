var quota_data;
var download_time;
var total_quota = 2500;
var completed_interview;
/************************************/
function prepareData() {
  raw_data = JSON.parse(weekly_plan);
 
  var i = 0;
  completed_interview = 0;
  quota_data = [];
  quota_data.length = 0;
  for (i = 0; i<raw_data.length; i++ )
  {
    var item = raw_data[i];
    if (item.Completed) 
    {
      completed_interview = completed_interview + item.Completed;
    }
    if (item && item.Missing>0) 
    {
      quota_data.push(item);
    }
  }
  total_remaining = total_quota - completed_interview;
}
