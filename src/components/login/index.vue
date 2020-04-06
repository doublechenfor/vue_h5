<template>
    <div id="wrapper" class="wrapper">
        <div class="login-box div-user">
            <label for="">用户名</label>
            <input type="text" value="chenshuang4">
        </div>
        <div class="login-box div-password">
            <label for="">密码</label>
            <input type="password" value="chenshuang4">
        </div>
        <div class="login-link">
            <div class="login-pw-register">
                <router-link :to="{name:'forgetpw'}">忘记密码</router-link>
                <router-link  :to="{name:'register'}">注册</router-link>
            </div>
            <router-link :to="{name:'phoneverify'}">其他方式登录</router-link>
        </div>
        <div class="login-submit">
            <mt-button type="default" @click.native="handleLogin">登录</mt-button>
        </div>
    </div>
</template>
<script>
export default {
    name:'login',
    props:{},
    mounted(){
        let wrapper = document.getElementById('wrapper')
        wrapper.addEventListener('touchmove', (e) => {
            e.stopPropagation()
            e.preventDefault()
        }, false)
    },
    methods:{
        handleLogin(){
            this.$router.push({
                name:'home'
            })
        }
    }
}
</script>
<style lang="scss">
.wrapper{
    width:100vw;
    height:calc(100% - 20vh);
    overflow: hidden;
    background: url(../../assets/images/login_wrapper.jpg) no-repeat center center;
    background-size: cover;
    display:flex;
    padding-top: 20vh;
    flex-direction: column;
    align-items: center;
    .login-box{
        width: 18rem;
        height: 3rem;
        display: grid;
        grid-template-columns: 4rem 14rem;
        grid-template-rows: 3rem;
        align-items: center;
        padding: 1rem 1rem;
        input{
            height:100%;
            padding:0 1rem;
            border-radius: 0.5rem;
            &:focus{
                outline: none;
            }
        }
    }
    .login-link{
        width: 18rem;
        // height: 2rem;
        margin-top: -0.5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        .login-pw-register{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 100%;
            grid-gap: 0.5rem;
        }
    }
    .login-submit{
        width: 18rem;
        display: flex;
        justify-content: flex-end;
        margin-top: 1rem;
    }
}
</style>