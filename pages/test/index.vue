<template>
  <div class="container">
    test
  </div>
</template>
<script>
export default {
  // 为了seo重置meta标签中的值，注意hid的值要和nuxt.config.js中的hid保持一致，这样才会覆盖
  head () {
    return {
      title: "我是测试",
      meta: [
        { hid: 'keywords', name: 'keywords', content: '测试' },
        { hid: 'description', name: 'keywords', content: '这是个测试页面' }
      ]
    }
  }
}
</script>

<style>

</style>
