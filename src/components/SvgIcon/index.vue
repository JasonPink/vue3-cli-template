<template>
  <svg
    class="svg-icon"
    :style="{
      width: props.size + 'px',
      height: props.size + 'px',
      color: props.color
    }"
  >
    <use :xlink:href="`#icon-${props.name}`" :fill="props.color" />
  </svg>
</template>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'SvgIcon',
    props: {
      name: {
        type: String,
        required: true,
        default: ''
      },
      size: {
        type: Number,
        default: 32
      },
      color: {
        type: String,
        default: '#000'
      }
    },
    setup(props) {
      return {
        props
      };
    }
  });
</script>
