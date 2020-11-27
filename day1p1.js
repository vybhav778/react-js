day=new Date();
var christmas=new Date(day.getFullYear(), 11, 25);
if (day.getMonth()==11 && day.getDate()>25) 
{
christmas.setFullYear(christmas.getFullYear()+1); 
}  
var one_day=1000*60*60*24;
console.log(Math.ceil((christmas.getTime()-day.getTime())/(one_day))+
" days left until next Christmas!");