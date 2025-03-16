<script setup lang="ts">
const route = useRoute();

const breadcrumbs = computed<Breadcrumb[]>(() => {
  const pathParts = route.path.split('/').filter(Boolean);

  if (pathParts.length === 0) {
    return [{ label: 'Home', link: '/' }];
  }

  const breadcrumbList: Breadcrumb[] = [{ label: 'Home', link: '/' }];

  pathParts.forEach((part, index) => {
    const link = `/${pathParts.slice(0, index + 1).join('/')}`;
    breadcrumbList.push({
      label: capitalize(part),
      link
    });
  });

  return breadcrumbList;
});
</script>
<template>
    <nav aria-label="Breadcrumb">
      <ol class="flex items-center space-x-2">
        <li v-for="(crumb, index) in breadcrumbs" :key="index" class="flex items-center">
          <NuxtLink v-if="crumb.link && index < breadcrumbs.length - 1" :to="crumb.link" class="">
            {{ crumb.label }}
          </NuxtLink>
          
          <span v-else class="">
            {{ crumb.label }}
          </span>
  
          <img v-if="index < breadcrumbs.length - 1" src="/icons/breadcrumb-separator.svg" alt="separator" class="inline-block" />
        </li>
      </ol>
    </nav>
  </template>