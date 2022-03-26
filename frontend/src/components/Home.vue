<template>
<div>
  <div class="top-bar">
      <h1>
          My Forum
      </h1>
  </div>
  <div class="main">
      <ol>
          <li class="row">
            <router-link to="/detail">
                <h4 class="title">
                    Thread 1
                </h4>
                <div class="bottom">
                    <p class="timestamp">10/10/2022</p>
                    <p class="comment-count">4 comments</p>
                </div>
            </router-link>
              
          </li>
          <li class="row">
              <h4 class="title">
                  Thread 2
              </h4>
              <div class="bottom">
                  <p class="timestamp">10/10/2022</p>
                  <p class="comment-count">10 comments</p>
              </div>
          </li>
      </ol>
  </div>
</div>
</template>

<script>
export default {
  name: 'HomeComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  body {
    margin: 10px 60px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  h4 {
    text-align: left;
    margin: 0;
  }
  p {
    margin: 5px 0;
  }
  .top-bar {
    background-color: skyblue;
    padding: 0;
  }
  .main {
    background-color: #F6F6EF;
    padding: 10px 15px;
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
  .timestamp {
    padding-right: 10px;
  }
</style>