<script setup lang="ts">
  import { selectFlightSectionTitleAndDescription } from "~/data/requestAssistancePageData";

  const props = defineProps<{
    formData: RequestAssistanceFormData;
    errors: ValidationErrors;
  }>();

  const addFlight = () => {
    props.formData.flights.push({ flightNumber: "", flightDate: "" });
  };

  const removeFlight = (index: number) => {
    if (props.formData.flights.length > 1) {
      props.formData.flights.splice(index, 1);
    }
  };
</script>

<template>
  <BaseFormSection
    :title="selectFlightSectionTitleAndDescription.title"
    :description="selectFlightSectionTitleAndDescription.description">
    <div
      v-for="(flight, index) in formData.flights"
      :key="index">
      <RequestAssistancePageFormFlightSection
        :isLastSection="index === formData.flights.length - 1"
        :flight="flight"
        :errors="errors"
        @remove="removeFlight(index)"
        @add="addFlight()" />
    </div>
    <BaseErrorDisplay
      v-if="errors.flights"
      :error="errors.flights[0]" />
  </BaseFormSection>
</template>
