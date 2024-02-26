<script setup lang="ts">
const route = useRoute();

const projectId = route.path.split("/")[1];
</script>

<template>
  <div class="mx-4 lg:mx-16">
    <div
      class="flex flex-row justify-between my-6 lg:mb-11 lg:mt-[90px] items-center"
    >
      <div class="flex flex-row items-center">
        <svg
          width="27"
          height="18"
          viewBox="0 0 27 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.97 10.7497L26.4697 10.7797L26.5297 7.78029L25.03 7.7503L24.97 10.7497ZM0 8.75L14.8238 17.7085L15.1702 0.391417L0 8.75ZM25.03 7.7503L13.5273 7.52025L13.4673 10.5196L24.97 10.7497L25.03 7.7503Z"
            fill="#130D50"
          />
        </svg>

        <p
          class="text-indigo-950 text-[21px] font-semibold font-['Acumin VF'] leading-7 ml-2"
        >
          <NuxtLink to="/">Back to all</NuxtLink>
        </p>
      </div>
      <div>
        <Logo :small="true" />
      </div>
    </div>
    <ContentDoc />
    <OtherProjects :project-id="projectId" />
    <Footer />
  </div>
</template>

<style scope>
li {
  list-style-type: disc;
  margin-left: 0.75rem;
}
</style>
