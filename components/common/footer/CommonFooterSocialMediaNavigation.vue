<script setup lang="ts">
  import { socialLinks } from "~/data/footerData";
  const props = defineProps({
    socialLinks: {
      type: Array as PropType<SocialLinkItem[]>,
      required: true,
    },
  });
</script>
<template>
  <div class="flex items-center justify-start lg:justify-end gap-3 pb-9 lg:py-10">
    <NuxtLink
      v-for="(item, index) in socialLinks"
      :key="index"
      :to="item.link"
      class="bg-social-background h-12 w-12 rounded-3xl flex items-center justify-center"
      :aria-label="`Link to ${item.label}`">
      <img
        :src="item.imagePath"
        alt="item.altText" />
    </NuxtLink>
  </div>
</template>
