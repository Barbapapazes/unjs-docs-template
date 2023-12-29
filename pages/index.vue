<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
})

defineOgImage({
  component: 'Docs',
  title: page.value.title,
  description: page.value.description,
})
</script>

<template>
  <div v-if="page">
    <ULandingHero v-if="page.hero" v-bind="page.hero">
      <template #headline>
        <NuxtLink v-if="page.hero.headline" v-bind="page.hero.headline.link" class="group flex items-center gap-4">
          <span class="px-3 py-1 bg-primary/20 group-hover:bg-primary/25 dark:bg-primary/20 dark:group-hover:bg-primary/25 ring-1 ring-primary/90 dark:ring-primary/70 rounded-full text-sm text-gray-950 dark:text-gray-50 nowrap font-medium transition ease-in">
            {{ page.hero.headline.prefix }}
          </span>
          <span class="flex items-center gap-2 text-gray-500 group-hover:text-gray-600 dark:text-gray-400 dark:group-hover:text-gray-300 transition ease-in">
            <span class="text-left">{{ page.hero.headline.title }}</span>
            <span class="shrink-0 w-5 h-5 i-heroicons-chevron-right-20-solid" />
          </span>
        </NuxtLink>
      </template>

      <template #title>
        <MDC :value="page.hero.title" />
      </template>

      <MDC :value="page.hero.code" tag="pre" class="prose prose-primary dark:prose-invert mx-auto" />
    </ULandingHero>

    <ULandingSection :title="page.features.title" :links="page.features.links">
      <UPageGrid>
        <ULandingCard v-for="(item, index) of page.features.items" :key="index" v-bind="item" />
      </UPageGrid>
    </ULandingSection>
  </div>
</template>
