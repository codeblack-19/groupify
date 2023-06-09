<template>
  <div>
    <v-layout>
      <v-app-bar class="px-md-10" :elevation="0">
        <v-app-bar-title>
          <NuxtLink to="/">
            <img class="mt-3" src="~/assets/groupify-logo.png" alt="groupify logo" :width="140"/>
          </NuxtLink>
        </v-app-bar-title>
        <template v-slot:append>
          <NuxtLink class="btn text-decoration-none" to="/groupify">
            <v-btn size="small" variant="outlined" color="blue-darken-2">Groupify Here</v-btn>
          </NuxtLink>
        </template>
      </v-app-bar>

      <v-main>
        <ClientOnly>
          <slot />
        </ClientOnly>
      </v-main>
    </v-layout>
  </div>
</template>

<script setup lang="ts"></script>