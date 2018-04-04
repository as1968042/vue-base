<template>
  <div>
    我是一个组件
    姓名：{{name}}
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    props: ['name']
  }
</script>