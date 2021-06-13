<template>
    <div class="LoginBar">
        <div></div>
        <div>
            <div class="Login-item">
                <b-button @click="registerShow">註冊</b-button>
                <b-button @click="Logout">登出</b-button>
                <b-button @click="LoginShow">登入</b-button>
                <b-modal ref="register" hide-footer title="註冊資料">
                    <div>
                        <form @submit.prevent>
                            <div class="form-group">
                                <label for="register_name">名稱</label>
                                <input
                                    class="form-control"
                                    type="text"
                                    placeholder="輸入名稱"
                                    id="register_name"
                                    required
                                    v-model="register.name"
                                />
                            </div>
                            <div class="form-group">
                                <label for="register_email">輸入Email</label>
                                <input
                                    class="form-control"
                                    type="email"
                                    placeholder="輸入Email"
                                    id="register_email"
                                    required
                                    v-model="register.email"
                                />
                            </div>
                            <div class="form-group">
                                <label for="register_password">輸入密碼</label>
                                <input
                                    class="form-control"
                                    type="password"
                                    placeholder="輸入密碼"
                                    id="register_password"
                                    required
                                    v-model="register.password"
                                />
                            </div>
                            <div class="form-group">
                                <label for="Login_password_confirmation"
                                    >再次輸入密碼</label
                                >
                                <input
                                    class="form-control"
                                    type="password"
                                    placeholder="再次輸入密碼"
                                    id="Login_password_confirmation"
                                    v-model="register.password_confirmation"
                                />
                            </div>
                        </form>
                    </div>
                    <div class="text-right">
                        <button
                            type="button"
                            class="btn btn-default"
                            @click="registerHide"
                        >
                            取消
                        </button>
                        <button
                            type="submit"
                            class="btn btn-primary"
                            @click="Register"
                        >
                            <span class="fa fa-check">送出申請</span>
                        </button>
                    </div>
                </b-modal>
            </div>
            <div class="Login-item">
                <b-modal ref="Login" hide-footer title="登入資料">
                    <div>
                        <form @submit.prevent>
                            <div class="form-group">
                                <label for="Login_email">輸入Email</label>
                                <input
                                    class="form-control"
                                    type="email"
                                    placeholder="輸入email"
                                    id="Login_email"
                                    v-model="LoginData.email"
                                />
                            </div>
                            <div class="form-group">
                                <label for="Login_password">輸入密碼</label>
                                <input
                                    class="form-control"
                                    type="password"
                                    placeholder="輸入密碼"
                                    id="Login_password"
                                    v-model="LoginData.password"
                                />
                            </div>
                        </form>
                    </div>
                    <div class="text-right">
                        <button
                            type="button"
                            class="btn btn-default"
                            @click="LoginHide"
                        >
                            取消
                        </button>
                        <button
                            type="submit"
                            class="btn btn-primary"
                            @click="Login"
                        >
                            <span class="fa fa-check">登入</span>
                        </button>
                    </div>
                </b-modal>
            </div>
        </div>
    </div>
</template>
<script>
import * as Login_serveice from "../serveices/Login_serveice";
export default {
    data() {
        return {
            user: {},
            LoginData: { email: "", password: "" },
            register: {
                name: "",
                email: "",
                password: "",
                password_confirmation: ""
            }
        };
    },
    methods: {
        Login: async function() {
            try {
                const res = await Login_serveice.Login(this.LoginData);
                localStorage.setItem("TRTC", JSON.stringify(res.data));
                this.LoginHide();
                let sss = JSON.parse(localStorage.getItem("TRTC"));
                console.log(sss.accessToken);
            } catch (error) {
                console.log(error);
                this.flashMessage.error({
                    message: "錯誤!",
                    time: 5000
                });
            }
        },
        Logout: async function() {
            try {
                const res = await Login_serveice.Logout();
                localStorage.removeItem("TRTC");
            } catch (error) {
                console.log(error);
                this.flashMessage.error({
                    message: "錯誤!",
                    time: 5000
                });
            }
        },
        Register: async function() {
            try {
                const res = await Login_serveice.Register(this.register);
                console.log(res);
                this.registerHide();
            } catch {
                console.log(error);
                this.flashMessage.error({
                    message: "錯誤!",
                    time: 5000
                });
            }
        },

        LoginShow() {
            this.$refs.Login.show();
        },
        LoginHide() {
            this.$refs.Login.hide();
        },
        registerShow() {
            this.$refs.register.show();
        },
        registerHide() {
            this.$refs.register.hide();
        }
    }
};
</script>
<style>
.LoginBar {
    display: flex;
    justify-content: space-between;
}
.Login-item {
    display: inline-block;
}
</style>
