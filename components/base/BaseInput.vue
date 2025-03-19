<script setup lang="ts">
  const props = defineProps({
    id: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
    inputType: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
  });

  const modelValue = defineModel<string | number>();
</script>

<template>
  <div>
    <label
      :for="id"
      class="text-xs mb-2"
      >{{ label }}</label
    >
    <input
      :id="id"
      :type="inputType"
      :placeholder="placeholder"
      v-model="modelValue"
      class="w-full p-2.5 border border-form-border placeholder:text-sm placeholder:text-text-light" />
  </div>
</template>
