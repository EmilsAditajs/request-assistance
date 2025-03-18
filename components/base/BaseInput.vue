<script setup lang="ts">
  const props = defineProps<{
    id: string;
    placeholder?: string;
    inputType: string;
    label?: string;
  }>();

  const modelValue = defineModel<string | number>();
</script>

<template>
  <div class="input">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :type="inputType"
      :placeholder="placeholder"
      v-model="modelValue"
      class="w-full p-2.5 border border-form-border placeholder:text-sm placeholder:text-text-light" />
  </div>
</template>
