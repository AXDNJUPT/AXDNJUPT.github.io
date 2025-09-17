var posts=["2025/09/10/RNN与CNN/","2025/09/15/B站前钰/","2025/07/30/jupyter设置与启动/","2025/07/08/hello-world/","2025/07/09/ssh/","2025/07/30/pytorch语法/","2025/09/17/wang/","2025/07/08/怎么用hexo创建blog/","2025/09/09/创建一个纯净的虚拟环境/","2025/09/09/有能的AI/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };