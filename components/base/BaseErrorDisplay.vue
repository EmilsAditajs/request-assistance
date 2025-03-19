<script setup lang="ts">
  const props = defineProps({
    error: {
      type: String,
      required: true,
    },
  });
</script>
<template>
  <div>
    <p
      class="py-2 text-xs !text-error-text"
      v-if="error">
      {{ error }}
    </p>
  </div>
</template>
