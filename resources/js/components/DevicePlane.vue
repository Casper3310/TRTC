<template>
    <div>
        <div>
            <h2>OO設備</h2>
            <button class="btn btn-primary btn-sm" v-on:click="CreateDevice">
                新增
            </button>
            <div class="plane_content table">
                <table v-if="DeviceList.length">
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
                        <tr v-for="(item, index) in DeviceList" :key="index">
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
                                <div>
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
                                v-model="DevicenData.name"
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
                                v-model="DevicenData.place"
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
                            <div v-if="DevicenData.image">
                                <img
                                    :src="
                                        `${$store.state.serverPath}/storage/${DevicenData.image}`
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
    name: "station",
    data() {
        return {
            DeviceList: [],
            DevicenData: {
                name: "",
                place: "",
                image: ""
            },
            edit: false,
            index: null,
            error: {}
        };
    },
    computed: {
        selectData() {
            return {
                deviceID: parseInt(this.$route.params.deviceID),
                stationID: parseInt(this.$route.params.stationID)
            };
        }
    },
    mounted() {
        this.LoadDeviceData();
    },
    methods: {
        LoadDeviceData: async function() {
            try {
                const res = await stationData_serveice.LoadDeviceData(
                    this.selectData
                );
                this.DeviceList = res.data.data;
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
                        item.id
                    );
                    this.DeviceList.splice(index, 1);
                } catch (error) {
                    console.log(error);
                }
            }
        },
        EditDeviceData(item, index) {
            this.DevicenData = item;
            this.$refs.dashtable.show();
            this.edit = true;
            this.index = index;
        },
        attachImage() {
            this.DevicenData.image = this.$refs.Newimage.files[0];
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
            reader.readAsDataURL(this.DevicenData.image);
        },
        HideDashTable() {
            this.$refs.dashtable.hide();
        },
        CreateDevice() {
            this.$refs.dashtable.show();
            this.edit = false;
            this.DevicenData = {
                name: "",
                place: "",
                image: ""
            };
        },
        SubmitDashtable: async function() {
            let formdata = new FormData();
            formdata.append("Circleline_Station_id", this.selectData.stationID);
            formdata.append("device_types_id", this.selectData.deviceID);
            formdata.append("name", this.DevicenData.name);
            formdata.append("devicePlace", this.DevicenData.place);
            if (this.DevicenData.image) {
                formdata.append("image", this.DevicenData.image);
            }

            try {
                if (this.edit) {
                    formdata.append("_method", "put");
                    const res = await stationData_serveice.UpdataDeviceData(
                        this.DevicenData.id,
                        formdata
                    );
                    this.edit = false;
                    console.log(res);
                    this.DevicenData.image = res.data.data.image;
                } else {
                    const res = await stationData_serveice.createDeviceData(
                        formdata
                    );
                    this.DeviceList.unshift(res.data.data);
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
                switch (error.response.status) {
                    case 422:
                        this.error = error.response.data.errors;
                        break;
                    default:
                        this.flashMessage.error({
                            message: "錯誤!",
                            time: 5000
                        });
                        break;
                }
            }
        }
    },
    watch: {
        $route() {
            this.LoadDeviceData();
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
    background-color: rgb(202, 141, 179);
}
.table tbody tr:hover {
    background-color: rgb(190, 201, 151);
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
