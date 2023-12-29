<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<NavItem[]>('navigation', [])

const { metaSymbol } = useShortcuts()

const { github, header } = useAppConfig()

const stars = ref<number | null>(null)
if (github.name) {
  const { data } = await useFetch<{ totalStars: number }>(`https://ungh.cc/stars/unjs/${github.name}`)

  if (data.value && data.value.totalStars)
    stars.value = data.value.totalStars
}

const activeClassButton = 'bg-primary bg-opacity-40 dark:bg-opacity-30'
</script>

<template>
  <UHeader :ui="{ logo: 'items-center' }" :links="mapContentNavigation(navigation)">
    <template #logo>
      <UColorModeImage v-bind="{ ...header?.logo }" class="w-7 h-7" />

      <span class="mt-[2px] capitalize">
        {{ header.title }}
      </span>
    </template>

    <template #center>
      <nav v-if="navigation" class="hidden lg:flex justify-center">
        <ol class="text-[1.125rem] flex gap-4 leading-5">
          <li v-for="item in navigation" :key="item._path">
            <UPopover v-if="item.children" mode="hover" :ui="{ width: 'max-w-[18rem]' }">
              <UButton :to="item._path" :icon="item.icon" v-bind="{ ...$ui.button?.secondary }" :active-class="activeClassButton">
                {{ item.title }}
              </UButton>

              <template #panel>
                <ol class="p-2">
                  <li v-for="child in item.children" :key="child._path">
                    <ULink :to="child._path" class="px-3 py-2 flex flex-col hover:bg-primary/60 dark:hover:bg-primary/40 transition ease-in rounded text-base" :active-class="activeClassButton">
                      <span class="flex flex-row gap-2 items-center">
                        <span class="text-gray-700 dark:text-gray-200 hover:text-gray-800 hover:dark:text-gray-100 font-medium"> {{ child.title }} </span>
                      </span>

                      <span class="ml-7 text-gray-500 dark:text-gray-400 text-sm"> {{ child.description }} </span>
                    </ULink>
                  </li>
                </ol>
              </template>
            </UPopover>
            <UButton v-else :to="item._path" v-bind="{ ...$ui.button?.secondary }" :active-class="activeClassButton">
              {{ item.title }}
            </UButton>
          </li>
        </ol>
      </nav>
    </template>

    <template #right>
      <UTooltip text="Open Search" :shortcuts="[metaSymbol, 'K']">
        <UDocsSearchButton label="" />
      </UTooltip>

      <UTooltip class="hidden lg:flex" :text="stars ? 'GitHub Stars' : 'Open GitHub'">
        <UButton
          icon="i-simple-icons-github" :to="`https://github.com/unjs/${github.name}`" target="_blank" :aria-label="github.name ? `Visit UnJS/${github.name}` : 'Visit UnJS'" v-bind="{ ...$ui.button?.secondary }" :square="!github.name"
        >
          {{ stars ? formatNumber(stars) : '' }}
        </UButton>
      </UTooltip>
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>
