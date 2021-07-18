<template>
    <div>
        <div class="flot-contant">
            <div>
                <input type="date" v-model="dateStart" />
                <button
                    type="button"
                    class="btn btn-primary"
                    @click="SearchTemp(dateStart)"
                >
                    搜尋日期
                </button>
            </div>
        </div>
        <h2>UPS室溫溼度</h2>
        <div class="flot-contant">
            <div class="chart"><canvas id="myChart"></canvas></div>
            <div class="chart"><canvas id="myChart2"></canvas></div>
        </div>
    </div>
</template>
<script>
let Tempchar;
let HumuidityChar;
import * as stationData_serveice from "../serveices/stationData_serveice";
export default {
    data() {
        return {
            dateStart: "",
            TempChartData: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [
                    {
                        label: "溫度",
                        data: [12, 19, 3, 5, 2],
                        backgroundColor: ["red"],
                        borderColor: ["red"]
                    }
                ]
            },
            HumuidityChartData: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [
                    {
                        label: "濕度",
                        data: [12, 19, 30, 5, 2, 6],
                        backgroundColor: ["blue"],
                        borderColor: ["blue"]
                    }
                ]
            },
            SearchTempData: []
        };
    },
    mounted() {
        Tempchar = this.SetChar("myChart", this.TempChartData);

        HumuidityChar = this.SetChar("myChart2", this.HumuidityChartData);
    },
    methods: {
        SearchTemp: async function(dateStart) {
            try {
                const res = await stationData_serveice.LoadTempeData(dateStart);
                this.SearchTempData = res.data.data;
                console.log(res);
                this.TempChartData.labels = [];
                this.TempChartData.datasets[0].data = [];
                this.HumuidityChartData.labels = [];
                this.HumuidityChartData.datasets[0].data = [];
                /*this.SearchTempData.forEach(element => {
                    this.TempChartData.labels.push(
                        new Date(element.created_at)
                            .toLocaleTimeString()
                    );
                });
                this.SearchTempData.forEach(element => {
                    this.TempChartData.datasets[0].data.push(
                        element.temperature
                    );
                });*/
                let vue = this;
                this.SearchTempData.forEach(function(element) {
                    vue.TempChartData.labels.push(
                        new Date(element.created_at).toLocaleTimeString()
                    );
                    vue.TempChartData.datasets[0].data.push(
                        element.temperature
                    );

                    vue.HumuidityChartData.labels.push(
                        new Date(element.created_at).toLocaleTimeString()
                    );
                    vue.HumuidityChartData.datasets[0].data.push(
                        element.humidity
                    );
                });
                Tempchar.data.datasets[0].data = this.TempChartData.datasets[0].data;
                Tempchar.labels = this.TempChartData.labels;
                Tempchar.update();

                HumuidityChar.data.datasets[0].data = this.HumuidityChartData.datasets[0].data;
                HumuidityChar.labels = this.HumuidityChartData.labels;
                HumuidityChar.update();
            } catch (error) {
                console.log(error);
            }
        },
        SetChar(CharID, data) {
            let ctx = document.getElementById(CharID);
            let char = new Chart(ctx, {
                type: "line",
                data: data
            });
            return char;
        }
    }
};
</script>
<style>
.flot-contant {
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
}
.chart {
    width: 50%;
    height: 200;
    margin: 10px;
}
</style>
