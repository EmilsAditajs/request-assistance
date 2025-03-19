<script setup lang="ts">
  import { useRoute } from "vue-router";
  import { sideNavigationLinks } from "~/data/sideNavigationData";

  const route = useRoute();

  function isActiveLink(link: string) {
    return useRoute().path == link;
  }
</script>
<template>
  <nav class="w-full rounded-md bg-sidebar-background divide-y divide-sidebar-divider flex flex-col">
    <NuxtLink
      v-for="(link, index) in sideNavigationLinks"
      :key="index"
      :to="link.link"
      class="text-xs font-medium pl-6 py-3"
      :class="isActiveLink(link.link) ? '!border-l-2 !border-l-brand-green text-brand-green-hover' : ''"
      >{{ link.label }}</NuxtLink
    >
  </nav>
</template>
