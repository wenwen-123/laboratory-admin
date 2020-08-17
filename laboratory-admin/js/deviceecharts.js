window.addEventListener('load', function () {

    let myChart = echarts.init(document.querySelector('.echarts'));

    var timeData = [
        '服务器','笔记本电脑','标准投影仪','交换机','扫描仪','发动机拆装常规工具组','智能试剂柜','电喷发动机','离心机','验钞机','装订机','显微镜','玻璃器皿','药品柜','培养箱','喷油嘴清洗系统','可调式扭力扳手','打印机','路由器','专业照相机',
    ];
    
 
    myChartOption = {
        title: {
            text: '设备信息图',
            // subtext: '数据来自西安兰特水电测控技术有限公司',
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                animation: false
            },
           
        },
        legend: {
            data: ['使用率', '损耗率'],
            left: 10
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        axisPointer: {
            link: {xAxisIndex: 'all'}
        },
        dataZoom: [
            {
                show: true,
                realtime: true,
                start: 30,
                end: 70,
                xAxisIndex: [0, 1]
            },
            {
                type: 'inside',
                realtime: true,
                start: 30,
                end: 70,
                xAxisIndex: [0, 1]
            }
        ],
        grid: [{
            left: 50,
            right: 50,
            height: '35%'
        }, {
            left: 50,
            right: 50,
            top: '55%',
            height: '35%'
        }],
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                axisLine: {onZero: true},
                data: timeData
            },
            {
                gridIndex: 1,
                type: 'category',
                boundaryGap: false,
                axisLine: {onZero: true},
                data: timeData,
                position: 'top'
            }
        ],
        yAxis: [
            {
                name: '使用率(%)',
                type: 'value',
                max: 100
            },
            {
                gridIndex: 1,
                name: '损耗率(%)',
                type: 'value',
                inverse: true
            }
        ],
        series: [
            {
                name: '使用率',
                type: 'line',
                symbolSize: 8,
                hoverAnimation: false,
                data: [
                    '21','32','75','25 ','34 ','57 ','8 ','67 ','55 ','24 ','63 ','10 ','72 ', '47 ','54 ','30 ','3 ','50 ','9 ','4 ',
                   
                ]
            },
            {
                name: '损耗率',
                type: 'line',
                xAxisIndex: 1,
                yAxisIndex: 1,
                symbolSize: 8,
                hoverAnimation: false,
                data: [
                    '5 ','10 ','55 ','8 ','24 ','45 ', '5 ','36 ','50 ', '6 ','13 ','1 ','63 ','42 ','40 ','45 ','3 ','54 ', '3 ','4 '
                ]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(myChartOption);



});
