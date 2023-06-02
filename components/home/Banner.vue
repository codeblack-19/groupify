<template>
  <div class="banner">
    <v-container class="welcome-container d-flex justify-center align-center">
      <div class="mt-n10 text-center">
        <h2 class="text-h2 font-weight-bold text-blue-darken-2">
          Welcome to Groupify
        </h2>
        <p class="text-h5 text-grey-darken-2 font-weight-light mt-1 mb-5">
          Here is the best place to shuffle a list of members into groups
        </p>
        <div class="bounce-bx">
          <v-sheet
            class="bounce d-flex justify-center align-center"
            rounded="circle"
            width="50px"
            height="50px"
            @click="scrolToElement('groupify-process')"
          >
            <v-icon
              color="blue-darken-3"
              class="mt-1"
              icon="mdi-chevron-down"
              size="40"
            />
          </v-sheet>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const scrolToElement = (elementId: string) => {
  document.getElementById(elementId)?.scrollIntoView({behavior: 'smooth'})
}
</script>

<style scoped>
.banner {
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.867)
    ),
    url(~/assets/bg-home-1.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
}

.welcome-container {
  height: calc(100vh - 64px);
}

.bounce-bx {
  position: relative;
  height: 100px;
}

.bounce {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 45%;
  margin-top: 0px;
  transition: 1s;
  box-shadow: 0 0 5px 0px #1976d2;
  animation: bounce-arrow 1.5s infinite ease-out;
}

@keyframes bounce-arrow {
  0% {
    margin-top: 0px;
    box-shadow: 0 0 5px 0px #1976d28a;
  }
  50% {
    margin-top: 10px;
    box-shadow: 0 0 20px 1px #438cd6b9;
  }
  100% {
    margin-top: 0px;
    box-shadow: 0 0 5px 0px #1976d28b;
  }
}
</style>
