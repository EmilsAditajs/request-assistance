import { defineStore } from "pinia";

export const useRequestAssistanceFormStore = defineStore("requestAssistanceForm", () => {
  const requestAssistanceFormData = ref<RequestAssistanceFormData>({
    name: "",
    email: "",
    countryCode: "",
    phoneNumber: "",
    flights: [],
  });

  function setRequestAssistanceFormData(data: RequestAssistanceFormData) {
    requestAssistanceFormData.value = data;
  }

  return { requestAssistanceFormData, setRequestAssistanceFormData };
});
