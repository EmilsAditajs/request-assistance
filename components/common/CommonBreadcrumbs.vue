<script setup lang="ts">
  const route = useRoute();

  const generateFullBreadcrumbs = (): Breadcrumb[] => {
    const pathParts = route.path.split("/").filter(Boolean);
    if (pathParts.length === 0) return [];

    const breadcrumbs: Breadcrumb[] = [{ label: "Home", link: "/" }];

    pathParts.forEach((part, index) => {
      breadcrumbs.push({
        label: formatLabel(part),
        link: index === pathParts.length - 1 ? "" : `/${pathParts.slice(0, index + 1).join("/")}`,
      });
    });

    return breadcrumbs;
  };

  const getMobileBreadcrumb = (): Breadcrumb | null => {
    const pathParts = route.path.split("/").filter(Boolean);

    if (pathParts.length === 0) return null;

    const isFirstLevel = pathParts.length === 1;
    const parentPath = isFirstLevel ? "/" : `/${pathParts.slice(0, -1).join("/")}`;
    const parentLabel = isFirstLevel ? "Home" : formatLabel(pathParts[pathParts.length - 2]);

    return { label: `Back to ${parentLabel}`, link: parentPath };
  };

  const breadcrumbs = computed(generateFullBreadcrumbs);
  const mobileBreadcrumb = computed(getMobileBreadcrumb);
</script>

<template>
  <div class="lg:border-b border-sidebar-divider hidden lg:block">
    <nav
      aria-label="Breadcrumb"
      class="container mx-auto px-5 lg:px-0">
      <ul class="flex items-center">
        <li
          v-for="(crumb, index) in breadcrumbs"
          :key="index"
          class="flex items-center text-xs lg:text-sm lg:leading-4 lg:text-text-light font-medium lg:font-normal">
          <NuxtLink
            v-if="crumb.link && index < breadcrumbs.length - 1"
            :to="crumb.link"
            class="py-4"
            :aria-label="`Navigate to ${crumb.label}`">
            <span class="lg:border-b lg:border-brand-green text-text-light">
              {{ crumb.label }}
            </span>
          </NuxtLink>

          <span
            v-else
            class="py-4 text-text-light"
            aria-current="page">
            {{ crumb.label }}
          </span>

          <img
            v-if="index < breadcrumbs.length - 1"
            src="/icons/breadcrumb-separator.svg"
            alt="Breadcrumb separator"
            class="inline-block h-4 px-4"
            aria-hidden="true" />
        </li>
      </ul>
    </nav>
  </div>

  <div
    v-if="mobileBreadcrumb"
    class="border-sidebar-divider lg:hidden">
    <nav
      aria-label="Mobile breadcrumb"
      class="container mx-auto px-5">
      <NuxtLink
        :to="mobileBreadcrumb.link"
        class="flex items-center py-4 text-brand-blue-ui font-medium text-xs"
        :aria-label="'Go back to ' + mobileBreadcrumb.label">
        <img
          src="/icons/breadcrumb-return-to.svg"
          alt="Back icon"
          class="h-4 pr-2" />
        {{ mobileBreadcrumb.label }}
      </NuxtLink>
    </nav>
  </div>
</template>
