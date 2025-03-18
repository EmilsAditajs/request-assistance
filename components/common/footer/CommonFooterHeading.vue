<script setup lang="ts">
  const props = defineProps({
    heading: {
      type: String,
      required: true,
    },
  });
</script>
<template>
  <h3 class="text-sm text-text-footer-title leading-8 font-semibold uppercase">{{ heading }}</h3>
</template>
