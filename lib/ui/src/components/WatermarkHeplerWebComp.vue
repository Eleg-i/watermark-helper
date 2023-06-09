<script>
import WatermarkHepler from './WatermarkHepler.vue'
export default {
  render(h) {
    return h(WatermarkHepler)
  }
}
</script>

<style lang="scss" scoped>
// 导入私有全局样式
.watermark-hepler ::v-deep {
  @import 'element-ui/lib/theme-chalk/input';
  @import 'element-ui/lib/theme-chalk/button';
  @import 'element-ui/lib/theme-chalk/form';
  @import 'element-ui/lib/theme-chalk/popconfirm';
  @import 'element-ui/lib/theme-chalk/slider';
  @import 'element-ui/lib/theme-chalk/color-picker';
  @import 'element-ui/lib/theme-chalk/select';
  @import 'element-ui/lib/theme-chalk/option';
  @import 'element-ui/lib/theme-chalk/alert';
}
</style>
