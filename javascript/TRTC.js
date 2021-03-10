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
          station_name: "中原",
          device: [
            {
              device_water: "水電設備",
              device_fire: "消防設備",
              water: [
                {
                  panel_borad: [
                    {
                      name: "盤名",
                      place: "位置",
                      place_image: "",
                      upstream: "上游",
                    },
                    {
                      name: "LP1",
                      place: "aaa",
                      place_image: "",
                      upstream: "PA1",
                    },
                    {
                      name: "LP2",
                      place: "bbb",
                      place_image: "",
                      upstream: "PA2",
                    },
                    {
                      name: "ERP4",
                      place: "ccc",
                      place_image: "",
                      upstream: "PB3",
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
    device: Circular_line,

    time: new Date().toLocaleString(),
  },
});
