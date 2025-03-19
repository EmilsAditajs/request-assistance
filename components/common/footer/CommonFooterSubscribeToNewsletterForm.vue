<script setup lang="ts">
  import { ref } from "vue";
  import { useFormValidation } from "~/composables/useFormValidation";
  import { useSubscribeToNewsletterStore } from "~/stores/subscribeToNewsletterFormStore";

  const subscriptionStore = useSubscribeToNewsletterStore();
  const subscriptionFormData = ref<SubscribeToNewsletterFormData>({
    email: "",
  });
  const statusMessage = ref<string>("");

  const { validate: validateSubscriptionForm, errors: subscriptionErrors } = useFormValidation(subscriptionFormSchema);

  const handleSubmit = () => {
    const { isValid } = validateSubscriptionForm(subscriptionFormData.value);
    if (isValid) {
      subscriptionStore.setSubscribeToNewsletterFormData(subscriptionFormData.value);
      statusMessage.value = "Subscription successful!";
    } else {
      statusMessage.value = "";
    }
  };
</script>

<template>
  <div class="grow relative pb-7 lg:pb-0 pt-2 lg:pt-0 lg:pl-5">
    <CommonFooterHeading
      heading="Subscribe to newsletter"
      class="pb-1.5" />

    <form
      @submit.prevent="handleSubmit"
      novalidate
      role="form">
      <div class="relative">
        <div class="flex items-center w-full">
          <BaseInput
            id="subscribe_email_input"
            v-model="subscriptionFormData.email"
            placeholder="Enter your email"
            inputType="email"
            class="w-full" />

          <button
            type="submit"
            aria-label="Submit email subscription"
            class="absolute top-1/2 right-3 transform -translate-y-1/2 flex items-center">
            <img
              src="/icons/subscribe.svg"
              alt="Subscribe icon" />
          </button>
        </div>
      </div>

      <BaseErrorDisplay
        v-if="subscriptionErrors.email"
        :error="subscriptionErrors.email[0]"
        id="emailErrorMessage" />

      <BaseSuccessDisplay
        v-if="statusMessage"
        :message="statusMessage" />
    </form>
  </div>
</template>
