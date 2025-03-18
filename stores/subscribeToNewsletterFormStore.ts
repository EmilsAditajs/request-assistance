import { defineStore } from "pinia";

export const useSubscribeToNewsletterStore = defineStore("subscribeToNewsletter", () => {
  const subscribeToNewsletterFormData = ref<SubscriptionFormData>({
    email: "",
  });

  function setSsubscribeToNewsletterFormData(data: SubscriptionFormData): void {
    subscribeToNewsletterFormData.value = data;
  }

  return { subscribeToNewsletterFormData, setSsubscribeToNewsletterFormData };
});
