<script setup lang="ts">
const props = defineProps<{
  article: any;
}>();

const widthClass = computed(() => {
  switch (props.article.width) {
    case 1:
      return "col-span-full lg:col-span-3";
    case 2:
      return "col-span-full lg:col-span-6";
    default:
      return "";
  }
});

const imageName = computed(() => {
  if (
    ["right-to-counsel", "shanghai", "the-white-knight"].includes(
      props.article.id
    )
  ) {
    return "thumbnail.jpeg";
  }
  return "thumbnail";
});
</script>

<template>
  <div class="flex flex-col mb-4 lg:mb-10" :class="widthClass">
    <NuxtLink :to="`/${article.id}`">
      <ImgC :name="imageName" :project="article.id" bottom-margin="mb-4" />
      <p
        class="text-indigo-950 text-2xl font-extrabold font-sans leading-7 mb-2"
      >
        {{ article.title }}
      </p>
      <p class="text-zinc-700 text-[21px] font-normal font-sans leading-7 mb-2">
        {{ article.description }}
      </p>
      <p class="text-neutral-500 text-base font-light font-sans tracking-wide">
        {{ article.tag.toUpperCase() }}
      </p>
    </NuxtLink>
  </div>
</template>
