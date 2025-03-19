<script setup lang="ts">
  import { headerMainNavigationItems, headerActions } from "~/data/headerData";

  const isMobileMenuOpen = ref(false);
</script>
<template>
  <div class="border-b border-sidebar-divider">
    <div class="container mx-auto">
      <div class="flex justify-between">
        <button
          class="lg:hidden flex items-center justify-between p-5"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          aria-label="Toggle menu">
          <img
            src="/icons/hamburger.svg"
            alt="Open menu"
            class="w-5" />
        </button>

        <NuxtLink
          aria-label="Homepage"
          to="/">
          <div class="bg-brand-green inline-flex px-4 py-5 lg:px-7 lg:py-10">
            <img
              src="/logo/airBaltic.svg"
              alt="Airbaltic company logo"
              class="w-16 lg:w-32" />
          </div>
        </NuxtLink>

        <div class="py-6 hidden lg:flex flex-col justify-between">
          <CommonHeaderActions :action-list="headerActions" />

          <CommonHeaderMainNavigation :links="headerMainNavigationItems" />
        </div>
      </div>

      <div
        v-if="isMobileMenuOpen"
        class="lg:hidden bg-white py-4">
        <CommonHeaderMobileNavigation :links="headerMainNavigationItems" />
      </div>
    </div>
  </div>
</template>
