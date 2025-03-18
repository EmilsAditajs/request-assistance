<script setup lang="ts">
  const props = defineProps({
    links: {
      type: Array as PropType<NavigationItem[]>,
      required: true,
    },
  });
</script>
<template>
  <nav aria-label="Header links">
    <ul class="flex gap-8 list-none">
      <BaseNavigationItem
        v-for="(link, index) in links"
        :key="index"
        :label="link.label"
        :link="link.link"
        class="text-base leading-6 font-normal text-header-text" />
    </ul>
  </nav>
</template>
