<template>
  <div :class="[`todo-column--${status}`]" class="todo-column">
    <div class="todo-column__header">
      <span :class="`todo-column__title--${status}`" class="todo-column__title">
        {{ status }}
      </span>
    </div>

    <TodoList :status="status" />
    <button v-if="!cleaningMode" class="todo-column__add" @click="showModal">
      Add todo +
    </button>

    <AddTodoModal
      v-if="modalIsVisible"
      v-model="modalIsVisible"
      :status="status"
      title="Add Todo"
      @close="closeModal"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { TodoList, AddTodoModal } from "@/components";
import { useModeStore } from "@/store/modeStore";
import { storeToRefs } from "pinia";

interface Props {
  status: string;
}
defineProps<Props>();

const { cleaningMode } = storeToRefs(useModeStore());

const modalIsVisible = ref(false);
const showModal = () => {
  modalIsVisible.value = true;
};
const closeModal = () => {
  modalIsVisible.value = false;
};
</script>

<style src="./styles.css" scoped></style>
