<template>
    <div>
        <v-container class="text-center">
            <v-form v-model="form" @submit.prevent="saveGroup">
                <v-text-field type="text" variant="outlined" label="Grouping Name" style="width: 350px" class="mx-auto"
                    v-model="groupName" :rules="[rules.require, rules.length]">
                </v-text-field>
                <div>
                    <v-btn class="mx-1" :elevation="0" color="grey-lighten-2" type="button"
                        @click="groupifyStore.reshuffle">Reshuffle</v-btn>
                    <v-btn :disabled="!form" :loading="loading" type="submit" :elevation="0" color="blue-darken-2">Save
                        Groups</v-btn>
                </div>
                <p v-if="link" class="text-center mt-2">
                    <NuxtLink :to="`/groupify/${link}`" target="_blank" class="text-blue-darken-2">
                        View Grouping <v-icon icon="mdi-open-in-new" size="15" />
                    </NuxtLink>
                </p>
            </v-form>
        </v-container>
    </div>
</template>

<script setup lang="ts">
const groupifyStore = useGroupifyStore()
const alertstore = useAlertStore()

const form = ref<boolean>(false)
const groupName = ref<string | null>(null)
const loading = ref<boolean>(false)
const link = ref<string | null>()

const rules = ref({
    require: (value: any) => !!value || "Required",
    length: (value: any) => (value.length >= 4 && value.length <= 10) || "Name must be between 4 and 10 characters"
})

const saveGroup = async () => {
    loading.value = true
    link.value = null
    await useFetch('/api/groupings', {
        onRequest({ request, options }) {
            // Set the request headers
            options.method = 'POST'
            options.body = {
                name: groupName.value?.toLocaleLowerCase(),
                groups: groupifyStore.groups
            }
        },
        onResponse({request, response, options}){
            link.value = groupName.value?.toLowerCase()
            return alertstore.showSnackbar(response._data?.message, "success")
        },
        onResponseError({request, response, options}){
            return alertstore.showSnackbar(response?._data?.message, "error")
        },
    }).finally(() => loading.value = false)
}

</script>