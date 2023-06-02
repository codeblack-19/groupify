<template>
  <client-only>
    <v-snackbar
      :timeout="3000"
      :color="alertstore.snackOptions?.type"
      v-model="alertstore.snackOptions.show"
    >
      {{ alertstore.snackOptions?.message }}
  
      <template v-slot:actions>
        <v-btn
          color="white"
          variant="text"
          @click="alertstore.snackOptions.show = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </client-only>
</template>

<script setup lang="ts">
const alertstore = useAlertStore();
</script>
