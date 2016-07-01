<style lang="sass">
.list-wrapper{
  h2{
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 23px;
    margin-bottom: 20px;
    small{
      font-size: 70%;
      font-weight: 300;
    }
  }

  .actions{
    .filters{
      float: left;
      width: 40%;
    }
    .edit{
      float: left;
      width: 60%;
      text-align: right;
    }
  }

}
</style>
<template>
  <div class="list-wrapper">
    <h2>
      Elenco contatti <br>
      <small>in questo elenco sono presenti sia clienti che fornitori</small>
    </h2>

    <div class="actions">
      <div class="filters">
        <div class="input-wrapper input-icon">
          <i class="material-icons">search</i>
          <input type="text" placeholder="Ricerca nella tabella" v-model="searchQuery">
        </div>
      </div>
      <div class="edit">
        <button type="button" class="btn btn-primary"><i class="material-icons">add</i> Nuovo</button>
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th v-for="key in labels">
            {{key | capitalize}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items | filterBy searchQuery">
          <td v-for="key in columns">
            {{item[key]}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {

    data() {
      return {
        searchQuery: ''
      }
    },

    props: {
      items: Array,
      labels: Array,
      columns: Array
    }

  }
</script>
