let device = {
  panel_borad: [
    { name: "盤名", place: "位置", upstream: "上游" },
    { name: "LP1", place: "aaa", upstream: "PA1" },
    { name: "LP2", place: "bbb", upstream: "PA2" },
    { name: "ERP4", place: "ccc", upstream: "PB3" },
  ],
  smoker: [
    { place: "位置", loop: "迴路編號" },
    { place: "3F", loop: "L1-111" },
    { place: "2F", loop: "L1-222" },
    { place: "4F", loop: "L2-14" },
  ],
};

let Circular_line = {
  station: [
    {
      Y7: [{ station_name: "十四張", device: [{ water: "aaa", fire: "sss" }] }],
    },
  ],
};
let app = new Vue({
  el: "#app",
  data: {
    input: "",
    device_sort: "全部",
    device: device,
    time: new Date().toLocaleString(),
  },
});
