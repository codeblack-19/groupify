<template>
  <div>
    <v-container>
      <p class="text-h4 font-weight-light text-center mt-5">
        Upload the CSV Template
      </p>
      <v-form v-model="form" class="mx-auto mt-2" @submit.prevent="submitForm">
        <p v-if="error" class="text-error text-center mb-2">{{ error }}</p>
        <v-row align="center" justify="center">
          <v-col cols="12" md="4">
            <v-file-input variant="outlined" prepend-icon="" prepend-inner-icon="mdi-file-excel" label="File input"
              accept=".csv" :rules="[
                formRules.required_file,
                formRules.file_type,
                formRules.file_size,
              ]" required v-model="formData.upload"></v-file-input>
          </v-col>
          <v-col cols="12" md="2">
            <v-text-field type="number" variant="outlined" label="Number Groups"
              :rules="[formRules.required, formRules.number_of_groups]" required v-model="groupifyStore.numberOfGroups"
              aria-autocomplete="none"></v-text-field>
          </v-col>
        </v-row>
        <v-sheet class="text-center">
          <v-btn :disabled="!form" :loading="loading" type="submit" :elevation="0" color="blue-darken-2">Create
            Groups</v-btn>
        </v-sheet>
      </v-form>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { extractData } from "~/utils/CSVHandler";

const groupifyStore = useGroupifyStore();
const form = ref<boolean>(false);
const formData = ref({
  upload: [],
});
const loading = ref<boolean>(false)
const error = ref<string | null>(null)

const formRules = ref({
  required: (value: any) => !!value || "Required.",
  required_file: (value: any) => value.length !== 0 || "CSV file is required",
  file_type: (value: any) => value[0].type == "text/csv" || "Invalid file type",
  number_of_groups: (value: any) =>
    value >= 2 || "Minimum number of groups is 2",
  file_size: (value: any) =>
    value[0].size < 2000000 || "File size should be less than 2 MB!",
});

const submitForm = async () => {
  if (!form) return;
  loading.value = true
  error.value = null

  await extractData(formData.value.upload[0]).then(async (res) => {
    if (Math.ceil(res.length/2) <= groupifyStore.numberOfGroups) {
      error.value = "Maximum number of groups should be less than total group members"
    } else {
      groupifyStore.csvData = res;
      await groupifyStore.splitIntoGroups()
    }
  }).catch((e) => error.value = e.message)
    .finally(() => loading.value = false);
};
</script>
