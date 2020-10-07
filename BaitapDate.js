// Bai1
var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
document.write(utc);

// Bai2

var getDaysInMonth = function(month,year) {
    return new Date(year, month, 0).getDate();
};
console.log(getDaysInMonth(1, 2012));
console.log(getDaysInMonth(2, 2019));
console.log(getDaysInMonth(9, 2013));
console.log(getDaysInMonth(12, 2020));

// Bai 3

var is_weekend =  function(date1){
    var dt = new Date(date1);
     
    if(dt.getDay() == 6 || dt.getDay() == 0)
       {
        return "weekend";
        } else return false;
}
console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Dec 12, 2017'));
console.log(is_weekend('Oct 4, 2020'));
console.log(is_weekend('Mar 13, 2020'));

// Bai 4

function time_convert(num)
 { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  return hours + ":" + minutes;         
}

console.log(time_convert(71));
console.log(time_convert(450));
console.log(time_convert(1441));

// Bai 5

function days_passed(dt) {
    var current = new Date(dt.getTime());
    var previous = new Date(dt.getFullYear(), 0, 1);
  
    return Math.ceil((current - previous + 1) / 86400000);
  }
  console.log(days_passed(new Date(2015, 0, 15)));
  console.log(days_passed(new Date(2015, 11, 14)));

// Bai 6

function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

console.log(calculate_age(new Date(1982, 11, 4)));

console.log(calculate_age(new Date(1991, 12, 15)));

// Bai 7

function getMonday(d) {
  d = new Date(d);
  var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:1);
  return new Date(d.setDate(diff));
}

getMonday(new Date()); 

// Bai 8

var lastday = function(y,m){
  return  new Date(y, m +1, 0).getDate();
  }
  console.log(lastday(2014,0));
  console.log(lastday(2014,1));
  console.log(lastday(2020,10));

// Bai 9

today=new Date();
var cmas=new Date(today.getFullYear(), 11, 25);
if (today.getMonth()==11 && today.getDate()>25) 
{
cmas.setFullYear(cmas.getFullYear()+1); 
}  
var one_day=1000*60*60*24;
console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+ 6 +
" days left until New Year!");

// Bai 10

var dt = new Date("December 30, 2017 11:20:25");
dt.setSeconds( dt.getSeconds() + 1000 );
document.write( dt );