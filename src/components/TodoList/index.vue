<template>
  <ul class="todo-list">
    <Draggable
      class="todo-list__draggable"
      :list="todos"
      group="todos"
      itemKey="id"
      :disabled="isCleaningMode"
      @end="updateTodoStore(allTodos)"
    >
      <template #item="{ element: todo }">
        <li
          :class="{ 'todo-list__item--selected': isSelected(todo.id) }"
          class="todo-list__item"
          @click="
            () => (!isCleaningMode ? todoEdit(todo) : selectItems(todo.id))
          "
        >
          <span class="todo-list__title">
            {{ todo.title }}
          </span>
          <span v-if="todo.description" class="todo-list__desc">
            {{ todo.description }}
          </span>
          <button class="todo-list__item-remove" @click.stop="todoDelete(todo)">
            &times;
          </button>
        </li>
      </template>
    </Draggable>

    <EditTodoModal
      v-if="modalIsVisible"
      v-model="modalIsVisible"
      :todo="currentTodo"
      title="Edit Todo"
      @apply="todoUpdate"
    />
  </ul>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useTodoStore } from "@/store/todoStore";
import { useModeStore } from "@/store/modeStore";
import { Todo, TodoStatus } from "@/types/index";
import Draggable from "vuedraggable";
import { EditTodoModal } from "@/components";
import { MappedTodos } from "@/data/todos.ts";

interface Props {
  status: TodoStatus;
}

const props = defineProps<Props>();

const modalIsVisible = ref(false);

const todoStore = useTodoStore();
const modeStore = useModeStore();

const allTodos = ref(todoStore.todos);
const todos = computed(() => todoStore.getByStatus(props.status));

let currentTodo: object = {};

const updateTodoStore = (todos: MappedTodos) => {
  todoStore.updateTodos(todos);
};

const todoUpdate = () => {
  modalIsVisible.value = false;
  updateTodoStore(allTodos.value);
};
const todoDelete = (todo: Todo) => {
  todoStore.removeTodo(todo);
  updateTodoStore(allTodos.value);
};

const todoEdit = (todo: Todo) => {
  currentTodo = todo;
  modalIsVisible.value = true;
};

// cleaning mode
const isCleaningMode = computed(() => modeStore.cleaningMode);

const selected = computed(() => modeStore.selectedItems);
const selectItems = (todoId: number) => {
  modeStore.addToSelected(todoId);
};
const isSelected = (id: number) => {
  let selectedArray = [...selected.value];
  return selectedArray.includes(id);
};
</script>

<style src="./styles.css" scoped></style>
