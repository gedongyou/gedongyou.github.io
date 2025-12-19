var posts=["posts/hexo的搭建/","posts/eu-org域名申请教程/","posts/安装-Dell-OMSA/","posts/玩转console.log/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };