var hour=8;
var minute=50;
var period="AM";

if (minute < 30){minute="just past";}
else {minute="almost";
hour+=1}

if (period = "AM"){period="in the morning"}
else {period="in the evening"}

console.log("It is",minute,hour,period)


var hour=7;
var minute=15;
var period="PM";

if (minute < 30){minute="just past";}
else {minute="almost";}

if (period = "AM"){period="in the morning"}
else {period="in the evening"}

console.log("It is",minute,hour,period)
