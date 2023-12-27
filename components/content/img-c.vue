<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name: string;
    project?: string;
    bottomMargin?: string;
    horizontalMargin?: string;
    mobile?: boolean;
  }>(),
  {
    mobile: false,
    horizontalMargin: " ",
    bottomMargin: "mb-6 sm:mb-8 md:mb-12 lg:mb-16",
  }
);

const imgUrl = computed(() => {
  if (props.project) {
    const projectName = `/${
      props.project ? props.project.replaceAll("-", "_") : "/"
    }`;
    const fileName =
      props.name.split(".").length > 1 ? props.name : `${props.name}.png`;
    return `/img${projectName}/${fileName}`;
  }
});

const imgUrlMobile = computed(() => {
  if (props.project) {
    const projectName = `/${
      props.project ? props.project.replaceAll("-", "_") : "/"
    }`;
    const fileName =
      props.name.split(".").length > 1
        ? `${props.name.split(".")[0]}-mobile.${props.name.split(".")[1]}`
        : `${props.name}-mobile.png`;
    return `/img${projectName}/${fileName}`;
  }
});
</script>

<template>
  <div :class="[bottomMargin, horizontalMargin]" class="max-w-full">
    <picture>
      <source media="(max-width: 767px)" :srcset="imgUrlMobile" v-if="mobile" />
      <img :src="imgUrl" />
    </picture>
  </div>
</template>
