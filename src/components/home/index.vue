<template>
    <div class="tabbar-box">
        <router-view></router-view>
        <mt-tabbar fixed v-model="selected">
        <mt-tab-item id="imgbox">
            <svgIcon slot="icon" iconClass="arrow-right-top"/>
            图册
        </mt-tab-item>
        <mt-tab-item id="blog">
            <svgIcon slot="icon" iconClass="calendar-event"/>
            博客
        </mt-tab-item>
        <mt-tab-item id="chat">
            <svgIcon slot="icon" iconClass="bell"/>
            聊天
        </mt-tab-item>
        <mt-tab-item id="my">
            <svgIcon slot="icon" iconClass="accessibility-human"/>
            我的
        </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
import svgIcon from 'cs-com-csicons-svg'
export default {
    name:'home',
    data(){
        return{
            selected:''
        }
    },
    watch:{
        selected:{
            immediate:true,
            handler(newVal){
                this.$router.push({
                    path:`/home/${newVal}`
                })
            }
        }
    },
    created(){
        this.$router.push({
                    path:`/home/imgbox`
        })
    },
    components:{
        svgIcon
    },
    methods:{
        
    }
}
</script>
<style lang="scss">
.tabbar-box{
    svg{
        width: 1rem;
        height:1rem;
        color:#333;
        stroke:#333;
        display:inline-block;
    }
}
</style>