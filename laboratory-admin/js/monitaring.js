window.onload=function(){
    let laboratory=this.document.querySelectorAll('.wtx-laboratory-msg');
    for(var i=0;i<laboratory.length;i++){
        laboratory[i].onmouseenter=function(){
           
           this.style.width="50%";
           this.style.transition="all linear 300ms";
           
       }
       laboratory[i].onmouseleave=function(){
         
          this.style.width="0px";
          this.style.transition="all linear 300ms";
         
      }
    }
    
}