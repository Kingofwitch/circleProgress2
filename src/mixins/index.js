import * as echarts from 'echarts'

export const echartMixins = {
    chartObject: null,
    data() {
        return {
            chartId: '',
            chartOptions: null
        }
    },
    mounted() {
        this.chartObject = this.chartId && echarts.init(document.getElementById(this.chartId))
        this.chartObject && this.chartOptions && this.chartObject.setOption(this.chartOptions)
    },
    methods: {
        test() {
            console.log(this.chartObject, 'myChart')
        }
    }
}