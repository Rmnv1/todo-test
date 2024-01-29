<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="modelValue" class="modal">
        <div class="modal__overlay" @click="close"></div>
        <div class="modal__content">
          <div v-if="title" class="modal__header">
            <slot name="header">
              <span class="modal__title">
                {{ title }}
              </span>
            </slot>
          </div>
          <div class="modal__body">
            <slot />

            <button class="modal__close" @click="close">&times;</button>
          </div>
          <div v-if="$slots.footer" class="modal__footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    required: true,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);
const close = () => {
  if (!props.modelValue) return;
  emit("update:modelValue", false);
};
</script>

<style src="./styles.css"></style>
