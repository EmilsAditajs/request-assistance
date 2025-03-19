<script setup lang="ts">
  import { weCanHelpYouListItems } from "~/data/requestAssistancePageData";
</script>

<template>
  <section class="mb-6 px-5 lg:px-0">
    <h2 class="mb-3 lg:mb-4">We can help you:</h2>
    <ul class="list grid grid-rows-5 lg:grid-rows-3 lg:grid-cols-2 grid-flow-col">
      <li
        class="list-item"
        v-for="(item, index) in weCanHelpYouListItems"
        :key="index">
        <span>{{ item }}</span>
      </li>
    </ul>
  </section>
</template>
