<script setup lang="ts">
  const props = defineProps({
    actionList: {
      type: Array as PropType<HeaderAction[]>,
      required: true,
    },
  });
</script>
<template>
  <nav
    aria-label="Header actions"
    class="flex justify-end gap-6 list-none">
    <NuxtLink
      v-for="(action, index) in actionList"
      :key="index"
      :to="action.link"
      :label="action.label"
      class="text-xs font-medium text-header-text flex items-center gap-2">
      <img
        :src="action.iconPath"
        :alt="action.label"
        class="w-5 h-5" />
      {{ action.label }}
    </NuxtLink>
  </nav>
</template>
