<template>
  <div>
    <client-only>
      <v-container>
        <div v-if="groupifyStore.groups.length > 1">
          <v-select density="compact" variant="outlined" v-model="selectedHeader" label="Show by" :items="headers" style="width: 200px;"></v-select>
        </div>
        <v-scroll-y-reverse-transition>
          <v-row v-if="groupifyStore.groups.length" justify="center">
            <v-col v-for="(group, index) in groupifyStore.groups" cols="12" md="4" sm="6" :key="index">
              <v-card v-if="group.length" :elevation="0" color="grey-lighten-3">
                <v-card-title class="text-center">Group {{ index + 1 }}</v-card-title>
                <v-divider length="90%" class="mx-auto" />
                <v-card-text>
                  <p v-for="(item, itemIndex) in group" :key="itemIndex">
                    {{ itemIndex + 1 }}. {{ (item as GroupType)[selectedHeader ?? "Name"] }}
                  </p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-scroll-y-reverse-transition>
      </v-container>
    </client-only>
  </div>
</template>

<script setup lang="ts">
import GroupType from "~/types/Group";

const groupifyStore = useGroupifyStore();
const selectedHeader = ref<string | null>()

const headers = computed(() => {
  if (groupifyStore.groups.length > 0)
    return Object.keys(groupifyStore.groups[0][0] as GroupType)
  return []
})

watch(() => groupifyStore.csvData, () => {
  selectedHeader.value = Object.keys(groupifyStore.csvData[0] as GroupType)[0]
})

watch(() => groupifyStore.groups, () => {
  if(groupifyStore.groups.length){
    selectedHeader.value = Object.keys(groupifyStore.groups[0][0] as GroupType)[0]
  }
}, { immediate: true })

</script>