<template>
    <div class="groupify-bx">
        <GroupifyGroupOutput />
    </div>
</template>

<script setup lang="ts">
import GroupingType from '~/types/Grouping'
const { name: grouping_name } = useRoute().params
const groupifyStore = useGroupifyStore()

const { data, error } = useFetch<GroupingType>(`/api/groupings/${(grouping_name as string).toLowerCase()}`)
if (error.value) {
    throw createError({
        statusCode: 404,
        message: "Invalid Grouping name",
        fatal: true
    })
}

groupifyStore.groups = data.value?.groups ?? []
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