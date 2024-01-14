<script setup lang="ts">
import { Filter } from "~/types/filter";
const emit = defineEmits<{
  filter: [value: Filter];
}>();

const activeFilter = ref(Filter.All);
const fontClass = computed(() => {});
const dialog = ref<HTMLDialogElement>();
const content = ref<HTMLDialogElement>();

const fontWeight = (filter: Filter) => {
  return filter === unref(activeFilter)
    ? "font-extrabold-wide text-3xl"
    : "font-semibold-wide text-[28px]";
};

const showDialog = (val: boolean) => {
  if (val) {
    unref(dialog)!.showModal();
  } else {
    unref(dialog)!.close();
  }
};

const closeModal = (event: any) => {
  if (!unref(content)) return;
  const dialogDimensions = unref(content)!.getBoundingClientRect();
  if (
    event.clientX < dialogDimensions.left ||
    event.clientX > dialogDimensions.right ||
    event.clientY < dialogDimensions.top ||
    event.clientY > dialogDimensions.bottom
  ) {
    unref(dialog)!.close();
  }
};

watch(activeFilter, (newActiveFilter) => {
  emit("filter", newActiveFilter);
  if (dialog) {
    showDialog(false);
  }
});
</script>

<template>
  <!-- Mobile -->
  <div class="flex lg:hidden flex-col items-start w-full">
    <div class="flex w-full flex-row justify-between items-center mb-6">
      <button
        class="font-extrabold-wide text-3xl text-indigo-950 font-sans leading-7 flex-none"
        @click="showDialog(true)"
      >
        {{ activeFilter }}
      </button>
      <button @click="showDialog(true)">
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2.75L10.5 11.25L19 2.75"
            stroke="#130D50"
            stroke-width="5"
          />
        </svg>
      </button>
    </div>
    <div class="flex mb-6">
      <span
        class="text-right text-indigo-950 text-[28px] leading-7 font-semibold-wide font-sans"
      >
        <a href="/pdf/Resume Willem Dehaes.pdf" target="_blank"
          >Resume // PDF</a
        >
      </span>
    </div>
  </div>
  <dialog ref="dialog" @click="closeModal">
    <div
      class="flex flex-col justify-between items-center w-full bg-stone-100 gap-8 pt-4 pb-12 fixed bottom-0 left-0"
      ref="content"
    >
      <template v-for="filter in Filter">
        <button
          class="text-indigo-950 font-sans leading-none flex-none"
          :class="fontWeight(filter)"
          @click="activeFilter = filter"
        >
          {{ filter }}
        </button>
      </template>
      <button
        class="text-indigo-950 font-sans leading-none flex-none font-semibold-wide text-[28px]"
        @click="showDialog(false)"
      >
        Close
      </button>
    </div>
  </dialog>
  <!-- Desktop -->
  <div class="flex-row w-full justify-between hidden lg:flex mb-0 lg:mb-6">
    <div class="flex flex-row justify-between basis-7/12">
      <template v-for="filter in Filter">
        <button
          class="text-indigo-950 font-sans leading-7 flex-none"
          :class="fontWeight(filter)"
          @click="activeFilter = filter"
        >
          {{ filter }}
        </button>
      </template>
    </div>
    <div class="flex flex-row basis-5/12 justify-end">
      <span
        class="text-right text-indigo-950 text-[28px] leading-7 font-semibold-wide font-sans"
      >
        <a href="/pdf/Resume Willem Dehaes.pdf" target="_blank"
          >Resume // PDF</a
        >
      </span>
    </div>
  </div>
</template>

<style scoped>
::backdrop {
  background: rgba(131.57, 131.57, 131.57, 0.5);
}
</style>
