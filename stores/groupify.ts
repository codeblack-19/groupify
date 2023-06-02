export const useGroupifyStore = defineStore('groupifyStore', () => {
    const csvData = ref<unknown[]>([])
    const numberOfGroups = ref<number>(2)
    const groups = ref<Array<unknown[]>>([])
    const itemPerGroup = computed(() => Math.ceil(csvData.value.length / numberOfGroups.value))

    // split data into groups
    const splitIntoGroups = async () => {
        let groupIndex: number = 1
        for(groupIndex; groupIndex <= numberOfGroups.value; groupIndex++) {
            let start = (groupIndex - 1) * itemPerGroup.value
            let end = start + itemPerGroup.value

            groups.value[(groupIndex - 1)] = csvData.value.slice(start, end)
        }
    }

    // reshuffle data
    const reshuffle = async () => {
        csvData.value = shuffleData(csvData.value)
        groups.value = []
        return splitIntoGroups()
    }

    return {csvData, numberOfGroups, groups, splitIntoGroups, reshuffle}
})