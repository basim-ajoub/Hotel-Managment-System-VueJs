<template>
  <div class="show-guest-view">
    <showGuest  />
 
  </div>
</template>

<script>
import showGuest from "../components/guests/showguest.vue";
export default {
  name: "showguestview",
  components: {
    showGuest,
  },
};
</script>
