<style lang="sass">
  .card-wrapper{
    background-color: #FFF;
    height: 150px;
    width: 33.33%;
    border: 1px solid rgba(0, 0, 0, 0.080);
    border-bottom: 2px solid rgba(0, 0, 0, 0.080);
    position: relative;
    border-radius: 3px;
    text-align: center;
    margin-bottom: 20px;

    &.floatleft{
      float: left;
      width: 30.33%;
      margin-right: 3%;
    }

    .card-title{
      padding: 1em;
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.4);
    }

    .card-value{
      padding-left: 1em;
      padding-right: 1em;
      font-size: 1.8rem;
      font-weight: 500;
    }

    .card-subtitle{
      padding-left: 1em;
      width: 100%;
      padding-right: 1em;
      padding-top: 0.5em;
      padding-bottom: 0.5em;
      &.positive{
        color: #43A047;
      }
      &.negative{
        color: #D32F2F;
      }
    }
  }
</style>
<template>

  <div class="card-wrapper" v-bind:class="{ 'floatleft': floated == 'left' }">
    <div class="valign-wrapper">
      <div class="valign">
        <div class="card-title">
          {{title}}
        </div>
        <div class="card-value">
          {{cardValue}}
        </div>
        <div class="card-subtitle positive">
          +37% mese precedente
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  export default {

    props: {
      floated: String,
      title: String,
      cardValue: String,
      sub: String
    }

  }
</script>
