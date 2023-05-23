import { ref, Ref, onBeforeMount } from "vue";
import type { MovieItem, DefaultError } from "../types/movies";

export const useMovies = () => {
  const movies = ref([]) as Ref<MovieItem[]>;
  const isLoding = ref(false);
  const error = ref(null) as Ref<DefaultError | null>;

  const getMovies = async () => {
    isLoding.value = true;
    error.value = null;

    try {
      const response = await fetch("https://swapi.dev/api/films");

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();
      movies.value = data.results;
    } catch (err) {
      error.value = err as DefaultError;
    } finally {
      isLoding.value = false;
    }
  };

  onBeforeMount(getMovies);

  return {
    movies,
    isLoding,
    error,
  };
}