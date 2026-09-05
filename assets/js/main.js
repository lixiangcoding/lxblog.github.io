(function(){
  try{
    /* ---- 背景气泡：随机生成，数量随屏幕宽度收敛 ---- */
    var box=document.getElementById('bubbles');
    if(box){
      var n=window.innerWidth<640?10:18;
      for(var i=0;i<n;i++){
        var b=document.createElement('span');
        b.className='bubble';
        var size=4+Math.random()*14;
        b.style.left=(Math.random()*100)+'%';
        b.style.width=size+'px';b.style.height=size+'px';
        b.style.animationDuration=(9+Math.random()*12)+'s';
        b.style.animationDelay=(-Math.random()*16)+'s';
        box.appendChild(b);
      }
    }

    /* ---- 滚动显现 ---- */
    var reveals=document.querySelectorAll('.reveal');
    if('IntersectionObserver' in window){
      var io=new IntersectionObserver(function(entries){
        entries.forEach(function(e){
          if(e.isIntersecting){
            e.target.classList.add('in');
            var num=e.target.querySelector&&e.target.querySelector('.num');
            if(num) animateNum(num);
            io.unobserve(e.target);
          }
        });
      },{threshold:.18});
      reveals.forEach(function(el){io.observe(el)});
    }else{
      reveals.forEach(function(el){el.classList.add('in')});
    }

    /* ---- 数字滚动 ---- */
    function animateNum(el){
      if(el.dataset.done) return; el.dataset.done=1;
      var target=parseFloat(el.getAttribute('data-count'))||0;
      var suffix=el.getAttribute('data-suffix')||'';
      var prefix=el.getAttribute('data-prefix')||'';
      var dur=1300, t0=null;
      function step(ts){
        if(!t0) t0=ts;
        var p=Math.min((ts-t0)/dur,1);
        var ease=1-Math.pow(1-p,3);
        var v=Math.round(target*ease);
        el.innerHTML=prefix+v+'<span>'+suffix+'</span>';
        if(p<1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    // 兜底：若统计卡片未进入观察逻辑，3 秒后直接显示终值
    setTimeout(function(){
      document.querySelectorAll('.stat .num').forEach(function(el){
        if(!el.dataset.done){
          el.dataset.done=1;
          el.innerHTML=(el.getAttribute('data-prefix')||'')+el.getAttribute('data-count')+
            '<span>'+(el.getAttribute('data-suffix')||'')+'</span>';
        }
      });
    },3500);

    /* ---- 回到顶部 ---- */
    var btn=document.getElementById('toTop');
    if(btn){
      window.addEventListener('scroll',function(){
        if(window.scrollY>600) btn.classList.add('show'); else btn.classList.remove('show');
      },{passive:true});
      btn.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});
    }
  }catch(e){if(window&&window.console)console.error('page error:',e);}
})();
