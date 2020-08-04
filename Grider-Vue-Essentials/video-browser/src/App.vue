<template>
  <div>
    <SearchBar @termChange="onTermChange"></SearchBar>
    <VideoList :videos="videos"></VideoList>
  </div>
</template>


<script>
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

import axios from 'axios';
const API_KEY = 'AIzaSyCwif63ZJ_W0VUEP0FJGCXBepIiQWnObBU';

export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList
  },
  data() {
    return {
      videos: []
    };
  },
  methods: {
    onTermChange(searchTerm) {
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: API_KEY,
          type: 'video',
          part: 'snippet',
          q: searchTerm
        }
      }).then(response => { 
        console.log(response);
        this.videos = response.data.items;
      })
      .catch(err => {
        console.log(err.message);
      })
    }
  }
}

//   methods: {
//     onTermChange(searchTerm) {
//       axios.get('https://www.googleapis.com/youtube/v3/search', {
//         params: {
//           key: API_KEY,
//           type: 'video',
//           part: 'snippet',
//           q: searchTerm
//         }
//       }).then(response => { 
//         console.log(response);
//       })
//       .catch(err => {
//         console.log(err.message);
//       });
//     }
//   }
// }
</script>

