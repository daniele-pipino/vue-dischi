console.log('Vue', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    musics: '',
  },
  methods: {},
  created() {
    axios
      .get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((res) => {
        const result = res.data.response;
        this.musics = result;
        console.log(this.musics);
      });
  }
});
