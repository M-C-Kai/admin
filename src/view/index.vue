<!--
 * @Descripttion:
 * @version:
 * @Author: Kail
 * @Date: 2021-05-25 16:24:15
 * @LastEditors: lvnini
 * @LastEditTime: 2021-11-08 17:44:08
-->
<template>
  <div class="content">
    <div class="card_layout">
    <div class="card" v-for="(item,index) in list" :key="index">
      <div class="color_border"></div>
      <div class="content">
        <div class="content-title">
          <span>End_title</span>
        </div>
        <div class="content-text">
          <span>当前数据：100/400</span>
        </div>
      </div>
      <div class="icon">
       <b-icon icon="camera" font-scale="3"></b-icon>
      </div>
    </div>
    </div>
    <div class="Echarts">
      <div class="echarts-0">
        <div>
          <b-card-group deck>
            <b-card header-tag="header">
              <template v-slot:header>
                <h6 class="mb-0">Earnings Overview</h6>
              </template>
              <div>
                <chart :option="Chart" :class="'myChart'" :id="'myChart'" :height="'400px'" :width="'100%'"></chart>
              </div>
            </b-card>
          </b-card-group>
        </div>
      </div>
      <div class="echarts-1">
        <div>
          <b-card-group deck>
            <b-card header-tag="header">
              <template v-slot:header>
                <h6 class="mb-0">Earnings Overview</h6>
              </template>
              <div>
                <!-- <div id="myChart" style="width:100%;height:400px"></div> -->
                <chart :option="Corner" :class="'myCorner'" :id="'myCorner'" :height="'400px'" :width="'100%'"></chart>
              </div>
            </b-card>
          </b-card-group>
        </div>
      </div>
    </div>
    <div class="Progress_Table">
      <div class="Progress">
          <b-card-group deck>
            <b-card header-tag="header">
              <template v-slot:header>
                <h6 class="mb-0">Earnings Overview</h6>
              </template>
                <div>
                  <b-progress show-progress :value="25" variant="success" striped :animated="animate"></b-progress>
                  <b-progress show-progress :value="50" variant="info" striped :animated="animate" class="mt-2"></b-progress>
                  <b-progress show-progress :value="75" variant="warning" striped :animated="animate" class="mt-2"></b-progress>
                  <b-progress show-progress :value="100" variant="danger" :animated="animate" class="mt-2"></b-progress>
                </div>
            </b-card>
          </b-card-group>
      </div>
      <div class="Table">
          <div>
            <b-card-group deck>
              <b-card header-tag="header">
                <template v-slot:header>
                  <h6 class="mb-0">Earnings Overview</h6>
                </template>
                <b-table :items="items" :busy="isBusy" class="mt-3" >
                  <template v-slot:table-busy>
                    <div class="text-center text-danger my-2">
                      <b-spinner class="align-middle"></b-spinner>
                      <strong>Loading...</strong>
                    </div>
                  </template>
                </b-table>
              </b-card>
            </b-card-group>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="logos">
        <span>Copyright © 2021.Company name All rights reserved.</span>
      </div>
    </div>
  </div>
</template>

<script>
  import chart from '../components/echarts.vue'
  export default {
    components: {chart },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        list: [
          {title: 'ssss',content: 'awdwd'},
          {title: 'ssss',content: 'awdwd'},
          {title: 'ssss',content: 'awdwd'},
          {title: 'ssss',content: 'awdwd'},
        ],
        Corner: {
          tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '5%',
            left: 'center'
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '26',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                {value: 1048, name: '搜索引擎'},
                {value: 735, name: '直接访问'},
                {value: 580, name: '邮件营销'},
                {value: 484, name: '联盟广告'},
                {value: 300, name: '视频广告'}
              ]
            }
          ]
        },
        Chart: {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
          }]
        },
        animate: true,
        isBusy: false,
        items: [
          { first_name: 'Dickerson', last_name: 'MacDonald', age: 40 },
          { first_name: 'Larsen', last_name: 'Shaw', age: 21 },
          { first_name: 'Geneva', last_name: 'Wilson', age: 89 },
          { first_name: 'Jami', last_name: 'Carney', age: 38 }
        ]
      }
    },
    methods: {
      toggleBusy() {
        this.isBusy = !this.isBusy
      }
    }
  }
</script>
<style lang='scss' scoped>
.content{
  background: #f2f2f2;
  margin-left: 20px;
  margin-right:0px;
  .card_layout{
    display: flex;
    flex-direction: row;
    justify-content:space-evenly;
    margin-top: 20px;
    position: relative;
  .card{
    // width: 180px;
    flex: 1;
    height: 120px;
    font-size: 16px;
    overflow: hidden;
    position: relative;
    padding-left: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
    z-index: 100;
    .color_border{
      position: absolute;
      border-radius:3px;
      background-color:rebeccapurple;
      width: 0.5rem;
      height: 100%;
      left: 0;
      z-index: 0;
    }
    .content{
      flex: 1;
      z-index:10;
      background-color: white;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: baseline;
      justify-content: center;
      margin-left: 0;
      // align-content:center;
      .content-title{
        font-size: 12px;
        font-weight: 300;
        margin-left: 20px;
      }
      .content-text{
        margin-left: 20px;
      }
      // width: ;
    }
    .icon{
      margin-right: 15px;
      color: #dddfeb;
    }
  }
  .card:first-child{
    margin-left: 0;
  }
  }
  .Echarts{
    display: flex;
    flex-wrap: wrap;
    margin-right: 20px;
    .echarts-0{
      margin-top: 30px;
      flex: 0.62;
    }
    .echarts-1{
      margin-top: 30px;
      flex: 0.38;
      margin-left: 20px;
    }
  }
  .Progress_Table{
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
     margin-right: 20px;
    .Progress{
      flex: 0.5;
    }
    .Table{
      flex: 0.5;
      margin-left: 30px;
    }
  }
  .footer{
    margin-left: -20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin-top: 30px;
    color: #9fa0ac;
  }
}
</style>