<template>
  <div class="py-10" id="groupify-process">
    <v-container>
      <h1 class="text-h4 text-uppercase font-weight-medium text-center mt-5">
        How it <span class="text-blue-darken-2">works</span>
      </h1>

      <div class="my-15">
        <v-timeline align="start">
          <v-timeline-item v-for="(trend, key) in trendData" dot-color="blue-darken-2" :icon="trend.icon" fill-dot
            :key="key">
            <div :class="(key + 1) % 2 == 0 ? 'text-right' : 'text-left'">
              <div class="text-h6 font-weight-medium">{{ trend.title }}</div>
              <p>
                {{ trend.content }}
              </p>
              <v-btn v-if="key == 0" color="blue-darken-2" size="small" :elevation="0" variant="outlined" class="mt-1" @click="downloadTemplate">Download template</v-btn>
            </div>
          </v-timeline-item>
        </v-timeline>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import ProcessTrend from "~/types/ProcessTrend"

const downloadTemplate = () => {
  return window.open('./Groupify_test.csv')
}

const trendData = ref<ProcessTrend[]>([
  {
    title: 'The template',
    content: 'First download the CSV template document and fill it with the details of the your members. The most important column is the Name column.',
    icon: 'mdi-file-excel'
  }, {
    title: 'Upload Your data',
    content: 'Navigate to "Groupify" page, upload your data and select the number of groups to create.',
    icon: 'mdi-file-upload'
  }, {
    title: 'Wait for Groupify',
    content: 'The system utilizes an efficient algorithm to group members of the csv file into the specified group number.',
    icon: 'mdi-cog'
  }, {
    title: 'Share to others',
    content: 'A Groupify link will be generated once the process is completed. This helps you to share your grouping results to others.',
    icon: 'mdi-share-all'
  }
])
</script>