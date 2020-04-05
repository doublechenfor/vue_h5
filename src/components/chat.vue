<template>
    <div class="chat-wrapper">
        <mt-navbar v-model="selected">
        <mt-tab-item id="1">聊天列表</mt-tab-item>
        <mt-tab-item id="2">联系人列表</mt-tab-item>
        <mt-tab-item id="3">生态圈</mt-tab-item>
        </mt-navbar>
        <mt-loadmore autoFill  ref="loadmore">
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <ul class="chat-list">
                        <li v-for="item in chatLists">
                            <img :src="item.icon" alt="">
                            <div class="chat-list-body">
                                <label for="">{{item.name}}</label>
                                <p>{{item.msg}}</p>
                            </div>
                            <div class="chat-list-info">
                                <p>{{item.timestamp}}</p>
                                <div>
                                    <mt-badge size="small">{{item.unreadNum}}</mt-badge>
                                </div>
                                
                            </div>
                        </li>
                    </ul>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <div class="chat-solity">
                        <div class="chat-group-li" v-for="(item,index) in userLists" :key="index">
                            <div @click="handleShowList(index)">
                                <svgIcon :iconClass="!item.hide?'chevron-up':'chevron-down'"/>
                                <label for="">{{item.group}}</label>
                                <label for="">{{item.onlineNum}}/{{item.num}}</label>
                            </div>
                            <transition>
                                <ul v-show="!item.hide">
                                    <li v-for="i in item.list">
                                        <img :src="i.icon"/>
                                        <div>
                                            <label>{{i.alias}}</label>
                                            <p>{{i.device}}</p>
                                        </div>
                                    </li>
                                </ul>
                            </transition>
                        </div>
                    </div>
                    
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                    <mt-cell v-for="n in 6" :title="'选项 ' + n" />
                </mt-tab-container-item>
        </mt-tab-container>
        </mt-loadmore>
        <!-- tab-container -->

    </div>
</template>
<script>
import svgIcon from 'cs-com-csicons-svg'
export default {
    name:'chat',
    data(){
        return{
            selected:'1',
            chatLists:[
                {name:'张三', msg:'明天会不会放假?',icon:require('../assets/images/cat.jpg'),timestamp:'13:40',unreadNum:20},
                {name:'史密斯', msg:'hello?',icon:require('../assets/images/cat.jpg'),timestamp:'13:40',unreadNum:20},
                {name:'老五', msg:'明天会不会放假?',icon:require('../assets/images/cat.jpg'),timestamp:'13:40',unreadNum:20},
                {name:'张三', msg:'明天会不会放假?',icon:require('../assets/images/cat.jpg'),timestamp:'13:40',unreadNum:20},
                {name:'张三', msg:'明天会不会放假?',icon:require('../assets/images/cat.jpg'),timestamp:'13:40',unreadNum:20},
                {name:'张三', msg:'明天会不会放假?',icon:require('../assets/images/cat.jpg'),timestamp:'13:40',unreadNum:20},
                {name:'张三', msg:'明天会不会放假?',icon:require('../assets/images/cat.jpg'),timestamp:'13:40',unreadNum:20},
                {name:'张三', msg:'明天会不会放假?',icon:require('../assets/images/cat.jpg'),timestamp:'13:40',unreadNum:20},
            ],
            userLists:[
                {group:'我的好友', hide:true,num:50,onlineNum:20,list:[
                    {icon:require('../assets/images/cat.jpg'),device:'4G在线',alias:'jesse'},
                    {icon:require('../assets/images/cat.jpg'),device:'4G在线',alias:'春秋游'},
                    {icon:require('../assets/images/cat.jpg'),device:'4G在线',alias:'王五'},
                    {icon:require('../assets/images/cat.jpg'),device:'4G在线',alias:'罗大佑'},
                ]},
                {group:'我的家人', hide:true, num:50,onlineNum:20,list:[
                    {icon:require('../assets/images/cat.jpg'),device:'4G在线',alias:'jesse'},
                    {icon:require('../assets/images/cat.jpg'),device:'4G在线',alias:'春秋游'},
                    {icon:require('../assets/images/cat.jpg'),device:'4G在线',alias:'王五'},
                    {icon:require('../assets/images/cat.jpg'),device:'4G在线',alias:'罗大佑'},
                ]},
                {group:'我的同学', hide:true, num:50,onlineNum:20,list:[
                    {icon:require('../assets/images/cat.jpg'),device:'4G在线',alias:'jesse'},
                    {icon:require('../assets/images/cat.jpg'),device:'4G在线',alias:'春秋游'},
                    {icon:require('../assets/images/cat.jpg'),device:'4G在线',alias:'王五'},
                    {icon:require('../assets/images/cat.jpg'),device:'4G在线',alias:'罗大佑'},
                ]},
                {group:'我的老朋友', hide:true, num:50,onlineNum:20,list:[
                    {icon:require('../assets/images/cat.jpg'),device:'4G在线',alias:'jesse'},
                    {icon:require('../assets/images/cat.jpg'),device:'4G在线',alias:'春秋游'},
                    {icon:require('../assets/images/cat.jpg'),device:'4G在线',alias:'王五'},
                    {icon:require('../assets/images/cat.jpg'),device:'4G在线',alias:'罗大佑'},
                ]},
                
            ]
        }
    },
    components:{
        svgIcon
    },
    methods:{
        loadTop(){},
        handleTopPull(){},
        handleShowList(index){
            this.userLists[index].hide=!this.userLists[index].hide
        }
    }
}
</script>
<style lang="scss">
.chat-wrapper{
    width: 100vw;
    height: 100vh;
    .chat-list{
        width: calc(100% - 2rem);
        margin-bottom: 55px;
        padding: 0.5rem 1rem;
        li{
            width: 100%;
            height:10vh;
            display: grid;
            grid-template-columns: 4rem calc(80% - 4rem) 20%;
            grid-template-rows: 10vh;
            align-items: center;
            padding: 1rem 0;
            justify-content: center;
            border-bottom: 0.1rem solid #E3E3E3;
            img{
                width: 4rem;
                height:4rem;
                border-radius: 50%;
            }
            .chat-list-body{
                padding-left:0.7rem;
            }
            .chat-list-info{
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                p{
                    display: block;
                    height: 5vh;
                    line-height: 5vh;
                }
                div{
                    display: flex;
                    align-items: center;
                    height: 50%;
                }
            }
        }
    }
    // ....联系人列表
    .chat-solity{
        width:calc(100% - 2rem);
        margin-bottom: 55px;
        padding: 0.5rem 1rem;
        .chat-group-li{
            width: 100%;
            &>:first-child{
                width: 100%;
                height: 8vh;
                display: grid;
                grid-template-rows: 100%;
                grid-template-columns: 5% 80% 15%;
                align-items: center;   
            }
            ul{
                width: calc(100% - 4rem);
                padding: 0.5rem 2rem;
                li{
                    width: 100%;
                    height:8vh;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    margin-bottom: 0.7rem;
                }
                img{
                    width: 2.4rem;
                    height:2.4rem;
                    border-radius: 50%;
                }
                div{
                    margin-left: 0.5rem;
                    label{
                        font-size: 1rem;
                        height:4vh;
                        line-height:4vh;
                        display: block;
                    }
                    p{   
                        height:4vh;
                        line-height:4vh;
                        display: block;                     
                        font-size: 0.7rem;
                        color: #B9B9B9;
                    }
                }
            }
        }
    }
}
</style>