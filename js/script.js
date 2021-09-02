console.log('Vue', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    musics: '',
    selectValue: '',
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
    filterAlbums(song) {
      if (this.selectValue === '' || this.selectValue === 'All') {
        return true;
      }
      const filter = this.selectValue.trim().toLowerCase();
      song = song.genre.toLowerCase();
      return song.includes(filter);
    }


  },
  created() {
    axios
      .get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((res) => {
        const result = res.data.response;
        this.musics = result;
        console.log(result);
        result.sort(this.compare);
      });
  }
});
