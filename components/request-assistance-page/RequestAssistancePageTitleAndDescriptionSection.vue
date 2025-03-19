<script setup lang="ts">
  import { requestAssistancePageTitleAndDescription } from "~/data/requestAssistancePageData";
</script>
<template>
    <section class="mb-6 lg:mb-7 pr-2.5 lg:pr-20 px-5 lg:px-0">
      <h1 class="mb-6 lg:mb-7">{{ requestAssistancePageTitleAndDescription.title }}</h1>
      <p class="text-lg lg:text-xl font-light">{{ requestAssistancePageTitleAndDescription.description }}</p>
    </section>
</template>