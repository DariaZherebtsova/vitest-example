<template>
  <div>
    <label for="search">Search:</label>
    <input type="text" id="search" v-model="searchTerm"/>
  </div>
  <ul>
    <li v-for="movie in filteredMovies" :key="movie.id">
      <article>
        <h3>{{ movie.title }}</h3>
        <h4>Released on: {{ movie.release_date }}</h4>
        <h5>Directed by: {{ movie.director }}</h5>
        <p>{{ movie.opening_crawl }}</p>
      </article>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useMovies } from "../composables/useMovies";
import { useSearch } from "../composables/useSearch";

const { movies, error, isLoading } = useMovies();
const { searchTerm, filteredItems: filteredMovies } = useSearch(movies);

// const onblureSearchTerm = (payload) => {
//   console.log('---payload', payload.target.value);
//   changeSearchTerm(payload.target.value);
// }
</script>

<style lang="">
  
</style>