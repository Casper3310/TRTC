<template>
    <div class="chat-box">
        <div class="header">
            <a href="#">
                <i class="fas fa-arrow-left"></i>
            </a>
            <span>房間名稱{{ CurrentRoom.id }}</span>
            <a href="#">
                <i class="fas fa-arrow-right"></i>
            </a>
        </div>
        <div class="context">
            <div v-for="(item, index) in ShowMessage" :key="index">
                <div class="outgoing" v-if="item.User_id == 1">
                    <div class="detail">
                        <p>{{ item.message }}</p>
                    </div>
                </div>
                <div class="chat incoming" v-else>
                    <div class="detail">
                        <p>{{ item.user.name }}:{{ item.message }}</p>
                    </div>
                </div>
            </div>

            <div class="enter-area">
                <input
                    type="text"
                    v-model.trim="message"
                    @keyup.enter="SendMessage"
                    placeholder="說些什麼..."
                />
                <button @click="SendMessage">
                    <i class="fab fa-telegram-plane"></i>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import * as Chat_serveice from "../../serveices/Chat_serveice";
export default {
    props: ["room", "ShowMessage", "CurrentRoom", "ChatRoom"],
    data() {
        return {
            message: ""
        };
    },
    mounted() {
        this.selected = this.CurrentRoom;
    },
    methods: {
        SendMessage: async function() {
            try {
                if (this.message === "") {
                    return;
                }
                const res = await Chat_serveice.SendMessage(this.room.id, {
                    userId: 1,
                    message: this.message
                });
                console.log(res);
                this.message = "";
                this.$emit("messagesend");
            } catch (error) {
                console.log(error);
            }
        }
    },
    beforeDestroy() {}
};
</script>
<style scoped>
.chat-box {
    background: rgb(104, 102, 102);
    max-width: 400px;
    width: 100%;
}
.chat-box .header {
    height: 75px;
    display: flex;
    background-color: chartreuse;
    justify-content: space-between;
    align-items: center;
}
.chat-box .header span {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
}
.chat-box .header p {
    font-size: 15px;
    font-weight: 400;
}
.chat-box .context {
    display: flex;
    flex-direction: column;
    height: 400px;
    background-color: chocolate;
    padding: 10px;
    overflow-y: auto;
}

.outgoing .detail {
    margin-left: auto;
    max-width: calc(100% - 50px);
}
.outgoing .detail p {
    background-color: #333;
    font-size: 20px;
    color: #fff;
    border-radius: 20px 20px 0 20px;
    word-wrap: break-word;
}
.incoming .detail {
    margin-right: auto;
    max-width: calc(100% - 50px);
}
.incoming .detail p {
    background-color: rgb(221, 219, 219);
    font-size: 20px;
    color: rgb(56, 55, 55);
    border-radius: 20px 20px 20px 0;
    word-wrap: break-word;
}
.chat-box .context .enter-area {
    display: flex;
    justify-content: space-between;
}
.enter-area input {
    font-size: 20px;
    width: calc(100% - 50px);
    outline: none;
    border: 1px solid #ccc;
    border-radius: 5px 0 0 5px;
}
.enter-area button {
    width: 50px;
    border: none;
    outline: none;
    font-size: 20px;
    background-color: #333;
    border-radius: 0 5px 5px 0;
}
.enter-area button:hover {
    background-color: rgb(201, 204, 46);
}
</style>
