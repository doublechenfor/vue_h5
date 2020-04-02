<template>
    <div class="imgbox-wrapper">
        <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in imgLists">
            <img class="loop-imgs" v-lazy="item" />
        </mt-swipe-item>
        </mt-swipe>
        <ul class="show-imgs">
            <li v-for="item in imgBlogs">
                <img v-lazy="item"/>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'imgbox',
    data(){
        return{
            imgLists:[
                require('../assets/images/door.jpg'),
                require('../assets/images/river.jpg'),
                require('../assets/images/city.jpg'),
                require('../assets/images/cat.jpg'),
            ],
            imgBlogs:[
                require('../assets/images/loli_1.png'),
                require('../assets/images/loli_2.jpg'),
                require('../assets/images/loli_3.png'),
                require('../assets/images/loli_4.jpg'), 
                require('../assets/images/loli_5.png'),                
            ]
        }
    }
}
</script>
<style lang="scss">
.imgbox-wrapper{
    width: 100vw;
    height:35vh;
    img[lazy=loading] {
        width: 100%;
        height:35%;
        margin: auto;
    }
    .loop-imgs{
        width: 100vw;
        height:35vh;
    }
    .show-imgs{
        width: 27rem;
        height:40rem;
        li{
            width: 100%;
            height:100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-top: 1rem;
            img{
                width: 100%;
                height:100%;
            }
        }       
    }
}
</style>