const app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    seen: true,
  },
});

app.message = "changed some data";
