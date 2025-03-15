<script setup lang="ts">

</script>
<template>
    <div class="">
        <header class="">
            <CommonHeader />
        </header>

        <div class="flex">
            <aside class="">
                <CommonSideNavigation />
            </aside>

            <main class="">
                <slot></slot>
            </main>
        </div>

        <footer class="">
            <CommonFooter />
        </footer>
    </div>
</template>
