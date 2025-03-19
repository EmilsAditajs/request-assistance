<script setup lang="ts">
  import { yearList, monthList, dayList } from "~/data/requestAssistancePageData";

  const props = defineProps({
    label: {
      type: String,
      required: false,
    },
  });

  const modelValue = defineModel<string>();

  const day = ref<number>(null);
  const month = ref<number>(null);
  const year = ref<number>(null);

  watch([day, month, year], () => {
    if (day.value && month.value && year.value) {
      const formattedDay = String(day.value).padStart(2, "0");
      const formattedMonth = String(month.value).padStart(2, "0");
      modelValue.value = `${year.value}-${formattedMonth}-${formattedDay}`;
    } else {
      modelValue.value = "";
    }
  });
</script>

<template>
  <div class="">
    <span class="text-xs mb-2">{{ label }}</span>
    <div class="flex gap-3">
      <BaseDropdown
        id="day"
        v-model="day"
        :options="dayList"
        placeholder="DD"
        class="w-20" />
      <BaseDropdown
        id="month"
        v-model="month"
        :options="monthList"
        placeholder="MM"
        class="w-20" />
      <BaseDropdown
        v-model="year"
        :options="yearList"
        placeholder="YYYY"
        class="w-50" />
    </div>
  </div>
</template>
