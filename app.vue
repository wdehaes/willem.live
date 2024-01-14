<script setup lang="ts">
import type { NavItem } from "@nuxt/content/dist/runtime/types";
const navigation: Ref<NavItem[]> = useState("navigation");

const order: Record<string, number> = {
  engineering: 100,
  data: 200,
  reporting: 300,
  personal: 400,
};

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

const borderColors = [
  "border-fuchsia-900",
  "border-amber-400",
  "border-green-400",
  "border-orange-600",
  "border-sky-700",
];

const activeWColor: Ref<string> = useState(
  "activeWColor",
  () => "text-fuchsia-900"
);
const activeDColor: Ref<string> = useState(
  "activeDColor",
  () => "text-sky-700"
);
const activeBorderColor: Ref<string> = useState(
  "activeBorderColor",
  () => "border-fuchsia-900"
);

const updateColorIndex = () => {
  const newValue = unref(activeColorIndex) + 1;
  if (newValue === wColors.length) {
    activeColorIndex.value = 1;
  } else {
    activeColorIndex.value = newValue;
  }
};

watch(activeColorIndex, (newIndex) => {
  activeWColor.value = unref(wColors)[newIndex];
  activeDColor.value = unref(dColors)[newIndex];
  activeBorderColor.value = unref(borderColors)[newIndex];
});

const compare = (a: any, b: any) => {
  return order[a.tag as string] + a.order - (order[b.tag as string] + b.order);
};

await callOnce(async () => {
  const { data: data } = await useAsyncData("navigation", () =>
    fetchContentNavigation()
  );
  const nav = Array.from(unref(data) as NavItem[]);
  nav.sort(compare);
  navigation.value = nav;
});

const orderedNav = computed(() => {});

setInterval(updateColorIndex, 5500);
</script>

<template>
  <div
    class="w-full h-full bg-stone-100 border-4 border-solid transition-colors duration-300"
    :class="activeBorderColor"
  >
    <div class="mx-4 lg:mx-16">
      <NuxtPage />
    </div>
  </div>
</template>
