<template>
  <div id="app">
    <h1>Together</h1>
    <div v-for="(value, index) in dateValues()" :key="`date-value-${index}`">
      {{ value }}
    </div>
    <div class="heart">❤️</div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "App",
  data() {
    return {
      now: new Date(),
    };
  },
  mounted() {
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  },
  methods: {
    dateValues() {
      const now = moment(this.now);
      const end = moment("2020-09-15");
      const duration = moment.duration(now.diff(end));

      const years = duration.years();
      const months = duration.months();
      const days = duration.days();
      const hours = duration.hours();
      const seconds = duration.seconds();

      return [`${years} year(s)`, `${months} month(s)`, `${days} day(s)`, `${hours} hour(s)`, `${seconds} second(s)`];
    },
  },
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.heart {
  margin-top: 16px;
  font-size: 64px;
}
</style>
