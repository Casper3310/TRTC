<template>
    <div class="chat">
        <div class="chat-box">
            <div class="box-header">
                <div class="user-detail">
                    <span>使用者名稱</span>
                    <p>上線</p>
                </div>
            </div>
            <div class="context">
                <container
                    :ChatRoom="ChatRoom"
                    :CurrentRoom="CurrentRoom"
                    @roomchange="SetRoom($event)"
                ></container>
            </div>
            <div class="chatbox-side">
                <ChatBox
                    :CurrentRoom="CurrentRoom"
                    :ShowMessage="message"
                    :ChatRoom="ChatRoom"
                    :room="CurrentRoom"
                    @messagesend="GetMessage"
                ></ChatBox>
            </div>
        </div>
    </div>
</template>
<script>
import ChatBox from "./ChatBox.vue";
import container from "./container.vue";
import inputMessage from "./inputMessage.vue";

import * as Chat_serveice from "../../serveices/Chat_serveice";
export default {
    components: {
        ChatBox,
        container,
        inputMessage
    },
    data() {
        return {
            ChatRoom: [],
            CurrentRoom: [],
            message: ""
        };
    },
    mounted() {
        this.GetChatRoom();
    },
    methods: {
        LoadChatUser: async function() {
            try {
                const res = await Chat_serveice.GetUserList();
                this.UserList = res;
            } catch (error) {
                console.log(error);
            }
        },
        GetChatRoom: async function() {
            try {
                const res = await Chat_serveice.GetChatRoom();
                this.ChatRoom = res.data;
                this.SetRoom(this.ChatRoom[0]);
            } catch (error) {
                console.log(error);
            }
        },
        SetRoom(room) {
            this.CurrentRoom = room;
            this.GetMessage();
        },
        GetMessage: async function() {
            try {
                const res = await Chat_serveice.GetMessage(this.CurrentRoom.id);
                this.message = res.data;
            } catch (error) {
                console.log(error);
            }
        }
    },
    beforeDestroy() {}
};
</script>
<style scoped>
.chat {
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
