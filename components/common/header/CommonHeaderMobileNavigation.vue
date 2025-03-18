<script setup lang="ts">
  const props = defineProps({
    links: {
      type: Array as PropType<NavigationItem[]>,
      required: true,
    },
  });
</script>
<template>
  <nav aria-label="Mobile navigation">
    <ul class="flex flex-col gap-4 list-none px-5 items-center">
      <BaseNavigationItem
        v-for="(link, index) in links"
        :key="index"
        :label="link.label"
        :link="link.link"
        class="font-normal text-header-text" />
    </ul>
  </nav>
</template>
