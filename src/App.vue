<template>
  <div class="container">
    <TodoColumn :status="TodoStatus.Pending" />
    <TodoColumn :status="TodoStatus.Doing" />
    <TodoColumn :status="TodoStatus.Done" />

    <ToggleMode />
  </div>
</template>

<script setup lang="ts">
import { TodoColumn, ToggleMode } from "@/components";
import { TodoStatus } from "@/types";
</script>
