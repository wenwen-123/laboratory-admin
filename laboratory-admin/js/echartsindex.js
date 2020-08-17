window.addEventListener('load',function(){
   
   
  //饼图2
  let myChart3=echarts.init(this.document.querySelector('.echarts3'));
  let mychartoption3={
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data: ['设备使用', '设备未使用', '设备维修周期','设备维修中']
    },
    xAxis: [
        {
            type: 'category',
            data: ['电脑', '打印机', '投影仪', '音箱', '交换机', '电源插座'], 
            // data: ['1', '2', '3', '4', '5', '6', '7'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '设备数量',
            min: 0,
            max: 60,
            interval: 50,
            axisLabel: {
                formatter: '{value} 个'
            }
        },
        // {
        //     type: 'value',
        //     name: '维修周期',
        //     min: 0,
        //     max: 25,
        //     interval: 5,
        //     axisLabel: {
        //         formatter: '{value} 天'
        //     }
        // }
    ],
    series: [
        {
            name: '设备使用',
            type: 'bar',
            data: [54, 2, 1, 2, 3,26]
        },
        {
            name: '设备未使用',
            type: 'bar',
            data: [4, 1, 0, 0, 1, 4]
        },
        {
            name: '设备维修中',
            type: 'bar',
            data: [2, 0, 0,0, 1, 2]
        },
        // {
        //     name: '设备维修周期平均率',
        //     type: 'line',
        //     yAxisIndex: 1,
        //     data: [4, 15, 18, 4, 19, 12, 14 ]
        // }
    ]
  }
  myChart3.setOption(mychartoption3);
  
 
   

  
})