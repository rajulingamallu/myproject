
   function formvalidations()
   {
       //Target_uname_input
     
      var pwd_input=document.getElementById(`pwd`)
      var cpwd_input=document.getElementById(`cpwd`)
      var status=true
      
   
      //errors
      
      var pwd_span=document.getElementById(`pwd_span`)
      var cpwd_span=document.getElementById(`cpwd_span`)
   
   
      //icons
      var wrong= `<i class="bi bi-exclamation-circle-fill"></i>`
      var right= `<i class="bi bi-check-circle-fill"></i>`
   
   
      
      
       //password
       if(pwd_input.value==""|| cpwd_input.value=="")
       {
        // alert("Enter password")  
        pwd_span.innerHTML=`${wrong}Enter  Password`
        cpwd_span.innerHTML=`${wrong}Enter  Password`
        pwd_input.style.border="3px solid #f00c0c"
        cpwd_input.style.border="3px solid #f00c0c"
        //pwd_span.style.color="red" //JS css
        pwd_span.className="text-danger" //js bootstrap
        cpwd_span.className="text-danger" //js bootstrap
        status=false;
       }
       else if(pwd_input.value!==cpwd_input.value)
       {
        cpwd_span.innerHTML=`${wrong}Password didn't match`
        
        cpwd_input.style.border="3px solid #f00c0c"
        //pwd_span.style.color="red" //JS css
        cpwd_span.className="text-danger" //js bootstrap
        status=false;
    
       }
       else
       {
        
          cpwd_span.innerHTML=`${right}Passwords matched`
           cpwd_input.style.border="3px solid #076604"
           cpwd_span.className="text-success" //js bootstrap
           
       }
       return status
   }