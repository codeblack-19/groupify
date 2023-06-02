<template>
  <div class="groupify-bx">
    <!-- Upload form -->
    <GroupifyCreateForm v-if="groupifyStore.groups.length == 0" />

    <!-- Save Group form -->
    <GroupifySaveGroup v-else />

    <!-- divider -->
    <v-divider v-if="groupifyStore.groups.length" class="my-4" color="blue-darken-2"></v-divider>

    <!-- group cards -->
    <GroupifyGroupOutput />

    <!-- snack bar -->
    <AlertSnackBar />

  </div>
</template>

<script setup lang="ts">
const groupifyStore = useGroupifyStore()
useHead({
  title: 'Grouping'
})
</script>

<style scoped>
.groupify-bx {
  height: calc(100vh - 64px);
  overflow-y: auto;
  background: linear-gradient(rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.867)),
    url(~/assets/bg-home-1.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>