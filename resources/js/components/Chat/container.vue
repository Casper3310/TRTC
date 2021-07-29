<template>
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
        <div class="user-list" v-for="(item, index) in ChatRoom" :key="index">
            <div class="user-detail" @click="$emit('roomchange', item)">
                <span>{{ item.name }}</span>

                <p>最後訊息</p>
            </div>
            <i class="fas fa-circle" v-bind:class="{ active: item.revoke }"></i>
        </div>
    </div>
</template>
<script>
export default {
    props: ["ChatRoom", "CurrentRoom"],
    data() {
        return {
            selected: ""
        };
    },
    mounted() {
        this.selected = this.CurrentRoom;
    },
    methods: {}
};
</script>
<style>
.user-list {
    display: flex;
    justify-content: center;
}
.user-list i {
    margin: 10px;
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
</style>
