<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs4 md2 v-for="(item, index) in posts" :key="index" mb-16>
        <v-card class="mx-auto" max-width="100" max-height="90">
          <v-img
            class="white--text align-end rounded-lg"
            height="110px"
            width="120px"
            :src="item.album"
            @click="currentMusic(item.song)"
          >
            <v-btn class="ma-2" text icon color="grey">
              <v-icon @click="snackbar = true">mdi-play</v-icon>
            </v-btn>
          </v-img>

          <div class="overflow_prevent">{{ item.title }}</div>
          <div class="caption overflow_prevent" style="line-height: 100%">
            {{ item.artist }}
          </div>
        </v-card>
      </v-flex>
      <v-snackbar
        v-if="actual_song != ''"
        v-model="snackbar"
        :multi-line="multiLine"
        :timeout="-1"
        light
      >
        <vuetify-audio :file="actual_song" :ended="audioFinish"></vuetify-audio>
      </v-snackbar>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import VuetifyAudio from "vuetify-audio";
export default {
  data() {
    return {
      posts: [],
      errors: [],
      file: "",
      multiLine: true,
      snackbar: true,
      actual_song: "",
    };
  },
  methods: {
    audioFinish() {
      console.log("You see this means audio finish.");
    },
    currentMusic(song) {
      console.log(song);
      this.actual_song = song;
    },
  },
  components: {
    VuetifyAudio,
  },
  mounted() {
    const base = {
      baseURL: this.$store.state.endpoints.baseUrl,
      headers: {
        // Set your Authorization to 'JWT', not Bearer!!!
        Authorization: `JWT ${this.$store.state.jwt}`,
        "Content-Type": "application/json",
      },
      xhrFields: {
        withCredentials: true,
      },
    };
    const axiosInstance = axios.create(base);
    axiosInstance({
      url: "https://musicfyy.herokuapp.com/api/v1/songs/",
      method: "get",
      params: {},
    })
      .then((response) => {
        this.posts = response.data.results;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>

<style lang="css">
.overflow_prevent {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.plyr--full-ui input[type="range"] {
  color: #9921e8 !important;
}
</style>