<script lang="ts" setup>
  const props = defineProps({
    options: {
      type: Array as PropType<DropdownOption[]>,
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
  });

  const modelValue = defineModel<string | number>();
  const dropdownRef = ref<HTMLElement | null>(null);
  const isOpen = ref(false);

  const emit = defineEmits<{
    (event: "update:modelValue", value: string | number): void;
  }>();

  const selected = computed(() => {
    return props.options.find((option) => option.value === modelValue.value) || null;
  });

  const toggleDropdown = (event: MouseEvent) => {
    event.preventDefault();
    isOpen.value = !isOpen.value;
  };

  const selectOption = (option: DropdownOption) => {
    modelValue.value = option.value;
    emit("update:modelValue", option.value);
    isOpen.value = false;
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
      isOpen.value = false;
    }
  };

  onMounted(() => {
    document.addEventListener("click", handleClickOutside);
  });

  onBeforeUnmount(() => {
    document.removeEventListener("click", handleClickOutside);
  });
</script>

<template>
  <div
    class="relative"
    ref="dropdownRef">
    <span class="text-xs mb-2">{{ label }}</span>
    <button
      class="pl-3 pr-6 py-3 bg-white border border-form-border flex gap-5 items-center"
      @click="toggleDropdown">
      <span
        class="text-base leading-5"
        :class="selected ? 'text-brand-blue' : 'text-form-placeholder'"
        >{{ selected ? selected.value : placeholder }}</span
      >
      <img
        src="/icons/dropdown.svg"
        alt="Dropdown icon" />
    </button>

    <ul
      v-if="isOpen"
      class="absolute w-full bg-white border border-form-border z-10">
      <li
        v-for="option in props.options"
        :key="option.value"
        class="px-4 py-2 hover:bg-sidebar-background cursor-pointer"
        @click="selectOption(option)">
        {{ option.value }}
      </li>
    </ul>
  </div>
</template>
