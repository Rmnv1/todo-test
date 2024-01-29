<template>
  <Modal>
    <form action="" @submit.prevent="addTodo">
      <div class="fields-wrap">
        <input
          v-model="todoData.title"
          type="text"
          class="input"
          placeholder="Todo title"
          required
        />
        <textarea
          v-model="todoData.description"
          name=""
          id=""
          class="textarea"
          placeholder="Todo description"
        ></textarea>
      </div>
      <div class="btns-wrap">
        <button class="btn">Submit</button>
      </div>
    </form>
  </Modal>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { Modal } from "@/components";
import { useTodoStore } from "@/store/todoStore";
import { Todo, TodoStatus } from "@/types";

const props = defineProps<{
  todo: Todo,
  status: TodoStatus,
}>();

const todoStore = useTodoStore();

const todoData = reactive(props.todo || {});
const generateUniqueId = () => {
  return Date.now() + Math.floor(Math.random());
};
const addTodo = () => {
  todoData.id = generateUniqueId();
  todoData.status = props.status;
  todoStore.addTodo(todoData);
  closeModal();
};

const emit = defineEmits(["close"]);
const closeModal = () => {
  emit("close");
};
</script>
