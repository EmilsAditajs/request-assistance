<script setup lang="ts">
  defineProps({
    message: String,
  });
</script>
<template>
  <div>
    <p
      class="py-2 text-xs !text-success-text"
      v-if="message">
      {{ message }}
    </p>
  </div>
</template>
