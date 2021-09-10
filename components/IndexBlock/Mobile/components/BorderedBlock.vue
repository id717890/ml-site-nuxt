<template>
  <div class="bordered-block">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style>
.bordered-block {
  background: #fff;
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  border-radius: 10px;
}
</style>
