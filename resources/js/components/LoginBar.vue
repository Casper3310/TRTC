<template>
    <div class="LoginBar">
        <div></div>
        <div>
            <div class="Login-item">
                <b-button @click="registerShow">註冊</b-button>
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
                            @click="registe"
                        >
                            <span class="fa fa-check">送出申請</span>
                        </button>
                    </div>
                </b-modal>
            </div>
            <div class="Login-item">
                <b-button @click="LoginShow">登入</b-button>
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
                                    v-model="Login.email"
                                />
                            </div>
                            <div class="form-group">
                                <label for="Login_password">輸入密碼</label>
                                <input
                                    class="form-control"
                                    type="password"
                                    placeholder="輸入password"
                                    id="Login_password"
                                    v-model="Login.password"
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
                        <button type="submit" class="btn btn-primary">
                            <span class="fa fa-check">登入</span>
                        </button>
                    </div>
                </b-modal>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            Login: { email: "", password: "" },
            register: { name: "", email: "", password: "" }
        };
    },
    methods: {
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
        },
        registe: async function() {}
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
