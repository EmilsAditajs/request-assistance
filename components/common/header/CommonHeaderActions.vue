<script setup lang="ts">
  const props = defineProps({
    actionList: {
      type: Array as PropType<HeaderAction[]>,
      required: true,
    },
  });
</script>
<template>
  <nav aria-label="Header actions">
    <ul class="flex justify-end gap-6 list-none">
      <BaseNavigationItem
        v-for="(action, index) in actionList"
        :key="index"
        :link="action.link"
        :label="action.label"
        class="text-xs font-medium text-header-text">
        <template #icon>
          <img
            :src="action.iconPath"
            :alt="action.label"
            class="w-5 h-5" />
        </template>
      </BaseNavigationItem>
      <!-- <li
        v-for="action in actionList"
        :key="action.label"
        class="flex items-center">
        <NuxtLink
          :to="action.link"
          :aria-label="action.label"
          class="flex items-center gap-2">
          
          <span class="text-xs font-medium text-header-text">
            {{ action.label }}
          </span>
        </NuxtLink>
      </li> -->
    </ul>
  </nav>
</template>
