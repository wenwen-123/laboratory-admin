window.addEventListener('load', function () {

    let myChart = echarts.init(document.querySelector('.echarts1'));
    let itemCount = [
        { "item": "项目未进行", "pvs": 24 },
        { "item": "项目进行中", "pvs": 18 },
        { "item": "项目已完成", "pvs": 22 },
        { "item": "设备未使用", "pvs": 25 },
        { "item": "设备使用中", "pvs": 35 },
        { "item": "设备维修中", "pvs": 22 },
        { "item": "设备损耗量", "pvs": 25 },
      /*   { "item": "07", "pvs": 24 },
        { "item": "08", "pvs": 24 },
        { "item": "09", "pvs": 15 },
        { "item": "10", "pvs": 27 },
        { "item": "11", "pvs": 35 },
        { "item": "12", "pvs": 19 },
        { "item": "13", "pvs": 21 },
        { "item": "14", "pvs": 17 },
        { "item": "15", "pvs": 23 },
        { "item": "16", "pvs": 20 },
        { "item": "17", "pvs": 22 },
        { "item": "18", "pvs": 29 },
        { "item": "19", "pvs": 24 },
        { "item": "20", "pvs": 25 },
        { "item": "21", "pvs": 18 },
        { "item": "22", "pvs": 18 },
        { "item": "23", "pvs": 20 } */
    ];
    let dataAxis = [/* '项目未进行','项目进行中','项目已完成','设备未使用','设备使用中','设备维修中','设备损耗量' */];
    let data = [/* 22,22,896,456,45,563,85 */];
    itemCount.forEach(ele => {
        let { item, pvs } = ele;
        dataAxis.push(item);
        data.push(pvs);
    })



    // 指定图表的配置项和数据
    let myChartOption = {
        title: {
            text: '实验室信息展示',   //标题
            // subtext: 'wcm'   //副标题
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            data: dataAxis, //x轴方向数据
            axisLabel: {
                inside: false,  //x轴提示文字里面true 外面false
                textStyle: {
                    color: '#000'  //x轴文字颜色
                }
            },
            axisTick: {   //y轴线
                show: true
            },
            axisLine: {
                show: false   //x轴线
            },
            z: 10
        },
        yAxis: {
            axisLine: {
                show: false
            },
            axisTick: {
                show: true
            },
            axisLabel: {
                textStyle: {
                    color: '#999'
                }
            }
        },
        dataZoom: [    //进行缩放
            {
                type: 'inside'
            }
        ],
        series: [   //不同图表系列，图表不同   每一个系列代表一种对象

            {    //几种图表写几个对象  一种系列一种数据(那种类型的图表)
                type: 'bar',
                label: {
                    show: true,
                    position: 'inside',
                    color:'#fff'
                },
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [    //渐变色
                            { offset: 0, color: '#83bff6' },
                            { offset: 0.5, color: '#188df0' },
                            { offset: 1, color: '#188df0' }
                        ]
                    )
                },
                emphasis: {
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                { offset: 0, color: '#2378f7' },
                                { offset: 0.7, color: '#2378f7' },
                                { offset: 1, color: '#83bff6' }
                            ]
                        )
                    }
                },
                data: data  // 数据 显示图表
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(myChartOption);



});
