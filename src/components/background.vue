<template>
    <div class="appBackground p-5" >
        <img class="triangle" src="./../assets/images/triangle.png">
        <b-container-fluid class="bv-example-row">
            <b-row>
                <b-col lg="2">         
                    <sideBar/>
                </b-col>
                <b-col lg="10" class="p-0">
                    <div class="">
                        <topBar/>
                    </div>
                   <home />
                </b-col>
            </b-row>
        </b-container-fluid>

    </div>
</template>
<script>
import sideBar from './sideBar.vue'
import topBar from './topBar.vue'
import home from './home.vue'
export default {
    name:"background",
    components: {
        sideBar,topBar,home
  }
}
</script>

<style scoped>
    .appBackground{
        background: url("./../assets/images/backgroundTCPShield.png");
        background-size: contain;
        width:100%;
        height:1110px;
        background-repeat: no-repeat;
        position: relative;
    }
    .triangle{
        width:21vw;
        position: absolute;
        top:0;
        right: 0;
    }
</style>