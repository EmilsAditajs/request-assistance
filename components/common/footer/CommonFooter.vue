<script setup lang="ts">
  import { siteInformationLinks, footerMainNavigationData, socialLinks, paymentMethodLinks, badges, geoTrustBadge } from "~/data/footerData";
</script>

<template>
  <footer class="bg-sidebar-background pb-8 lg:pt-8 lg:pb-4">
    <div class="container mx-auto px-5 lg:px-0">
      <div class="grid grid-cols-12 lg:grid-rows-3">

        <!-- Footer Navigation -->
        <div class="col-span-12 lg:col-span-8 lg:row-span-2 order-1">
          <nav
            aria-label="Footer main navigation"
            class="grid grid-cols-8">
            <CommonFooterVerticalNavigation
              v-for="(navigation, index) in footerMainNavigationData"
              :key="index"
              :navigationData="navigation"
              class="col-span-8 lg:col-span-2" />
          </nav>
        </div>

        <!-- Newsletter & Social Media -->
        <div class="col-span-12 lg:col-span-4 lg:row-span-3 order-2 lg:pl-20 flex flex-col">
          <CommonFooterSubscribeToNewsletterForm class="order-1 lg:order-1" />

          <CommonFooterExternalLinkDisclaimer class="pb-8 lg:p-0 order-3 lg:order-2" />

          <CommonFooterSocialMediaNavigation :socialLinks="socialLinks" class="order-2 lg:order-3" />
        </div>

        <!-- Badges & Payment Methods -->
        <div class="col-span-12 lg:col-span-8 lg:row-span-1 order-4 lg:pb-10">
          <div class="flex flex-col lg:flex-row lg:items-center border-form-border">
            <div class="py-4 lg:py-0 lg:pr-10 order-3 lg:order-1 border-t lg:border-0">
              <CommonFooterBadges :badges="[geoTrustBadge]" />
            </div>

            <div class="py-4 lg:py-0 order-1 lg:order-2 border-t lg:border-t-0 lg:border-x">
              <CommonFooterPaymentMethodNavigation :paymentMethodLinks="paymentMethodLinks" />
            </div>

            <div class="py-4 lg:py-0 lg:pl-10 order-2 lg:order-3 border-t lg:border-0">
              <CommonFooterBadges :badges="badges" />
            </div>
          </div>
        </div>

        <!-- Site Information & Copyright -->
        <div class="col-span-12 order-3 lg:order-4 lg:border-t border-form-border">
          <div class="flex flex-col lg:flex-row justify-between lg:items-center lg:py-3.5 gap-4">
            <CommonFooterSiteInformationNavigation :siteInformationLinks="siteInformationLinks" class="order-2 lg:order-1" />

            <CommonFooterCopyright class="order-1 lg:order-2" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
