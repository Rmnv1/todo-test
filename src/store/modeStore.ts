import { defineStore } from "pinia";

export const useModeStore = defineStore("modeStore", {
  state: () => ({
    cleaningMode: false,
    selectedItems: [] as number[],
  }),
  actions: {
    addToSelected(todoId: number) {
      let tempSelected = this.selectedItems;
      if (!tempSelected.includes(todoId)) {
        tempSelected.push(todoId);
      } else {
        tempSelected = tempSelected.filter((id) => id !== todoId);
      }

      this.selectedItems = tempSelected;
    },
    removeSelected() {},
    toggleMode() {
      this.selectedItems = [];
      this.cleaningMode = !this.cleaningMode;
    },
  },
});
