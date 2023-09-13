<script lang="ts">
import { h } from 'vue'

const MyFunctionalComponent = (props, context) => {
  return h('div', context.attrs, ['Hello, ', props.name, '!'])
}

export default MyFunctionalComponent
</script>
