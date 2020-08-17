
window.onload = function () {
    let dd1 = document.querySelectorAll('.layui-nav-tree .layui-nav-item:first-child .layui-nav-child>dd');
    let dd2 = document.querySelectorAll('.layui-nav-tree .layui-nav-item:nth-child(2) .layui-nav-child>dd');
    let dd3 = document.querySelectorAll('.layui-nav-tree .layui-nav-item:nth-child(3) .layui-nav-child>dd');
    let dd4 = document.querySelectorAll('.layui-nav-tree .layui-nav-item:nth-child(4) .layui-nav-child>dd');
    let dd5 = document.querySelectorAll('.layui-nav-tree .layui-nav-item:nth-child(5) .layui-nav-child>dd');

    // let dd1 = document.querySelectorAll('.layui-nav-tree .layui-nav-child');
    let nav = document.querySelectorAll('.layui-nav.layui-nav-tree .layui-nav-item>a');
    console.log(nav);
    // console.log(dd);
    let img = document.querySelectorAll('.layui-nav.layui-nav-tree .layui-nav-item>a>img');

    for (var i = 0; i < nav.length; i++) {
        nav[i].onmouseenter = function () {//鼠标移入
            this.style.backgroundColor = '#4a91e1';
            // nav[0].style.backgroundColor = '#4a91e1';
            this.style.color = '#fff';
            
        }
        nav[i].onmouseleave = function () {
            this.style.backgroundColor = '#fff';
            // nav[0].style.backgroundColor = '#fff';
            this.style.color = '#000';
        }
    }
    for (var i = 0; i < dd1.length; i++) {
        dd1[i].onmouseenter = function () {//鼠标移入
            this.style.backgroundColor = '#4a91e1';
            nav[0].style.backgroundColor = '#4a91e1';
            nav[0].style.color = '#fff';
            img[0].src='./images/11.png';
        }
        dd1[i].onmouseleave = function () {
            this.style.backgroundColor = '#f7f7f7';
            nav[0].style.backgroundColor = '#fff';
            nav[0].style.color = '#000';
            img[0].src='./images/1.png';
        }
    }
    for (var i = 0; i < dd2.length; i++) {
        dd2[i].onmouseenter = function () {//鼠标移入
            this.style.backgroundColor = '#4a91e1';
            nav[1].style.backgroundColor = '#4a91e1';
            nav[1].style.color = '#fff';
            img[1].src='./images/22.png';
        }
        dd2[i].onmouseleave = function () {
            this.style.backgroundColor = '#f7f7f7';
            nav[1].style.backgroundColor = '#fff';
            nav[1].style.color = '#000';
            img[1].src='./images/2.png';
        }
    }
    for (var i = 0; i < dd3.length; i++) {
        dd3[i].onmouseenter = function () {//鼠标移入
            this.style.backgroundColor = '#4a91e1';
            nav[2].style.backgroundColor = '#4a91e1';
            nav[2].style.color = '#fff';
            img[2].src='./images/33.png';

        }
        dd3[i].onmouseleave = function () {
            this.style.backgroundColor = '#f7f7f7';
            nav[2].style.backgroundColor = '#fff';
            nav[2].style.color = '#000';
            img[2].src='./images/3.png';

        }
    }
    for (var i = 0; i < dd4.length; i++) {
        dd4[i].onmouseenter = function () {//鼠标移入
            this.style.backgroundColor = '#4a91e1';
            nav[3].style.backgroundColor = '#4a91e1';
            nav[3].style.color = '#fff';
            img[3].src='./images/44.png';
        }
        dd4[i].onmouseleave = function () {
            this.style.backgroundColor = '#f7f7f7';
            nav[3].style.backgroundColor = '#fff';
            nav[3].style.color = '#000';
            img[3].src='./images/4.png';
        }
    }
    for (var i = 0; i < dd5.length; i++) {
        dd5[i].onmouseenter = function () {//鼠标移入
            this.style.backgroundColor = '#4a91e1';
            nav[4].style.backgroundColor = '#4a91e1';
            nav[4].style.color = '#fff';
            img[4].src='./images/55.png';
        }
        dd5[i].onmouseleave = function () {
            this.style.backgroundColor = '#f7f7f7';
            nav[4].style.backgroundColor = '#fff';
            nav[4].style.color = '#000';
            img[4].src='./images/5.png';

        }
    }


     nav[0].onmouseover=function(){
         img[0].src='./images/11.png';
         nav[0].onmouseout=function(){
             img[0].src='./images/1.png';
         }
     }
     nav[1].onmouseover=function(){
         img[1].src='./images/22.png';
         nav[1].onmouseout=function(){
             img[1].src='./images/2.png';
         }
     }
     nav[2].onmouseover=function(){
         img[2].src='./images/33.png';
         nav[2].onmouseout=function(){
             img[2].src='./images/3.png';
         }
     }
     nav[3].onmouseover=function(){
         img[3].src='./images/44.png';
         nav[3].onmouseout=function(){
             img[3].src='./images/4.png';
         }
     }
     nav[4].onmouseover=function(){
         img[4].src='./images/55.png';
         nav[4].onmouseout=function(){
             img[4].src='./images/5.png';
         }
     }

}
