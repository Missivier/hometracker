<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <div class="p-4 bg-white shadow rounded-lg">
    <h3 class="text-lg font-bold mb-2">{{ title }}</h3>
    <slot />
  </div>
</template>
