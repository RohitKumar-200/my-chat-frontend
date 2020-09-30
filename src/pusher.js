import Pusher from "pusher-js";

const pusher = new Pusher("f6b1c526fc24e4978d34", {
    cluster: "eu",
});

export default pusher;