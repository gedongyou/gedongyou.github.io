var posts=["posts/eu-org域名申请教程/","posts/hexo的搭建/","posts/玩转console.log/","posts/安装-Dell-OMSA/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };