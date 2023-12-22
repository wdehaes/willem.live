<script setup lang="ts">
import { Filter } from "~/types/filter";
const emit = defineEmits<{
  filter: [value: Filter];
}>();

const activeFilter = ref(Filter.All);
const fontClass = computed(() => {});
</script>

<template>
  <div class="flex flex-row w-full justify-between">
    <div class="flex flex-row">
      <template v-for="filter in Filter">
        <div
          class="text-indigo-950 text-3xl font-extrabold font-sans leading-7"
        >
          {{ filter }}
        </div>
      </template>
    </div>
    <div class="flex flex-row"></div>
  </div>
</template>
~/types/filter
