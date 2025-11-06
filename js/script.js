var btn =document.querySelector(".main #btn");
var cnt = document.querySelector(".quote-container");
var q = document.querySelector(".main .quote-container #quote");
var quote = ["lets do it", "dont think just do","maker vibes","banana....","be kind!"];
var fav = [];
var fi = document.querySelector(".favt");


 var index;
 btn.addEventListener("click",function(){

    index = Math.floor(Math.random()*(quote.length));

    var qt= quote[index];

    q.textContent = qt;

    if(fav.includes(qt)){
      cnt.classList.add("fav");
      fi.style.color="red";
    }
    else{
      cnt.classList.remove("fav")
      fi.style.color="grey";
    }
 })
fi.addEventListener("click",function(){
      var cq = q.textContent;
      if (fav.includes(cq)){
         var idx = fav.indexOf(cq);
         fav.splice(idx,1);
         cnt.classList.remove("fav");
         fi.style.color="grey";
   }
   else{
      fav.push(cq);
      cnt.classList.add("fav");
      fi.style.color="red";
   }

})
