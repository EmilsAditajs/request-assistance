<script setup lang="ts">
  defineProps<{
    label: string;
    link: string;
  }>();
</script>

<template>
  <li class="flex items-center gap-2">
    <NuxtLink
      :to="link"
      :aria-label="`Navigate to ${label}`"
      class="flex gap-2 items-center">
      <slot name="icon" />
      <span>{{ label }}</span>
      <slot name="extra" />
    </NuxtLink>
  </li>
</template>
