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
  sss: "./images/smoker/1F-1.png",
  station: [
    {
      Y13: [
        {
          name: "中原",
          device: [
            {
              water_name: "水電設備",
              fire_name: "消防設備",
              water: [
                {
                  show: true,
                  list: [
                    { name: "照明分電盤", link: "" },
                    { name: "插座分電盤", link: "" },
                    { name: "給水泵浦", link: "" },
                    { name: "排水泵浦", link: "" },
                    { name: "接地箱", link: "" },],
                  light_panel: [
                    {
                      name: "LP2",
                      place: "bbb",
                      place_image: "",
                      upstream: "PA2",
                      link: "",
                    },
                    {
                      name: "ERP4",
                      place: "ccc",
                      place_image: "",
                      upstream: "PB3",
                      link: "",
                    },
                  ],
                  socket_panel: [
                    {
                      name: "盤名",
                      place: "位置",
                      place_image: "",
                      upstream: "上游",
                      link: "",
                    },
                    {
                      name: "LP1",
                      place: "aaa",
                      place_image: "",
                      upstream: "PA1",
                      link: "",
                    },
                  ],
                  panel_borad_map: [
                    {
                      floor1: "",
                      floor2: "",
                      floor3: "",
                      floor4: "",
                      floor5: "",
                      B1: "",
                    },
                  ],
                  pump: "",
                  ground: "",
                },
              ],
              fire: [
                {
                  show: true,
                  list: [
                    { name: "偵煙器", link: "" },
                    { name: "消防泵浦", link: "" },
                    { name: "灑水", link: "" },
                    { name: "低汙染盤", link: "" },
                  ],
                  smoker: [
                    { place: "位置", loop: "迴路編號" },
                    { place: "3F", loop: "L1-111" },
                    { place: "2F", loop: "L1-222" },
                    { place: "4F", loop: "L2-14" },
                  ],
                  water_system: [{}],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
let app = new Vue({
  el: "#app",
  data: {
    input: "",
    device_sort: "全部",
    time: new Date().toLocaleString(),
    device: Circular_line,
  },
  computed: {
    station() {
      return this.device.station[0].Y13[0];
    },
    equipment() {
      return this.station.device[0];
    },
    water_eq() {
      return this.equipment.water[0];
    },
    fire_eq() {
      return this.equipment.fire[0];
    },
    light_panel_name() {
      return this.water_eq.list[0].name;
    },
    light_panel() {
      return this.water_eq.light_panel;
    },
  },
});
