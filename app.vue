<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Groupify` : 'Groupify';
  }
})

useSeoMeta({
  title: 'Groupify Online',
  ogTitle: 'Groupify Online',
  description: 'Here is the best place to shuffle a list of items into groups',
  ogDescription: 'Here is the best place to shuffle a list of items into groups',
})
</script>
