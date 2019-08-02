<template>
  <div id="login">
    
    <van-row id="top-group" type="flex" justify="space-between">
      <van-col span="5">
        <van-button type="default">取消</van-button>
      </van-col>
      <van-col span="5">
        <van-button type="default">注册</van-button>
      </van-col>
    </van-row>
    <van-row type="flex" justify="center" style="margin-top:10px">
      <van-col span="6" style="width:80px;">
        <img src="../../assets/image/login/wk-icon.jpg" class="login-logo" />
      </van-col>
    </van-row>
    <van-row type="flex" justify="center">
      <van-cell-group class="input-group" >
        <van-field
          v-model="phone"
          style="height:40px; line-height:40px;"
          placeholder="请输入手机号"
          label="账号"
          left-icon="contact"
        />
        <van-field
          style="height:40px; line-height:40px;"
          v-model="password"
          type="password"
          label="密码"
          left-icon="closed-eye"
          placeholder="请输入密码"
        />
        <van-button class="wjpwd-round-btn" round size="small" type="danger">忘记密码</van-button>
      </van-cell-group>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      phone: "",
      password: ""
    };
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  border: 0;
}
ul {
  list-style: none;
}
img {
  width: 100%;
  display: block;
}
#top-group {
  margin-top: 15px;
}
#top-group div {
  text-align: center;
}
.van-button--normal {
  width: 100%;
  height: 35px;
  line-height: 35px;
}
.login-logo {
  border-radius: 6px;
}
.input-group{
    margin-top: 15px;
    position: relative;
}
.wjpwd-round-btn{
    width:70px;
    position: absolute;bottom:-40px;right:0;
}
</style>
