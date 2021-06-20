<template>
    <div>
        <div>
            <h2>{{ DeviceName }}設備</h2>
            <button
                class="btn btn-primary btn-sm"
                v-on:click="CreateDevice"
                v-if="rolecan"
            >
                新增
            </button>
            <div class="plane_content table">
                <table v-if="DeviceDataList.length">
                    <thead>
                        <tr>
                            <th scope="col">項次</th>
                            <th scope="col">盤名</th>
                            <th scope="col">位置</th>
                            <th scope="col">圖片</th>
                            <th scope="col">操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="(item, index) in DeviceDataList"
                            :key="index"
                        >
                            <td>{{ index + 1 }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.place }}</td>
                            <td>
                                <img
                                    v-if="item.image"
                                    class="NewimagePreview"
                                    :src="
                                        `${$store.state.serverPath}/storage/${item.image}`
                                    "
                                    :alt="item.name"
                                />
                                <p v-else>無圖片</p>
                            </td>

                            <td>
                                <div v-if="rolecan">
                                    <button
                                        class="btn btn-warning btn-sm"
                                        @click="EditDeviceData(item, index)"
                                    >
                                        更新
                                    </button>
                                    <button
                                        class="btn btn-danger btn-sm"
                                        @click="DeleteDeviceData(item, index)"
                                    >
                                        刪除
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div v-else>無資料</div>
            </div>
        </div>
        <div>
            <b-modal ref="dashtable" hide-footer title="輸入資料">
                <div class="d-block">
                    <form v-on:submit.prevent="SubmitDashtable">
                        <div class="form-group">
                            <label for="planeName">輸入盤名</label>
                            <input
                                type="text"
                                v-model="DeviceData.name"
                                class="form-control"
                                id="planeName"
                                placeholder="輸入盤名"
                            />
                            <div class="feedback" v-if="error.name">
                                {{ error.name[0] }}
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="place">輸入位置</label>
                            <input
                                type="text"
                                v-model="DeviceData.place"
                                class="form-control"
                                id="place"
                                placeholder="輸入位置"
                            />
                            <div class="feedback" v-if="error.device">
                                {{ error.device[0] }}
                            </div>
                        </div>
                    </form>
                    <form>
                        <div class="form-group">
                            <div v-if="DeviceData.image">
                                <img
                                    :src="
                                        `${$store.state.serverPath}/storage/${DeviceData.image}`
                                    "
                                    ref="NewimageDisplay"
                                    alt=""
                                    class="NewimagePreview"
                                />
                            </div>
                            <label for="image">選擇圖片</label>
                            <input
                                type="file"
                                v-on:change="attachImage"
                                ref="Newimage"
                                class="form-control"
                                id="image"
                            />
                            <div class="feedback" v-if="error.image">
                                {{ error.image[0] }}
                            </div>
                        </div>
                    </form>
                    <hr />
                    <div class="text-right">
                        <button
                            type="button"
                            class="btn btn-default"
                            v-on:click="HideDashTable"
                        >
                            取消
                        </button>
                        <button
                            type="submit"
                            class="btn btn-primary"
                            v-on:click="SubmitDashtable"
                        >
                            <span class="fa fa-check">上傳</span>
                        </button>
                    </div>
                </div>
            </b-modal>
            <FlashMessage :position="'right top'"></FlashMessage>
        </div>
    </div>
</template>
<script>
import * as stationData_serveice from "../serveices/stationData_serveice";

