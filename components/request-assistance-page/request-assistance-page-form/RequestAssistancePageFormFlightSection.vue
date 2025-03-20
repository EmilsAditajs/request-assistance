<script setup lang="ts">
  const props = defineProps<{
    flight: FlightData;
  }>();
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
  </div>
</template>
