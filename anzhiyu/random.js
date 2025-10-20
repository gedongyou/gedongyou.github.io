var posts=["posts/eu-org域名申请教程/","posts/hexo的搭建/","posts/安装-Dell-OMSA/","posts/玩转console.log/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };