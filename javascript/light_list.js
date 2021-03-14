
(function (Vue) {
    new Vue({
        el: "#app",
        data: {
            editindex: null,
            contact: [],
            input: {
                name: "",
                place: "",
                upstream: "",
            },
        },
        methods: {
            submitHander() {
                let { name, place, upstream } = this.input;
                if (!name || !place || !upstream) return;
                if (this.editindex === null) {
                    axios
                        .post("http://localhost:8888/light_panel", this.input)
                        .then((res) => {
                            this.contact.push(res.data);
                            this.cancelHander();
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                } else {
                    let id = this.contact[this.editindex].id;
                    axios
                        .put("http://localhost:8888/light_panel/" + id, this.input)
                        .then((res) => {
                            this.cancelHander();
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }
            },
            cancelHander() {
                this.input.name = "";
                this.input.place = "";
                this.input.upstream = "";
                this.editindex = null;
            },
            delethander(index) {
                let target = this.contact[index];
                if (confirm("是否刪除" + target.name));
                axios
                    .delete("http://localhost:8888/light_panel/" + target.id)
                    .then((res) => {
                        this.contact.splice(index, 1);
                        cancelHander();
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            },
            edithander(index) {
                this.editindex = index;
                let { name, place, upstream } = this.contact[index];
                this.input = {
                    name,
                    place,
                    upstream,
                };
            },
        },
        mounted() {
            axios
                .get("http://localhost:8888/light_panel")
                .then((res) => {
                    this.contact = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    });
})(Vue);
