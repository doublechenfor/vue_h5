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
                    <div class="socity-blog">
                        <ul>
                            <li v-for="(item,index) in socityLists">
                                <div>
                                    <h4>{{item.name}}</h4>
                                    <p>{{item.text.length>=60?item.text.substring(0,70)+'...':item.text}}</p>
                                    <img :src="item.src"/>
                                    <div class="socity-device">
                                        <svgIcon iconClass="smartphone"/>
                                        <p>{{item.device}}</p>
                                    </div>
                                    
                                    <div class="show-attitude">
                                        <svgIcon iconClass="thumb-down"/>
                                        <p>{{item.hate}}</p>                 
                                        <svgIcon iconClass="thumb-up"/>
                                        <p>{{item.like}}</p>
                                    </div>
                                    <div class="socity-comments" v-for="i in item.comments">
                                        <label>{{i.alias}}:</label>
                                        <p>{{i.comment}}</p>
                                    </div>
                                </div>
                                <input placeholder="评论" />
                            </li>
                        </ul>
                    </div>
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
            selected:'3',
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
            ],
            socityLists:[
                {name:'罗永浩', hate:5, device:'iphone 11(4G)',text:'罗永浩带货直播首秀交出的成绩单看起来不错。尽管很多人觉得直播的节奏过慢，且东西并不便宜，但罗永浩用7万多支中性笔几分钟售罄的“带货能力”表明，自己在互联网界仍旧具有举足轻重的影响力。为了请来罗永浩直播，抖音花了6000万。这6000万花得值吗？从罗永浩直播首秀带来的话题关注度看，这钱是花得值。对抖音而言，它需要开拓自己的直播业务和带货业务，增强自己的变现能力。如果从自身已有的中小主播中培养出一个李佳琪、薇娅级别的网红主播，需耗时很长且未必有成效。而请来本身具有巨大流量的罗永浩，能很快打响自身业务的知名度。很多人正是从昨夜罗永浩的直播中，第一次得知抖音还能直播卖货，也是第一次在抖音上买东西。同时，抖音也以此向品牌合作方宣示，自己拥有强大的卖货能力。这也会促成更多商家进驻抖音。',src:require('../assets/images/cat.jpg'),
                like:21, comments:[
                    {alias:'古道流水人家',comment:'罗永浩来嚯嚯直播带货咯~~'},
                    {alias:'飞鸟爱上鱼',comment:'4.1日的tik tok 直播,效果不行,不行!!'},
                ]},
                {name:'罗永浩', hate:5, device:'iphone 11(4G)',text:'罗永浩带货直播首秀交出的成绩单看起来不错。尽管很多人觉得直播的节奏过慢，且东西并不便宜，但罗永浩用7万多支中性笔几分钟售罄的“带货能力”表明，自己在互联网界仍旧具有举足轻重的影响力。为了请来罗永浩直播，抖音花了6000万。这6000万花得值吗？从罗永浩直播首秀带来的话题关注度看，这钱是花得值。对抖音而言，它需要开拓自己的直播业务和带货业务，增强自己的变现能力。如果从自身已有的中小主播中培养出一个李佳琪、薇娅级别的网红主播，需耗时很长且未必有成效。而请来本身具有巨大流量的罗永浩，能很快打响自身业务的知名度。很多人正是从昨夜罗永浩的直播中，第一次得知抖音还能直播卖货，也是第一次在抖音上买东西。同时，抖音也以此向品牌合作方宣示，自己拥有强大的卖货能力。这也会促成更多商家进驻抖音。',src:require('../assets/images/cat.jpg'),like:21, comments:[
                    {alias:'古道流水人家',comment:'罗永浩来嚯嚯直播带货咯~~'},
                    {alias:'飞鸟爱上鱼',comment:'4.1日的tik tok 直播,效果不行,不行!!'},
                ]},
                {name:'罗永浩', hate:5, device:'iphone 11(4G)',text:'罗永浩带货直播首秀交出的成绩单看起来不错。尽管很多人觉得直播的节奏过慢，且东西并不便宜，但罗永浩用7万多支中性笔几分钟售罄的“带货能力”表明，自己在互联网界仍旧具有举足轻重的影响力。为了请来罗永浩直播，抖音花了6000万。这6000万花得值吗？从罗永浩直播首秀带来的话题关注度看，这钱是花得值。对抖音而言，它需要开拓自己的直播业务和带货业务，增强自己的变现能力。如果从自身已有的中小主播中培养出一个李佳琪、薇娅级别的网红主播，需耗时很长且未必有成效。而请来本身具有巨大流量的罗永浩，能很快打响自身业务的知名度。很多人正是从昨夜罗永浩的直播中，第一次得知抖音还能直播卖货，也是第一次在抖音上买东西。同时，抖音也以此向品牌合作方宣示，自己拥有强大的卖货能力。这也会促成更多商家进驻抖音。',src:require('../assets/images/cat.jpg'),like:21, comments:[
                    {alias:'古道流水人家',comment:'罗永浩来嚯嚯直播带货咯~~'},
                    {alias:'飞鸟爱上鱼',comment:'4.1日的tik tok 直播,效果不行,不行!!'},
                ]},
                {name:'罗永浩', hate:5, device:'iphone 11(4G)',text:'罗永浩带货直播首秀交出的成绩单看起来不错。尽管很多人觉得直播的节奏过慢，且东西并不便宜，但罗永浩用7万多支中性笔几分钟售罄的“带货能力”表明，自己在互联网界仍旧具有举足轻重的影响力。为了请来罗永浩直播，抖音花了6000万。这6000万花得值吗？从罗永浩直播首秀带来的话题关注度看，这钱是花得值。对抖音而言，它需要开拓自己的直播业务和带货业务，增强自己的变现能力。如果从自身已有的中小主播中培养出一个李佳琪、薇娅级别的网红主播，需耗时很长且未必有成效。而请来本身具有巨大流量的罗永浩，能很快打响自身业务的知名度。很多人正是从昨夜罗永浩的直播中，第一次得知抖音还能直播卖货，也是第一次在抖音上买东西。同时，抖音也以此向品牌合作方宣示，自己拥有强大的卖货能力。这也会促成更多商家进驻抖音。',src:require('../assets/images/cat.jpg'),like:21, comments:[
                    {alias:'古道流水人家',comment:'罗永浩来嚯嚯直播带货咯~~'},
                    {alias:'飞鸟爱上鱼',comment:'4.1日的tik tok 直播,效果不行,不行!!'},
                ]},
                {name:'罗永浩', hate:5, device:'iphone 11(4G)',text:'罗永浩带货直播首秀交出的成绩单看起来不错。尽管很多人觉得直播的节奏过慢，且东西并不便宜，但罗永浩用7万多支中性笔几分钟售罄的“带货能力”表明，自己在互联网界仍旧具有举足轻重的影响力。为了请来罗永浩直播，抖音花了6000万。这6000万花得值吗？从罗永浩直播首秀带来的话题关注度看，这钱是花得值。对抖音而言，它需要开拓自己的直播业务和带货业务，增强自己的变现能力。如果从自身已有的中小主播中培养出一个李佳琪、薇娅级别的网红主播，需耗时很长且未必有成效。而请来本身具有巨大流量的罗永浩，能很快打响自身业务的知名度。很多人正是从昨夜罗永浩的直播中，第一次得知抖音还能直播卖货，也是第一次在抖音上买东西。同时，抖音也以此向品牌合作方宣示，自己拥有强大的卖货能力。这也会促成更多商家进驻抖音。',src:require('../assets/images/cat.jpg'),like:21, comments:[
                    {alias:'古道流水人家',comment:'罗永浩来嚯嚯直播带货咯~~'},
                    {alias:'飞鸟爱上鱼',comment:'4.1日的tik tok 直播,效果不行,不行!!'},
                ]},
                {name:'罗永浩', hate:5, device:'iphone 11(4G)',text:'罗永浩带货直播首秀交出的成绩单看起来不错。尽管很多人觉得直播的节奏过慢，且东西并不便宜，但罗永浩用7万多支中性笔几分钟售罄的“带货能力”表明，自己在互联网界仍旧具有举足轻重的影响力。为了请来罗永浩直播，抖音花了6000万。这6000万花得值吗？从罗永浩直播首秀带来的话题关注度看，这钱是花得值。对抖音而言，它需要开拓自己的直播业务和带货业务，增强自己的变现能力。如果从自身已有的中小主播中培养出一个李佳琪、薇娅级别的网红主播，需耗时很长且未必有成效。而请来本身具有巨大流量的罗永浩，能很快打响自身业务的知名度。很多人正是从昨夜罗永浩的直播中，第一次得知抖音还能直播卖货，也是第一次在抖音上买东西。同时，抖音也以此向品牌合作方宣示，自己拥有强大的卖货能力。这也会促成更多商家进驻抖音。',src:require('../assets/images/cat.jpg'),like:21, comments:[
                    {alias:'古道流水人家',comment:'罗永浩来嚯嚯直播带货咯~~'},
                    {alias:'飞鸟爱上鱼',comment:'4.1日的tik tok 直播,效果不行,不行!!'},
                ]}
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
    background: #F4F4F4;
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
        background: #F4F4F4;
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
    // 朋友圈
    .socity-blog{
        width: 100vw;
        padding: 0.5rem 0;
        padding-bottom: 55px;
        background: #F4F4F4;
        ul{
            width: 100%;
            li{ 
                padding: 0 0.5rem;
                background: #fff;
                margin-bottom: 1rem;
                & >:first-child{
                    h4{
                        padding: 0.5rem;
                    }
                    p{
                        line-height: 1.5rem;
                    }
                    img{
                        min-width: 6rem;
                        width: auto;
                        height: 8rem;
                    }
                }
                input{
                    height: 2rem;
                    width: calc(100% - 1rem);
                    background: #F4F4F4;
                    margin: 0.5rem 0;
                    border-radius: 0.3rem;
                    padding: 0.1rem 0.5rem;
                    &:focus{
                        outline: none;
                    }
                }
                .socity-device{
                    display: flex;
                    flex-direction: row;
                    align-items:center;
                    color: #969696;
                    svg{
                        fill: #969696;
                        stroke: #969696;
                    }
                }
                .show-attitude{
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                    padding-bottom: 0.5rem;
                    margin-bottom: 0.5rem;
                    border-bottom: 1px solid #F4F4F4;
                    p{
                        margin-right: 1rem;
                    }
                }
                .socity-comments{
                    display: flex;
                    flex-direction: row;
                    line-height: 1.5rem;
                    label{
                        color: #26A2FF;
                    }
                    p{
                        margin-left: 0.5rem;
                    }
                }
            }
        }
    }
}
</style>