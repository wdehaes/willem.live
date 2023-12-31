<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    small?: boolean;
  }>(),
  {
    small: false,
  }
);

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

const textSizeClass = computed(() => {
  return props.small
    ? "text-9xl leading-none"
    : "text-[128px] lg:text-[250px] leading-[180px] lg:leading-[280px] ";
});
</script>

<template>
  <div class="flex flex-row justify-center items-center">
    <NuxtLink to="/">
      <span
        class="font-normal font-rock transition-colors"
        :class="[activeW, textSizeClass]"
        >W</span
      >
      <span
        class="font-normal font-rock transition-colors"
        :class="[activeD, textSizeClass]"
        >D</span
      >
    </NuxtLink>
  </div>
</template>
