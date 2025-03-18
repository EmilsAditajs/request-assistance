<script setup lang="ts">
  const props = defineProps({
    badges: {
      type: Array as PropType<Badge[]>,
      required: true,
    },
  });
</script>
<template>
  <div class="flex gap-5">
    <img
      v-for="(badge, index) in badges"
      :key="index"
      :src="badge.imagePath"
      :alt="badge.altText" />
  </div>
</template>
