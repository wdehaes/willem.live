<script setup lang="ts">
import type { NavItem } from "@nuxt/content/dist/runtime/types";
import { Filter } from "~/types/filter";

const filterArticles = (value: Filter) => {
  activeFilter.value = value;
};

const navigation: Ref<NavItem[]> = useState("navigation");

const activeFilter = ref(Filter.All);
const activeColorIndex = ref(0);

const filteredNavigation = computed(() => {
  switch (unref(activeFilter)) {
    case Filter.All:
      return unref(navigation);
    case Filter.Engineering:
      return unref(navigation).filter((item) => item.tag === "engineering");
    case Filter.Data:
      return unref(navigation).filter((item) => item.tag === "data");
    case Filter.Reporting:
      return unref(navigation).filter((item) => item.tag === "reporting");
    case Filter.Personal:
      return unref(navigation).filter((item) => item.tag === "personal");
  }
});

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
</script>

<template>
  <div
    class="w-full h-full bg-stone-100 border-4 border-solid transition-colors duration-300"
    :class="activeBorderColor"
  >
    <div class="mx-4 lg:mx-16">
      <div
        class="flex flex-row flex-wrap-reverse justify-between my-4 lg:mb-14 lg:mt-[90px] items-center"
      >
        <div>
          <p class="text-indigo-950 text-3xl font-extrabold-wide font-sans">
            Willem Dehaes
          </p>
          <p class="text-indigo-950 text-2xl font-semibold font-sans">
            willemdehaes@gmail.com
          </p>
        </div>
        <div class="pr-8">
          <Logo />
        </div>
      </div>
      <HorizontalLine class="mb-3" />
      <Filters @filter="filterArticles" />
      <div>
        <TransitionGroup tag="div" name="fade" class="grid grid-cols-12 gap-4">
          <template v-for="project in filteredNavigation" :key="project.id">
            <Card :project="project" />
          </template>
        </TransitionGroup>
      </div>
      <Footer />
    </div>
  </div>
</template>

<style>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