export default {
    props: {
        DeviceName: {
            type: String,
            required: true
        },
        DeviceEnName: {
            type: String,
            required: true
        },
        StationID: {
            type: Number,
            required: true
        },
        role: {
            type: String
        }
    },
    data() {
        return {
            DeviceData: {},
            DeviceDataList: [],
            edit: false,
            index: true,
            error: {}
        };
    },
    computed: {
        rolecan() {
            return this.$store.state.role === this.role;
        }
    },
    mounted() {
        this.LoadDeviceData(this.StationID, this.DeviceEnName);
    },
    methods: {
        LoadDeviceData: async function(stationID, DeviceName) {
            try {
                stationID = parseInt(this.$route.params.stationID);
                const res = await stationData_serveice.LoadDeviceData(
                    stationID,
                    DeviceName
                );
                this.DeviceDataList = res.data.data;
            } catch (error) {
                console.log(error);
                this.flashMessage.error({
                    message: "錯誤!",
                    time: 5000
                });
            }
        },
        DeleteDeviceData: async function(item, index) {
            if (window.confirm(`你確定刪除${item.name}`)) {
                try {
                    const res = await stationData_serveice.DeleteDeviceData(
                        item.id,
                        this.DeviceEnName
                    );
                    this.DeviceDataList.splice(index, 1);
                } catch (error) {
                    console.log(error);
                }
            }
        },
        EditDeviceData(item, index) {
            this.DeviceData = item;
            this.$refs.dashtable.show();
            this.edit = true;
            this.index = index;
        },
        attachImage() {
            this.DeviceData.image = this.$refs.Newimage.files[0];
            let reader = new FileReader();
            reader.addEventListener(
                "load",
                function() {
                    this.$refs.NewimageDisplay.src = reader.result;
                }.bind(this, false)
            );
            //使用箭頭解決this
            //reader.addEventListener('load',(()=>{
            //    this.$refs.NewimageDisplay.src = reader.result;
            //}))
            reader.readAsDataURL(this.DeviceData.image);
        },
        HideDashTable() {
            this.$refs.dashtable.hide();
            this.DeviceData = {
                name: "",
                place: "",
                image: ""
            };
        },
        CreateDevice() {
            this.$refs.dashtable.show();
            this.edit = false;
            this.DeviceData = {
                name: "",
                place: "",
                image: ""
            };
        },
        SubmitDashtable: async function() {
            let formdata = new FormData();
            formdata.append("Circleline_Station_id", this.StationID);
            formdata.append("name", this.DeviceData.name);
            formdata.append("place", this.DeviceData.place);
            if (this.DeviceData.image) {
                formdata.append("image", this.DeviceData.image);
            }

            try {
                if (this.edit) {
                    formdata.append("_method", "put");
                    const res = await stationData_serveice.UpdataDeviceData(
                        this.DeviceData.id,
                        formdata,
                        this.DeviceEnName
                    );
                    this.edit = false;
                    this.DeviceData.image = res.data.data.image;
                } else {
                    const res = await stationData_serveice.createDeviceData(
                        formdata,
                        this.DeviceEnName
                    );
                    this.DeviceDataList.unshift(res.data.data);
                }

                this.HideDashTable();
                this.flashMessage.success({
                    message: "成功輸入!",
                    time: 5000
                });
                this.stationData = {
                    name: "",
                    place: "",
                    image: ""
                };
            } catch (error) {
                console.log(error);
                this.flashMessage.error({
                    message: "錯誤!",
                    time: 5000
                });
            }
        }
    },
    watch: {
        $route() {
            //this.LoadDeviceData(this.StationID, this.DeviceEnName);
        },
        DeviceName() {
            this.LoadDeviceData(this.StationID, this.DeviceEnName);
        }
    }
};
</script>
<style>
.table {
    margin: auto;
    width: 800px;
}
.table table {
    width: 100%;
    border: black 1px solid;
}
.table thead {
    background-color: rgb(36, 138, 179);
    color: aliceblue;
}
.table tbody tr:nth-child(even) {
    background-color: rgb(54, 187, 94);
}
.table tbody tr:nth-child(odd) {
    background-color: rgb(111, 136, 190);
}
.table tbody tr:hover {
    background-color: rgb(206, 226, 134);
}
.table th {
    border: black 1px solid;
}
.table td {
    border: black 1px solid;
}
.modal-backdrop {
    background-color: rgb(0, 0, 0, 0.5) !important;
}
.NewimagePreview {
    width: 200px;
}
.feedback {
    color: red;
}
</style>
