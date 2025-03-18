<script setup lang="ts">
  const currentYear = new Date().getFullYear();
</script>
<template>
  <p class="text-xs text-text-light">
    <small>© {{ currentYear }} airBaltic</small>
  </p>
</template>
