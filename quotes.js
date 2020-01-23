    function load() {
        
           var xhttp=new XMLHttpRequest();
           xhttp.onreadystatechange=function(){
               if(this.readyState==4 && this.status==200){
                  var myArr = JSON.parse(this.responseText);
                  var x=myArr.quotes[currentItem];
                document.getElementById("demo").innerHTML=x.quote ;
                document.getElementById("text").innerHTML=x.author;
                document.getElementById("prev-quote")
                 document.getElementById("next-quote")
               }
           };
           xhttp.open("GET","https://gist.githubusercontent.com/balasubramanim/95406cbd0e17d63085de11a1f13e06b3/raw/",true);
           xhttp.send();
       }  

       load();
       var currentItem = 0;
       window.onload=function() {
           document.getElementById("prev-quote").onclick=function() {
              currentItem--;
              
               if(currentItem<=0) {
                   currentItem=0;
               }
               document.body.style.backgroundColor=getRandomColor();
               load();
           }
           document.getElementById("next-quote").onclick=function() {
               load();
               currentItem++;
               document.body.style.backgroundColor=getRandomColor();
               if(currentItem==102)
               {
                   currentItem=0;
               }
           }
       }
       
      function getRandomColor() {
          var letters='0123456789ABCDEF'
       var color= '#';
                for(i=0;i<6;i++)         
                {
               color += letters[Math.floor(Math.random() * 16)];
                } 
                return color;
            };