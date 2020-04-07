<template>
    <div class="regiter-wrapper">
        <mt-header title="账号找回">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
            <mt-button @click="handleClose">返回</mt-button>
        </router-link>
        <!-- <mt-button icon="more" slot="right"></mt-button> -->
        </mt-header>
        <div>
            <h2>输入手机号码</h2>
            <div>
                <span>+86</span>
                <input type="text" />
            </div>                    
        </div>
        <div class="register-submit">
            <mt-button type="default" @click.native="handleAuth">确定</mt-button>
        </div>
    </div>
</template>
<script>
export default {
    name:'register',
    methods:{
        handleClose(){
            this.$router.push({
                name:'login'
            })
        }
    }
}
</script>
<style lang="scss">
.regiter-wrapper{
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
        div{
            height: 3rem;
            line-height: 3rem;
            border-bottom:1px solid #969696;
            color:#969696;
            span{
                font-size: 2rem;
            }
            input{
                background: transparent;
                padding-left: 1rem;
                &:focus{
                    outline: none;
                }
            }
        }       
    }
    .register-submit{
        display: flex;
        justify-content: flex-end;
        margin-top: 1rem;
    } 
}
</style>