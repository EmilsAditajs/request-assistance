<script setup lang="ts">
  import { contactDetailsSectionTitleAndDescription, countryCodes } from "~/data/requestAssistancePageData";

  const props = defineProps<{
    formData: RequestAssistanceFormData;
    errors: ValidationErrors;
  }>();
</script>
<template>
  <BaseFormSection
    :title="contactDetailsSectionTitleAndDescription.title"
    :description="contactDetailsSectionTitleAndDescription.description">
    <div class="form-group">
      <BaseInput
        v-model="formData.name"
        inputType="text"
        label="Name, surname"
        id="name" />
      <BaseErrorDisplay
        v-if="errors.name"
        :error="errors.name[0]" />
    </div>

    <div class="form-group">
      <BaseInput
        v-model="formData.email"
        inputType="text"
        label="Email"
        id="email" />
      <BaseErrorDisplay
        v-if="errors.email"
        :error="errors.email[0]" />
    </div>

    <div class="form-group">
      <div class="flex gap-4">
        <BaseDropdown
          id="country-code"
          label="Country code"
          v-model="formData.countryCode"
          :options="countryCodes" />

        <BaseInput
          id="phone"
          v-model="formData.phoneNumber"
          label="Phone Number"
          inputType="text"
          class="grow" />
      </div>

      <BaseErrorDisplay
        v-if="errors.phoneNumber"
        :error="errors.phoneNumber[0]" />
    </div>
  </BaseFormSection>
</template>
