<script setup lang="ts">
const activeColorIndex = ref(0);
const wColors = [
  "text-fuchsia-900",
  "text-amber-400",
  "text-green-400",
  "text-orange-600",
  "text-sky-700",
];
const dColors = [
  "text-sky-700",
  "text-fuchsia-900",
  "text-amber-400",
  "text-green-400",
  "text-orange-600",
];

const activeW = computed(() => unref(wColors)[unref(activeColorIndex)]);
const activeD = computed(() => unref(dColors)[unref(activeColorIndex)]);
setInterval(() => updateColorIndex(), 3000);

const updateColorIndex = () => {
  const newValue = unref(activeColorIndex) + 1;
  if (newValue === wColors.length) {
    activeColorIndex.value = 1;
  } else {
    activeColorIndex.value = newValue;
  }
};
</script>

<template>
  <div class="flex flex-row justify-center items-center">
    <NuxtLink to="/">
      <span
        class="text-[128px] lg:text-[250px] font-normal font-rock leading-[180px] lg:leading-[280px] transition-colors"
        :class="activeW"
        >W</span
      >
      <span
        class="text-[128px] lg:text-[250px] font-normal font-rock leading-[180px] lg:leading-[280px] transition-colors"
        :class="activeD"
        >D</span
      >
    </NuxtLink>
  </div>
</template>
