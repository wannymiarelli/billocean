<style lang="sass">
  .sidebar-wrapper{
    width: 100%;
    padding: 1em;
    ul{
      list-style: none;
      padding: 0;
      margin: 0;
      li{
        margin-bottom: 10px;
        a{
          color: rgba(0, 0, 0, 0.5);
          transition: color 0.6s ease;
          &:hover{
            color: #0D47A1;
          }
        }
        i{
          vertical-align: middle;
          margin-right: 8px;
        }
        &.sub-header{
          a{
            color: rgba(0, 0, 0, 0.3);
            text-transform: uppercase;
          }
        }
      }
      .divider{
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        margin-top: 20px;
        margin-bottom: 20px;
        width: 60%;
      }
    }
  }
</style>
<template>
  <div class="sidebar-wrapper">
      <ul>
        <li class="sub-header"><a href="#">Generale</a></li>
        <li><a href="#"><i class="material-icons">dashboard</i> Dashboard</a></li>
        <li><a href="#"><i class="material-icons">perm_contact_calendar</i> Contatti</a></li>
        <li class="sub-header"><a href="#">Documenti</a></li>
        <li><a href="#"><i class="material-icons">insert_drive_file</i> Vendite</a></li>
        <li><a href="#"><i class="material-icons">insert_drive_file</i> Acquisti</a></li>
        <li class="sub-header"><a href="#">Magazzino</a></li>
        <li><a href="#"><i class="material-icons">shopping_basket</i> Prodotti</a></li>
        <li class="sub-header"><a href="#">Pagamenti</a></li>
        <li><a href="#"><i class="material-icons">payment</i> Pagamenti</a></li>
        <li><a href="#"><i class="material-icons">update</i> Scadenzario</a></li>
        <li class="sub-header"><a href="#">Impostazioni</a></li>
        <li><a href="#"><i class="material-icons">settings</i> Profilo</a></li>
        <li><a href="#"><i class="material-icons">account_balance_wallet</i> Conti</a></li>
      </ul>
  </div>
</template>
<script>

</script>
