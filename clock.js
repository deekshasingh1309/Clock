function clock()
{
    var d = new Date();
    var hours = d.getHours(); // 0 - 23
    var minutes = d.getMinutes(); // 0 - 59
    var seconds = d.getSeconds(); // 0 - 59
    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();
    var day= d.getDay();
    var meridian=" ";
    if(hours>12)
    {
        meridian= "PM";
        hours=hours-12;
    }
    else
    {
        meridian= "AM";
    }
    var dayName=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var monthName=["January","February","March","April","May","June","July","August","September","October","November","December"];
    var time= date + ":" + monthName[month] + ":" + year + ": "+ dayName[day];
    console.log(time);
    var display = hours + ":" + minutes + ":" + seconds + " "+ meridian;
    console.log(display);
    setTimeout(clock, 1200);
}
clock();