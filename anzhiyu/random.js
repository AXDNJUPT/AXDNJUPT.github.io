var posts=["2025/07/08/hello-world/","2025/07/09/ssh/","2025/07/08/怎么用hexo创建blog/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };