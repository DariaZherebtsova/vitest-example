import { ref, Ref, computed } from "vue";
import type { MovieItem, MovieItemKeys } from "../types/movies";

export const useSearch = (items: Ref<MovieItem[]>, filters = ["title"]) => {
  const searchTerm = ref("");
  const filteredItems = computed(() => {
    return items.value.filter((item) => {
      return filters.some((filter) => {
        return item[filter as MovieItemKeys]
        .toLowerCase()
        .includes(searchTerm.value.toLowerCase());
      });
    });
  });

  return {
    searchTerm,
    filteredItems,
    changeSearchTerm: (term: string) => {
      return searchTerm.value = term;
    },
  };
};