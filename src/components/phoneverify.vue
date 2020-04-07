<template>
    <div class="phoneverif-wrapper">
        <mt-header title="手机登录">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
            <mt-button @click="handleClose">返回</mt-button>
        </router-link>
        <!-- <mt-button icon="more" slot="right"></mt-button> -->
        </mt-header>
        <div>
            <h2>+86 1887990665</h2>
            <div class="phoneverif-body">
                <span>验证码</span>
                <input type="text" />
                <mt-button :class="this.timeCode===60?'':'active-interval'" type="primary" @click="handleGetCode" >{{this.timeCode===60?'获取验证码':this.timeCode+' ms'}}</mt-button>
            </div>                    
        </div>
        <div class="phoneverif-login">
            <mt-button type="primary" size="large">登录</mt-button>
        </div> 
    </div>
</template>
<script>
var INTERVAL=null
export default {
    name:'register',
    data(){
        return{
            timeCode:60,
            hasSendCode:false
        }
    },
    methods:{
        handleClose(){
            this.$router.push({
                name:'login'
            })
        },
        handleGetCode(){
            INTERVAL=window.setInterval(()=>{
                this.timeCode===0?(
                    this.timeCode=60,
                    INTERVAL!==null?window.clearInterval(INTERVAL):INTERVAL=null
                    ):this.timeCode=this.timeCode-1
            },1000)
        },
    }
}
</script>
<style lang="scss" scoped>
.phoneverif-wrapper{
    width: 100%;
    height:calc(100% - 12vh);
    // padding-top: 12vh;
    h2{
        font-size: 2rem;
    }
    p{
        font-size: 1rem;
    }
    div{
        padding: 0.5rem 1rem;
        .phoneverif-body{
            border-bottom:1px solid #969696;
            color:#969696;
            display: grid;
            grid-template-columns: 20% 50% 30%;
            grid-template-rows: 3rem;
            justify-content: center;
            align-items: center;
            span{
                font-size: 1rem;
            }
            input{
                background: transparent;
                padding-left: 1rem;
                &:focus{
                    outline: none;
                }
            }
            button{
                font-size: 1rem;
            }
            .active-interval{
                label{
                    color:#fff;
                }
                background: #969696;
            }
        }      
    }
    .phoneverif-login{
        display: flex;
        justify-content: center;
    }
}
</style>