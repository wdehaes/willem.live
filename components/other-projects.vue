<script setup lang="ts">
import type { NavItem } from "@nuxt/content/dist/runtime/types";

const props = defineProps<{
  projectId: string;
}>();

const navigation: Ref<NavItem[]> = useState("navigation");

const currentProjectIndex = computed(() =>
  unref(navigation).findIndex((navItem) => navItem.id === props.projectId)
);

const filteredNavigation = computed(() => {
  console.log(unref(currentProjectIndex));
  const pIndex1 = nextProjectIndex(unref(currentProjectIndex));

  const pIndex2 = nextProjectIndex(pIndex1);
  const pIndex3 = nextProjectIndex(pIndex2);
  console.log(pIndex1);
  console.log(pIndex2);
  console.log(pIndex3);
  return [pIndex1, pIndex2, pIndex3].map((i) => unref(navigation)[i]);
});

const nextProjectIndex = (val: number) => {
  const index = val + 1 === unref(navigation).length ? 0 : val + 1;
  return index;
};
</script>

<template>
  <section class="flex flex-row justify-center w-full">
    <div class="basis-8/12 grow lg:grow-0 grid grid-cols-9 gap-4">
      <p
        class="text-indigo-950 text-2xl font-extrabold font-sans mb-4 col-span-full"
      >
        A few more things
      </p>
      <Card :project="filteredNavigation[0]" :force-width="2" />
      <div class="grid col-span-full lg:col-span-3 grid-cols-3">
        <Card :project="filteredNavigation[1]" :force-width="1" />
        <Card :project="filteredNavigation[2]" :force-width="1" />
      </div>
    </div>
  </section>
</template>
