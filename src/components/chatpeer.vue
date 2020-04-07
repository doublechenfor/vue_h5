<template>
    <div class="editblog-wrapper">
        <mt-header title="编辑博客">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
                <mt-button @click="handleClose">返回</mt-button>
            </router-link>
            <mt-button type="default" slot="right" @click="handleSendBlog">发送</mt-button>
        </mt-header>
        <div class="editblog-body">
            <textarea name="" id="" placeholder="分享新鲜事物......">{{$route.params.id}}</textarea>
        </div>
    </div>
</template>
<script>
export default {
    name:'chatpeer',
    methods:{
        handleClose(){
            this.$router.push({
                path:'/home/blog'
            })
        },
        handleSendBlog(){
            this.$router.push({
                path:'/home/blog'
            })
        }
    }
}
</script>
<style lang="scss">
.editblog-wrapper{
    width: 100%;
    overflow: hidden;
    .editblog-body{
        width: 100%;
        textarea{
            padding: 0.5rem 1rem;
            width: calc(100% - 2rem);
            height: 50vh;
            border: none;
            resize: none;
            &:focus{
                outline: none;
            }
        }
    }
}
</style>