<script setup lang="ts">
  const props = defineProps<{
    flight: FlightData;
    isLastSection: boolean;
  }>();

  const emit = defineEmits<{
    (event: "remove"): void;
    (event: "add"): void;
  }>();

  const removeSection = () => {
    emit("remove");
  };

  const addSection = () => {
    emit("add");
  };
</script>
<template>
  <div>
    <div class="form-group">
      <BaseInput
        v-model="flight.flightNumber"
        inputType="text"
        label="Flight number"
        id="flight-number" />
    </div>

    <div class="form-group">
      <BaseDateSelect
        label="Flight date"
        v-model="flight.flightDate" />

      <span class="text-xs text-text-description mt-2">For example: 30 8 1972</span>
    </div>

    <div class="flex gap-3 lg:pt-2 lg:pb-5">
      <button
        type="button"
        @click="addSection"
        class="button button-outline">
        Add flight
      </button>

      <button
        type="button"
        @click="removeSection"
        :disabled="isLastSection"
        class="button">
        Delete flight
      </button>
    </div>
  </div>
</template>
