<template>
  <Modal>
    <form action="" @submit.prevent="apply">
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

const props = defineProps({
  todo: Object,
});

const todoData = reactive(props.todo || {});

const emit = defineEmits(["apply"]);
const apply = () => {
  emit("apply");
};
</script>
