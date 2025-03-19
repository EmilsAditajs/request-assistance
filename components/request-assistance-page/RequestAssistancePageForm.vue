<script setup lang="ts">
  import { useFormValidation } from "~/composables/useFormValidation";
  import { useRequestAssistanceFormStore } from "~/stores/requestAssistanceFormStore";
  import { countryCodes, disclaimer, privacyPolicyLink } from "~/data/requestAssistancePageData";

  const defaultCountryCode = countryCodes[0].value;
  const requestAssistanceFormStore = useRequestAssistanceFormStore();
  const requestAssistanceFormInputData = ref<RequestAssistanceFormData>({
    name: "",
    email: "",
    countryCode: defaultCountryCode,
    phoneNumber: "",
    flights: [
      {
        flightNumber: "",
        flightDate: "",
      },
    ],
  });

  const { requestAssistanceFormData } = storeToRefs(requestAssistanceFormStore);

  const statusMessage = ref<string>("");

  const { validate: validateRequestAssistanceForm, errors: requestAssistanceErrors } = useFormValidation(requestAssistanceFormSchema);

  const handleSubmit = () => {
    const { isValid } = validateRequestAssistanceForm(requestAssistanceFormInputData.value);
    if (isValid) {
      requestAssistanceFormStore.setRequestAssistanceFormData(requestAssistanceFormInputData.value);
      statusMessage.value = "Assistance request successful!";
    } else {
      statusMessage.value = "";
    }
  };
</script>

<template>
  <section class="bg-sidebar-background">
    <form
      @submit.prevent="handleSubmit"
      novalidate
      role="form"
      class="divide-y divider-form-border lg: pb-4">
      <RequestAssistancePageContactDetailsForm
        :formData="requestAssistanceFormInputData"
        :errors="requestAssistanceErrors" />

      <RequestAssistancePageFlightDetailsForm
        :formData="requestAssistanceFormInputData"
        :errors="requestAssistanceErrors" />

      <BaseFormSection :description="disclaimer.description">
        <template #link>
          <a
            :href="privacyPolicyLink.link"
            class="underline decoration solid"
            >{{ privacyPolicyLink.label }}</a
          >
        </template>
        <button
          type="submit"
          class="button button-primary">
          Confirm
        </button>
        <BaseSuccessDisplay
          v-if="statusMessage"
          :message="statusMessage" />
      </BaseFormSection>
    </form>
  </section>
</template>
