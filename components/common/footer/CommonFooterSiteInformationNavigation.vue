<script setup lang="ts">
  const props = defineProps({
    siteInformationLinks: {
      type: Array as PropType<NavigationItem[]>,
      required: true,
    },
  });
</script>
<template>
  <nav
    aria-label="Site information"
    class="flex flex-col lg:flex-row lg:gap-12">
    <NuxtLink
      v-for="(item, index) in siteInformationLinks"
      :key="index"
      :to="item.link"
      class="text-xs leading-9 font-normal text-text-footer-title">
      {{ item.label }}
    </NuxtLink>
  </nav>
</template>
