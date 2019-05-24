export default class SelectedItems {
    constructor() {
        this.selectedItems = [];
    }

    handleSelectionFinish = selectedItems => {
        this.selectedItems = selectedItems;

        // eslint-disable-next-line no-console
        console.log(`Finished selection ${selectedItems.length}`)
    }
}
