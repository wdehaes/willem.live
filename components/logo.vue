<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    small?: boolean;
  }>(),
  {
    small: false,
  }
);

const activeW = useState("activeWColor", () => "text-fuchsia-900");
const activeD = useState("activeDColor", () => "text-sky-700");

const textSizeClass = computed(() => {
  return props.small
    ? "text-7xl lg:text-9xl leading-none"
    : "text-[128px] lg:text-[250px] leading-[180px] lg:leading-[280px] ";
});
</script>

<template>
  <div class="flex flex-row justify-center items-center">
    <NuxtLink to="/">
      <span
        class="font-normal font-rock transition-colors duration-300"
        :class="[activeW, textSizeClass]"
        >W</span
      >
      <span
        class="font-normal font-rock transition-colors duration-300"
        :class="[activeD, textSizeClass]"
        >D</span
      >
    </NuxtLink>
  </div>
</template>
