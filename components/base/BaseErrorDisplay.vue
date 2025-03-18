<script setup lang="ts">
  defineProps({
    error: String,
  });
</script>
<template>
  <div>
    <p class="py-2 text-xs text-error-text" v-if="error">{{ error }}</p>
  </div>
</template>