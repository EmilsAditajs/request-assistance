<script setup lang="ts">
  const props = defineProps({
    navigationData: {
      type: Object as PropType<VerticalNavigation>,
      required: true,
    },
  });

  const isNavOpen = ref(false);

  const toggleNav = () => {
    isNavOpen.value = !isNavOpen.value;
    console.log(isNavOpen.value);
  };
</script>

<template>
  <nav
    class="flex flex-col text-sm text-text-footer-title border-b border-form-border lg:border-none"
    :aria-label="`${navigationData.label} links`">
    <!-- Toggle Button -->
    <div class="leading-8 font-semibold py-2 lg:py-0">
      <button
        @click="toggleNav"
        :aria-label="`Toggle ${navigationData.label}`"
        class="lg:hidden w-full flex justify-between items-center">
        <CommonFooterHeading :heading="navigationData.label" />
        <span class="text-xl leading-8">
          {{ isNavOpen ? "−" : "+" }}
        </span>
      </button>
      <div class="hidden lg:block">
        <CommonFooterHeading :heading="navigationData.label" />
      </div>
    </div>

    <!-- Navigation Links -->
    <div
      class="lg:flex flex-col w-full"
      :class="!isNavOpen ? 'hidden' : 'flex'">
      <NuxtLink
        v-for="(item, index) in navigationData.links"
        :key="index"
        :to="item.link"
        :label="item.label"
        class="font-normal leading-9">
        <span class="flex"
          >{{ item.label }}
          <img
            v-if="item.isExternal"
            src="/icons/redirect.svg"
            alt="Redirect icon"
            class="ml-2 mt-2 h-2 w-2"
        /></span>
      </NuxtLink>
    </div>
  </nav>
</template>
