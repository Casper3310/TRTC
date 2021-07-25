<template>
    <div class="aaa">
        <div class="chat-box">
            <div class="box-header">
                <div class="user-detail">
                    <span>使用者名稱</span>
                    <p>上線</p>
                </div>
            </div>
            <div class="context">
                <div class="search">
                    <input
                        type="text"
                        name="search-bar"
                        class="search-bar"
                        placeholder="輸入搜尋名稱"
                    />
                    <button>
                        <i class="fas fa-search"></i>
                    </button>
                </div>
                <div class="user-list">
                    <div
                        class="user"
                        v-for="(item, index) in UserList"
                        :key="index"
                    >
                        <div class="user-detail">
                            <span>{{ item.name }}</span>
                            <p>最後訊息</p>
                        </div>
                        <div class="online">
                            <i
                                class="fas fa-circle"
                                v-bind:class="{ active: item.revoke }"
                            ></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="chatbox-side">
                <ChatBox></ChatBox>
            </div>
        </div>
    </div>
</template>
<script>
let ChatUserInterval;
import ChatBox from "./ChatBox.vue";
import * as Chat_serveice from "../serveices/Chat_serveice";
export default {
    components: {
        ChatBox
    },
    data() {
        return {
            UserList: []
        };
    },
    mounted() {
        ChatUserInterval = setInterval(this.LoadChatUser, 500);
    },
    methods: {
        LoadChatUser: async function() {
            try {
                const res = await Chat_serveice.GetUserList();
                this.UserList = res;
            } catch (error) {
                console.log(error);
            }
        }
    },
    beforeDestroy() {
        clearInterval(ChatUserInterval);
    }
};
</script>
<style scoped>
.aaa {
    display: flex;
    justify-content: center;
}
.chatbox-side {
    width: 200px;
    height: 200px;
    left: -250px;
    top: 0px;
    background-color: cornflowerblue;
    position: absolute;
}
.chat-box {
    width: 250px;
    height: 400px;
    position: relative;
}
.box-header {
    display: flex;
    height: 75px;
    justify-content: center;
    border-bottom: 1px rgb(112, 109, 109) solid;
}
.user-detail {
    border-radius: 5px;
}
.user-detail span {
    font-size: 20px;
    font-weight: 700;
}
.user-detail p {
    font-size: 15px;
    font-weight: 400;
}
.search {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 20px;
}
.search input {
    height: 30px;
    border-radius: 5px 0 0 5px;
    outline: none;
    border: 1px solid rgb(59, 58, 58);
}
.search button {
    width: 50px;
    height: 30px;
    border: none;
    color: rgb(206, 198, 198);
    background-color: rgb(59, 58, 58);
    border-radius: 0 5px 5px 0;
}
.user {
    display: flex;
    justify-content: space-between;
    margin: 0 10px 0 20px;
    border-bottom: 1px solid rgb(78, 75, 75);
}
.user-detail {
    color: #333;
}
.online .active {
    color: rgb(0, 255, 85);
    margin-top: 15px;
}
.online i {
    color: rgb(92, 92, 92);
    margin-top: 15px;
}
.user-list {
    height: 325px;
    overflow-y: auto;
}
</style>
