export const useAlertStore = defineStore('alertStore', () => {
    const snackOptions = ref<{
        show: boolean,
        message: any,
        type: "success" | "error" | "warning",
    }>({ show: false,  message: "", type: "success"})

    const showSnackbar = (message: any, type: "success" | "error" | "warning") => {
        snackOptions.value = { show: true, message, type }
    }

    return { snackOptions, showSnackbar }
})