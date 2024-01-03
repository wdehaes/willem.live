<script setup lang="ts">
import type { NavItem } from "@nuxt/content/dist/runtime/types";
import { Filter } from "~/types/filter";

const filterArticles = (value: Filter) => {
  activeFilter.value = value;
};

const navigation: Ref<NavItem[]> = useState("navigation");

const activeFilter = ref(Filter.All);

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
</script>

<template>
  <div
    class="flex flex-row flex-wrap-reverse justify-between my-4 lg:mb-14 lg:mt-[90px] items-center"
  >
    <div>
      <p class="text-indigo-950 text-3xl font-extrabold font-sans">
        Willem Dehaes
      </p>
      <p class="text-indigo-950 text-2xl font-semibold font-sans">
        willemdehaes@gmail.com
      </p>
      <p class="text-indigo-950 text-2xl font-semibold font-sans">
        917-443-7523
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
</template>

<style>
/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>
