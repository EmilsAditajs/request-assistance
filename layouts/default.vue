<script setup lang="ts">

</script>
<template>
    <div class="test">
        <header>
            <CommonHeader />
        </header>

        <CommonBreadcrumbs />

        <div class="container mx-auto test">
            <aside class="test">
                <CommonSideNavigation />
            </aside>

            <main class="test">
                <slot></slot>
            </main>
        </div>

        <footer class="test">
            <CommonFooter />
        </footer>
    </div>
</template>
