<style lang="sass">
  .dashboard{

    .welcome{
      margin-bottom: 40px;
      .illustration{
        width: 15%;
        float: left;
      }
      .message{
        width: 100%;
        h2{
          font-size: 1.8rem;
          font-weight: 400;
          line-height: 28px;
          small{
            font-weight: 300;
          }
        }
      }
    }

  }
</style>
<template>
  <div class="dashboard">

    <div class="welcome">
      <div class="message">
        <h2>
          Benvenuto Wanny Miarelli <br>
          <small>questa è la tua dashboard aziendale.</small>
        </h2>
      </div>
    </div>

    <div class="data-recap-wrapper">
      <card floated="left" title="Fatturato" card-value="903000.00"></card>
      <card floated="left" title="Costi" card-value="903000.00"></card>
      <card floated="left" title="Utile" card-value="903000.00"></card>
    </div>
  </div>
</template>
<script>
  import Card from './Card.vue';
  export default {

    components: {
      Card
    }

  }
</script>
