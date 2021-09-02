console.log('Vue', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    musics: '',
  },
  methods: {
    compare(a, b) {
      if (a.year < b.year) {
        return -1;
      }
      if (a.year > b.year) {
        return 1;
      }
      return 0;
    },

  },
  created() {
    axios
      .get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((res) => {
        const result = res.data.response;
        this.musics = result;
        result.sort(this.compare);
        console.log(this.musics);

      });
  }
});
