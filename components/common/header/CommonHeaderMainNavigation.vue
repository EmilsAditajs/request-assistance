<script setup lang="ts">
  const props = defineProps({
    links: {
      type: Array as PropType<NavigationItem[]>,
      required: true,
    },
  });
</script>
<template>
  <nav
    aria-label="Header links"
    class="flex gap-8 list-none">
    <NuxtLink
      v-for="(link, index) in links"
      :key="index"
      :to="link.link"
      class="text-base leading-6 font-normal text-header-text"
      >{{ link.label }}</NuxtLink
    >
  </nav>
</template>
