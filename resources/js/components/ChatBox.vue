<template>
    <div class="chat-box">
        <div class="header">
            <a href="#"><i class="fas fa-arrow-left"></i></a>
            <div class="detail">
                <span>使用者名稱</span>
                <p>上線中</p>
            </div>
        </div>
        <div class="context">
            <div class="outgoing">
                <div class="detail">
                    <p>
                        文字訊息DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDsadwqedsad
                    </p>
                </div>
            </div>
            <div class="chat incoming">
                <div class="detail">
                    <p>
                        文字訊息DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDsadwqedsad
                    </p>
                </div>
            </div>
            <div class="outgoing">
                <div class="detail">
                    <p>
                        文字訊息DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDsadwqedsad
                    </p>
                </div>
            </div>
            <div class="chat incoming">
                <div class="detail">
                    <p>
                        文字訊息DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDsadwqedsad
                    </p>
                </div>
            </div>
            <div class="outgoing">
                <div class="detail">
                    <p>
                        文字訊息DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDsadwqedsad
                    </p>
                </div>
            </div>
            <div class="chat incoming">
                <div class="detail">
                    <p>
                        文字訊息DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDsadwqedsad
                    </p>
                </div>
            </div>
            <div class="outgoing">
                <div class="detail">
                    <p>
                        文字訊息DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDsadwqedsad
                    </p>
                </div>
            </div>
            <div class="chat incoming">
                <div class="detail">
                    <p>
                        文字訊息DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDsadwqedsad
                    </p>
                </div>
            </div>
            <div class="enter-area">
                <input type="text" name="" id="" />
                <button><i class="fab fa-telegram-plane"></i></button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            aaa: "s"
        };
    },
    mounted() {},
    methods: {},
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
    align-items: center;
}
.chat-box .header span {
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
</style>
