<template>
    <div>
        <div class="flot-contant">
            <input type="date" v-model="dateStart" />
            <button
                type="button"
                class="btn btn-primary"
                @click="SearchTemp(dateStart)"
            >
                搜尋日期
            </button>
        </div>
        <div class="flot-contant">
            <div class="chart"><canvas id="myChart"></canvas></div>
            <div class="chart"><canvas id="myChart2"></canvas></div>
        </div>
    </div>
</template>
<script>
import * as stationData_serveice from "../serveices/stationData_serveice";
export default {
    data() {
        return {
            dateStart: "",
            TempData: {
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
            HumuidityData: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [
                    {
                        label: "濕度",
                        data: [12, 19, 30, 5, 2, 6],
                        backgroundColor: ["blue"],
                        borderColor: ["blue"]
                    }
                ]
            }
        };
    },
    mounted() {
        this.SetChar("myChart", this.TempData);
        this.SetChar("myChart2", this.HumuidityData);
    },
    methods: {
        SearchTemp: async function(dateStart) {
            try {
                const res = await stationData_serveice.LoadTempeData(dateStart);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        },
        SetChar(CharID, data) {
            let ctx = document.getElementById(CharID);
            new Chart(ctx, {
                type: "line",
                data: data
            });
        }
    }
};
</script>
<style>
.flot-contant {
    display: flex;
    justify-content: center;
}
.chart {
    width: 50%;
    height: 200;
    margin: 10px;
}

.btn {
    margin-left: 10px;
}
</style>
