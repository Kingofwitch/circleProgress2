
export const getCircleOption = (dataArr, options) => {
    if (!Array.isArray(dataArr)) {
        if (dataArr <= 0) {
            dataArr = []
        } else {
            dataArr = [dataArr]
        }
    }
    const gaugeData = dataArr.map(v => ({ value: v, detail: { show: false } }))
    return {
        series: [
            {
                type: 'gauge',
                startAngle: 90,
                endAngle: -270,
                color: {
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#b39ff3'
                    }, {
                        offset: 1, color: '#9270f0'
                    }],
                    global: false
                }
                ,
                pointer: {
                    show: false
                },
                progress: {
                    show: true,
                    overlap: false,
                    roundCap: true,
                    clip: false,
                },
                axisLine: {
                    lineStyle: {
                        width: 50,
                        shadowColor: 'rgba(221, 221, 236,1)',
                        shadowBlur: 1,
                        shadowOffsetY: 6
                    }
                },
                splitLine: {
                    show: false,
                    distance: 0,
                    length: 10
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false,
                },
                data: gaugeData,
                title: {
                    show: false,
                    fontSize: 14
                },
                detail: {
                    width: 50,
                    height: 14,
                    fontSize: 60,
                    color: 'inherit',
                    formatter: function (infos) {
                        return infos
                    }
                }
            }
        ],
        animationDelay: function (idx) {
            // 越往后的数据延迟越大
            return idx * 10;
        },
        ...options
    }
}