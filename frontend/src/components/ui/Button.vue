<script setup lang="ts">
defineProps<{
  label: string;
  type?: "button" | "submit";
  color?: "primary" | "secondary";
}>();
</script>

<template>
  <button
    :class="[
      'px-4 py-2 rounded text-white font-bold transition',
      color === 'primary'
        ? 'bg-primary hover:bg-blue-700'
        : 'bg-secondary hover:bg-purple-700',
    ]"
    :type="type || 'button'"
  >
    {{ label }}
  </button>
</template>
