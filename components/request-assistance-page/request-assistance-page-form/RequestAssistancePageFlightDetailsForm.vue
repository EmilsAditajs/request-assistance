<script setup lang="ts">
  import { selectFlightSectionTitleAndDescription } from "~/data/requestAssistancePageData";

  const props = defineProps<{
    formData: RequestAssistanceFormData;
    errors: ValidationErrors;
  }>();

  const isLastSection = ref(true);

  watch(
    () => props.formData.flights,
    (newFlights) => {
      isLastSection.value = newFlights.length <= 1;
    },
    { deep: true }
  );

  const emit = defineEmits<{
    (event: "update:formData", value: any): void;
  }>();

  const addFlightSection = () => {
    const updatedFlights = [...props.formData.flights, { flightNumber: "", flightDate: "" }];
    emit("update:formData", { ...props.formData, flights: updatedFlights });
  };

  const removeFlightSection = () => {
    if (props.formData.flights.length > 0) {
      const updatedFlights = props.formData.flights.slice(0, -1);
      emit("update:formData", { ...props.formData, flights: updatedFlights });
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
        :errors="errors" />
    </div>
    <BaseErrorDisplay
      v-if="errors.flights"
      :error="errors.flights[0]" />
    <div class="flex gap-3 lg:pt-2 lg:pb-5">
      <button
        type="button"
        @click="addFlightSection"
        class="button button-outline">
        Add flight
      </button>

      <button
        type="button"
        @click="removeFlightSection"
        :disabled="isLastSection"
        class="button">
        Delete flight
      </button>
    </div>
  </BaseFormSection>
</template>
