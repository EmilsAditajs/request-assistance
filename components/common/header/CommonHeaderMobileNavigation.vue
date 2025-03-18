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
    aria-label="Mobile navigation"
    class="flex flex-col gap-4 list-none px-5 items-center">
    <NuxtLink
      v-for="(link, index) in links"
      :key="index"
      :to="link.link"
      class="font-normal text-header-text"
      >{{ link.label }}</NuxtLink
    >
  </nav>
</template>
