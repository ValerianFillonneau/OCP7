<template>
<div>
    <div class="top-bar">
        <h1>
            My Forum
        </h1>
    </div>
    <div class="main">
        <div class="header">
                <h4 class="title">
                    Thread 1
                </h4>
                <div class="bottom">
                    <p class="comment-ts">10/10/2022</p>
                    <p class="comment-count">4 comments</p>
                </div>
            </div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>ajoutez un commentaire</button>
            <div class="comments">
                <div class="ccomment">
                <div class="top-comment">
                    <p class="user">Paul</p>
                    <p class="comment-count">4 comments</p>
                </div>
                <div class="comment-content">
                    Mettre un commentaire ici
                </div>
            </div>
        </div>
    </div>
    
</div>
</template>

<style scoped lang="scss">
  body {
    margin: 10px 60px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  h4 {
    margin: 0;
  }
  p {
    margin: 5px 0;
  }
  textarea {
      width: 80%;
      height: 80%;
  }
  button {
      display: block;
      margin: 10px 0;
  }
  .top-bar {
    background-color: skyblue;
    padding: 0;
  }
  .main {
    background-color: #F6F6EF;
    padding: 10px 40px;
  }
  .comments {
      margin: 40px 0;
  }
  .comment {
      margin: 10px 0;
  }
  .row {
    padding: 5px 0;
  }
  .bottom {
    display: flex;
    color: grey;
    font-size: 12px;
    margin: 0;
  }
  .comment-ts {
    padding-right: 10px;
  }
</style>

<script>
export default {
    name: 'OnePost'
}
</script>