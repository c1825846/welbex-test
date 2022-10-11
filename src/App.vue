<template>
  <div id="app">
    <div class="container">
      <div class="filters">
        <FilterSlot title="Поиск">
          <input type="text" v-model="searchQuery">
        </FilterSlot>
        <FilterSlot title="Категория">
          <select v-model="categoryFilter">
            <option value="">Выберите категорию</option>
            <option value="name">Название</option>
            <option value="amount">Количество</option>
            <option value="distance">Расстояние</option>
          </select>
        </FilterSlot>
        <FilterSlot title="Сортировка">
          <select v-model="sortFilter">
            <option value="asc">По возрастанию</option>
            <option value="des">По убыванию</option>
          </select>
        </FilterSlot>
        <FilterSlot>
          <button @click="resetFilters">Сбросить</button>
        </FilterSlot>
      </div>
      <Table
          :names="['Дата', 'Название', 'Количество', 'Расстояние']"
          :table-data="currentPageFruits"
      />
      <div class="filters">
        Страница:
        <input type="text" v-model="page">
        <button :disabled="page <= 1" @click="page--">Пред</button>
        <button :disabled="page >= lastPage" @click="page++">След</button>
        Элементов на странице:
        <input type="text" v-model="elementsPerPage">
      </div>
    </div>
  </div>
</template>

<script>
import Table from '@/components/Table'
import FilterSlot from '@/components/FilterSlot'
import loadedData from '@/data/data.json'

export default {
  name: 'App',
  components: {
    Table,
    FilterSlot
  },
  data() {
    return {
      fruits: [],
      searchQuery: '',
      categoryFilter: '',
      sortFilter: 'asc',
      page: 1,
      elementsPerPage: 10,
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(f => {
        return f.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      }).sort((a, b) => {
        if (this.sortFilter === 'asc')
          return a[this.categoryFilter] > b[this.categoryFilter] ? 1 : -1
        return a[this.categoryFilter] > b[this.categoryFilter] ? -1 : 1
      })
    },
    currentPageFruits() {
      return this.filteredFruits.slice((this.page - 1) * this.elementsPerPage, this.page * this.elementsPerPage)
    },
    lastPage() {
      return this.filteredFruits.length / this.elementsPerPage
    }
  },
  methods: {
    resetFilters() {
      this.searchQuery = ''
      this.categoryFilter = ''
      this.sortFilter = 'asc'
    }
  },
  mounted() {
    this.fruits = loadedData.map(el => ({
      ...el,
      date: el.date.slice(0, 10)
    }))
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}

.container {
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
}

.filters {
  padding: 10px 0;
  display: flex;
  gap: 10px;
}
</style>
