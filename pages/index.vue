<script setup lang="ts">
import type { NavItem } from "@nuxt/content/dist/runtime/types";
import { Filter } from "~/types/filter";

const order: Record<string, number> = {
  engineering: 100,
  data: 200,
  reporting: 300,
  personal: 400,
};
const filterArticles = (value: Filter) => {
  activeFilter.value = value;
};

const { data: navigation } = await useAsyncData("navigation", () =>
  fetchContentNavigation()
);

const compare = (a: NavItem, b: NavItem) => {
  return order[a.tag as string] + a.order - (order[b.tag as string] + b.order);
};
const orderedNav = computed(() => {
  const nav = Array.from(unref(navigation)!);
  nav.sort(compare);
  return nav;
});

const activeFilter = ref(Filter.All);

const filteredNavigation = computed(() => {
  switch (unref(activeFilter)) {
    case Filter.All:
      return unref(orderedNav);
    case Filter.Engineering:
      return unref(orderedNav)!.filter((item) => item.tag === "engineering");
    case Filter.Data:
      return unref(orderedNav)!.filter((item) => item.tag === "data");
    case Filter.Reporting:
      return unref(orderedNav)!.filter((item) => item.tag === "reporting");
    case Filter.Personal:
      return unref(orderedNav)!.filter((item) => item.tag === "personal");
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
  <Filters class="mb-6 hidden lg:flex" @filter="filterArticles" />
  <div>
    <TransitionGroup tag="div" name="fade" class="grid grid-cols-12 gap-4">
      <template v-for="article in filteredNavigation" :key="article.id">
        <Card :article="article" />
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
