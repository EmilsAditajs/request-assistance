import { defineStore } from "pinia";

export const useSubscribeToNewsletterStore = defineStore("subscribeToNewsletter", () => {
  const subscribeToNewsletterFormData = ref<SubscribeToNewsletterFormData>({
    email: "",
  });

  function setSubscribeToNewsletterFormData(data: SubscribeToNewsletterFormData): void {
    subscribeToNewsletterFormData.value = data;
  }

  return { subscribeToNewsletterFormData, setSubscribeToNewsletterFormData };
});
