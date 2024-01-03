<script setup lang="ts">
import type { NavItem } from "@nuxt/content/dist/runtime/types";
const navigation: Ref<NavItem[]> = useState("navigation");

const order: Record<string, number> = {
  engineering: 100,
  data: 200,
  reporting: 300,
  personal: 400,
};

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
</script>

<template>
  <div class="w-full h-full bg-stone-100 border-2 border-fuchsia-900">
    <div class="mx-4 lg:mx-16">
      <NuxtPage />
    </div>
  </div>
</template>
