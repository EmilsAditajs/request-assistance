<script setup lang="ts">
  defineProps<{
    label: string;
    link: string;
  }>();
</script>

<template>
    <NuxtLink
      :to="link"
      :aria-label="`Navigate to ${label}`"
      class="flex gap-2 items-center justify-right">
      <slot name="icon" />
      <span>{{ label }}</span>
      <slot name="extra" />
    </NuxtLink>
</template>
