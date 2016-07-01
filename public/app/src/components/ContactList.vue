<style lang="sass">
</style>
<template>
  <div class="contact-list">
    <item-list :items="items" :columns="columns" :labels="labels"></item-list>
  </div>
</template>
<script>
  import ItemList from './ItemList.vue'

  export default {
    data() {
      return {
        items: [
          {name: 'wanny', codice: 'via la bomba', iva: '11664621006', email: 'wannymiarelli@live.com'},
          {name: 'mario', codice: 'via la bomba', iva: '11664621006', email: 'wannymiarelli@live.com'},
          {name: 'wanny', codice: 'via la bomba', iva: '11664621006', email: 'wannymiarelli@live.com'},
          {name: 'wanny', codice: 'via la bomba', iva: '11664621006', email: 'wannymiarelli@live.com'}
        ],
        columns: ['name', 'codice', 'iva', 'email'],
        labels: ['Denominazione', 'Partita IVA', 'Codice Fiscale', 'Email']
      }
    },

    components: {
      ItemList
    }
  }
</script>
