<script setup lang="ts">
  import { alertInfo, alertWarning } from "~/data/requestAssistancePageData";
</script>

<template>
    <section class="mb-12 lg:mb-8">
      <div class="grid grid-cols-2 lg:gap-5">
        <article class="alert-card col-span-2 lg:col-span-1 bg-alert-info">
          <p>{{ alertInfo }}</p>
        </article>
        <article class="alert-card col-span-2 lg:col-span-1 bg-alert-warning">
          <p>{{ alertWarning }}</p>
        </article>
      </div>
    </section>
</template>