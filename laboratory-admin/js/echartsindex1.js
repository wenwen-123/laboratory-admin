window.addEventListener('load', function () {

    let myChart = echarts.init(document.querySelector('#echarts-records'));
    


    // 指定图表的配置项和数据
    let myChartOption = {
        title: {
            text: '项目进度',
            textStyle: {
                color: 'black',
                // insideColor: 'yellow',
                // fontSize: 100
            }

            // color:'#fff',
        },
       
        // backgroundColor:'#04184A',
        series: [{
            type: 'liquidFill',
            //data: [0.6, 0.5, 0.4, 0.3],
            data: [0.6, 0.5, 0.4, 0.3],
            radius: '40%',
            // title:'项目',
            // 水球颜色
            color: ['#49d088', '#38b470', '#2aaf66'],
            center: ['25%', '50%'],
            // outline  外边
            outline: {
                // show: false
                borderDistance: 5,
                itemStyle: {
                    borderWidth: 5,
                    borderColor: '#13FDCE',
                },
            },
            label: {
                normal: {
                    // textStyle: {
                    color: 'red',
                    insideColor: 'yellow',
                    fontSize: 100
                    // }
                }
            },
            // 内图 背景色 边
            //    backgroundStyle: {
            //         color: 'rgba(4,24,74,0.8)', 
            //         // borderWidth: 5,
            //         // borderColor: 'red',
            //     }
        }, {
            type: 'liquidFill',
            //data: [0.6, 0.5, 0.4, 0.3],
            data: [0.2, 0.1, 0.05],
            radius: '40%',
            // 水球颜色
            color: ['#FE5555', '#F07581', '#FB5E61'],
            center: ['50%', '50%'],
            // outline  外边
            outline: {
                // show: false
                borderDistance: 5,
                itemStyle: {
                    borderWidth: 5,
                    borderColor: '#FE5555',
                },
            },
            label: {
                normal: {
                    textStyle: {
                        color: 'red',
                        insideColor: 'yellow',
                        fontSize: 100
                    }
                }
            },
            // 内图 背景色 边
            // backgroundStyle: {
            //     color: 'rgba(4,24,74,0.8)',
            //     // borderWidth: 5,
            //     // borderColor: 'red',
            // }
        }, {
            type: 'liquidFill',
            //data: [0.6, 0.5, 0.4, 0.3],
            data: [0.2, 0.1, 0.05],
            radius: '40%',
            // 水球颜色
            color: ['#FFBF11', '#F4B30E', '#EACE36'],
            center: ['75%', '50%'],
            // outline  外边
            outline: {
                // show: false
                borderDistance: 5,
                itemStyle: {
                    borderWidth: 5,
                    borderColor: '#FFBF11',
                },
            },
            label: {
                normal: {
                    textStyle: {
                        color: 'red',
                        insideColor: 'yellow',
                        fontSize: 100
                    }
                }
            },
            // 内图 背景色 边
            // backgroundStyle: {
            //     color: 'rgba(4,24,74,0.8)',
            //     // borderWidth: 5,
            //     // borderColor: 'red',
            // }
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(myChartOption);


    const colorList = ['#5EA6FE', '#45FBF7', '#48FF58', '#EAE809', '#FF7E3F', '#FF4746', '#E177F9', '#4E6BFF'];

    function appendBaseColor(dataList, colorList, opacity) {
        const temp = [];
        for (let i in dataList) {
            const tempObj = {
                ...dataList[i],
                itemStyle: {
                    color: colorList[i],
                    opacity: opacity
                }
            };
            temp.push(tempObj)
        }
        return temp;
    }

    let myChart1 = echarts.init(document.querySelector('#echarts-pies'));
    var data = [65, 25, 10]
    var titlename = ['使用', '维修', '未用'];
    var valdata = [13, 2, 5]
    var myColor = ['#1089E7', '#F57474', '#F8B448'];
    let myChartOption1 = {
        title: {
            text: '设备详情',

            textStyle: {
                color: 'black',
                // insideColor: 'yellow',
                // fontSize: 100
            }

            // color:'#fff',
        },
        backgroundColor: '#fff',
        xAxis: {
            show: false
        },
        yAxis: [{
            show: true,
            data: titlename,
            inverse: true,
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: function (value, index) {
                        var num = myColor.length;
                        return myColor[index % num]
                    }
                },
                formatter: function (value, index) {
                    return [
                        '{title|' + value + '} '
                    ].join('\n')
                },
                rich: {}
            },

        }, {
            show: true,
            inverse: true,
            data: valdata,
            axisLabel: {
                textStyle: {
                    color: function (value, index) {
                        var num = myColor.length;
                        return myColor[index % num]
                    }
                }
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },

        }],
        series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: data,
            barWidth: 30,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: function (params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}%'
                }
            },
        }]
    }
    myChart1.setOption(myChartOption1);

});
