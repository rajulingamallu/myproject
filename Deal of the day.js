function dealofTheDay()
{
    //set the date we're counting down to
    var countDownDate=new Date("Dec 24,2022 00:00:00").getTime();

    //update the count down every 1second
    var x= setInterval (function()
    {
        //Get todays date and time
        var now= new Date().getTime();//current time

        //find the distance b/w now and the cound down date
        var distance= countDownDate - now ; //msec...8763524345678099875643234567
   
        //document.write (distance+"<br/>");
        //time calculations for days,hours,minutes and seconds
        var days =Math.floor(distance / (1000 * 60  *60 * 24));
        var hours =Math.floor((distance % (1000 * 60 *60 * 24)) / (1000  * 60 * 60));
        var minutes =Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds =Math.floor((distance % (1000*60)) /(1000));

        //output the result in an element with id="demo"
        document.getElementById("demo").innerHTML=days+"days"+hours+"h"
        +minutes+"m"+seconds+"s";
        /*
        document.getElementById("demo").innerHTML=hours+":"
        +minutes+":"+seconds;
        */
       //if the count down is over,write some text
       if (distance < 0)
       {
        clearInterval(x);//stop setinterval functionality
        document.getElementById("demo").innerHTML="OFFER EXPIRED"
       }
    },1000);
}