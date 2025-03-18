<script setup lang="ts">
  import { useRoute } from "vue-router";

  const route = useRoute();
</script>
<template>
  <div>
    <header>
      <CommonHeader />
    </header>

    <CommonBreadcrumbs v-if="route.path !== '/'" />

    <div class="container mx-auto px-5 pt-2 pb-4 lg:px-0 lg:pt-12 lg:pb-16">
      <div class="grid grid-cols-3 gap-14">
        <aside class="hidden lg:block lg:col-span-1">
          <CommonSideNavigation />
        </aside>

        <main class="col-span-3 lg:col-span-2">
          <slot></slot>
        </main>
      </div>
    </div>

    <footer>
      <CommonFooter />
    </footer>
  </div>
</template>
