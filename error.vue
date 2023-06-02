<template>
    <div class="error-bx">
        <v-container>
            <v-sheet class="pa-10 my-15 text-center" color="grey-lighten-3">
                <p class="text-h1 font-weight-bold text-blue-darken-2">{{ error.statusCode }}</p>
                <p class="text-h4 font-weight-light">Ooops</p>
                <p class="my-3 text-h3 font-weight-light">{{ error.message }}</p>
                <v-btn :elevation="0" color="blue-darken-2" class="mt-3" @click="handleClearError">Go home...</v-btn>
            </v-sheet>
        </v-container>
    </div>
</template>

<script setup lang="ts">
const { error } = defineProps(["error"]);

const handleClearError = async () => {
  await clearError({
    redirect: "/",
  });
};

useHead({
    title: `${error.message} | ${error.statusCode}`
})

</script>

<style scoped>
.error-bx {
  height: 100vh;
  overflow-y: auto;
  background: linear-gradient(rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.867)),
    url(~/assets/bg-home-1.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>