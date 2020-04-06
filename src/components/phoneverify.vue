<template>
    <div class="regiter-wrapper">
        <mt-header title="注册">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
            <mt-button @click="handleClose">返回</mt-button>
        </router-link>
        <!-- <mt-button icon="more" slot="right"></mt-button> -->
        </mt-header>
        手机验证码~
        <!-- <div>
            <h2>用手机号码注册</h2>
            <p>注册即代表阅读并同意<a href="">服务协议</a>和<a href="">又又隐私指引</a></p>
            <div>
                <span>+</span>
                <input type="text" />
            </div>                    
        </div> -->
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
    // div{
    //     div{
    //         height: 3rem;
    //         line-height: 3rem;
    //         border-bottom:1px solid #969696;
    //         color:#969696;
    //         span{
    //             font-size: 2rem;
    //         }
    //         input{
    //             background: transparent;
    //             padding-left: 1rem;
    //             &:focus{
    //                 outline: none;
    //             }
    //         }
    //     }       
    // }
}
</style>