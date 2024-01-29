<template>
  <div class="toggle-mode">
    <button v-if="!isCleaningMode" class="btn" @click="toggleMode">
      To clean up mode
    </button>
    <button v-else class="btn" @click="toggleMode">To default mode</button>

    <button
      v-if="modeStore.selectedItems.length"
      class="btn btn--second"
      @click="removeSelected"
    >
      Remove selected
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useModeStore } from "@/store/modeStore";
import { useTodoStore } from "@/store/todoStore";

const modeStore = useModeStore();
const todoStore = useTodoStore();
const isCleaningMode = computed(() => modeStore.cleaningMode);
const toggleMode = modeStore.toggleMode;

const removeSelected = () => {
  todoStore.removeMultiple([...modeStore.selectedItems]);
};
</script>

<style src="./styles.css" scoped></style>
