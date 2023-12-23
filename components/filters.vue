<script setup lang="ts">
import { Filter } from "~/types/filter";
const emit = defineEmits<{
  filter: [value: Filter];
}>();

const activeFilter = ref(Filter.All);
const fontClass = computed(() => {});

const fontWeight = (filter: Filter) => {
  return filter === unref(activeFilter)
    ? "font-extrabold text-3xl"
    : "font-normal text-[28px]";
};

watch(activeFilter, (newActiveFilter) => {
  emit("filter", newActiveFilter);
});
</script>

<template>
  <div class="flex flex-row w-full justify-between">
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
        class="text-right text-indigo-950 text-[28px] leading-7 font-semibold font-sans"
      >
        Resume // PDF
      </span>
    </div>
  </div>
</template>
