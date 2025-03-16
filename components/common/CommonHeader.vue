<script setup lang="ts">
import { headerMainNavigationItems, headerActions } from '~/data/headerData';

const isMobileMenuOpen = ref(false);

</script>
<template>
  <div class="border-b border-sidebar-divider">
    <div class="container mx-auto">
      <div class="flex justify-between">
        <button
          class="md:hidden flex items-center justify-between p-5"
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
          <div class="bg-brand-green inline-flex px-4 py-5 md:px-7 md:py-10">
            <img
              src="/logo/airBaltic.svg"
              alt="Airbaltic company logo"
              class="w-16 md:w-32" />
          </div>
        </NuxtLink>

        <div class="py-6 hidden md:flex flex-col justify-between">
          <nav aria-label="Header actions">
            <ul class="flex justify-end gap-6 list-none">
              <li
                v-for="action in headerActions"
                :key="action.label"
                class="flex items-center">
                <NuxtLink
                  :to="action.link"
                  :aria-label="action.label"
                  class="flex items-center gap-2">
                  <img
                    :src="action.iconPath"
                    :alt="action.label"
                    class="w-5 h-5" />
                  <span class="text-xs font-medium text-header-text">
                    {{ action.label }}
                  </span>
                </NuxtLink>
              </li>
            </ul>
          </nav>

          <nav aria-label="Header links">
            <ul class="flex gap-6 lg:gap-8 list-none">
              <li
                v-for="item in headerMainNavigationItems"
                :key="item.label"
                class="flex items-center">
                <NuxtLink
                  :to="item.link"
                  :aria-label="'Navigate to ' + item.label">
                  <span
                    class="text-base lg:text-xl leading-6 font-normal text-header-text">
                    {{ item.label }}
                  </span>
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div
        v-if="isMobileMenuOpen"
        class="md:hidden bg-white py-4">
        <nav aria-label="Mobile navigation">
          <ul class="flex flex-col gap-4 list-none">
            <li
              v-for="item in headerMainNavigationItems"
              :key="item.label"
              class="text-center">
              <NuxtLink
                :to="item.link"
                :aria-label="'Navigate to ' + item.label"
                class="text-xl font-normal text-header-text">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
