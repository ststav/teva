import React from "react";

const selectedItemsService = {};
const selectedItems = [];


const handleSelection = value => () => {
    const currentIndex = selectedItems.indexOf(value);

    if (currentIndex === -1) {
        selectedItems.push(value);
    } else {
        selectedItems.splice(currentIndex, 1);
    }
};


selectedItemsService.selectedItems=selectedItems;
selectedItemsService.handleSelection = handleSelection;

export default selectedItemsService;

