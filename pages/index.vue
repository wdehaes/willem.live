<script setup lang="ts">
import type { Filter } from "~/types/filter";

const filterArticles = (value: Filter) => {
  console.log(value);
};

const { data: navigation } = await useAsyncData("navigation", () =>
  fetchContentNavigation()
);
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
  <div class="flex flex-col lg:flex-row gap-4">
    <template v-for="article in navigation">
      <Card :article="article" />
    </template>
  </div>
</template>
