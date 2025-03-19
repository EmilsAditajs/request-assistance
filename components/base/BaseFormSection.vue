<script setup lang="ts">
  const props = defineProps({
    title: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
  });
</script>

<template>
  <section class="form-section grid grid-cols-12">
    <div class="col-span-12 lg:col-span-6 lg:pr-20">
      <h2>{{ title }}</h2>
      <div class="flex">
        <p>{{ description }}<slot name="link" /></p>
      </div>
    </div>
    <div class="col-span-12 lg:col-span-6">
      <slot />
    </div>
  </section>
</template>
