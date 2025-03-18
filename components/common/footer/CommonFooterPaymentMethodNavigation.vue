<script setup lang="ts">
  const props = defineProps({
    paymentMethodLinks: {
      type: Array as PropType<PaymentMethodLinkItem[]>,
      required: true,
    },
  });
</script>
<template>
  <div class="flex justify-start gap-5 lg:py-2.5 lg:px-10">
    <div class="flex items-center gap-2.5">
      <NuxtLink
        v-for="(item, index) in paymentMethodLinks"
        :key="index"
        :to="item.link"
        :aria-label="`Navigate to: ${item.label}`">
        <img
          :src="item.imagePath"
          :alt="item.altText" />
      </NuxtLink>
    </div>
    <NuxtLink
      to="#"
      class="text-xs leading-9 font-normal text-text-footer-title"
      ><span class="underline decoration-1 decoration-brand-green">more</span></NuxtLink
    >
  </div>
</template>
