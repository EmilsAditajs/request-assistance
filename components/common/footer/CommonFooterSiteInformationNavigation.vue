<script setup lang="ts">
  const props = defineProps({
    siteInformationLinks: {
      type: Array as PropType<NavigationItem[]>,
      required: true,
    },
  });
</script>
<template>
  <nav aria-label="Site information">
    <ul class="flex flex-col lg:flex-row lg:gap-12">
      <BaseNavigationItem
        v-for="(item, index) in siteInformationLinks"
        :key="index"
        :link="item.link"
        :label="item.label"
        class="text-xs leading-9 font-normal text-text-footer-title" />
    </ul>
  </nav>
</template>
