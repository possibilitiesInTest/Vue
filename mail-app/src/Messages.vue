<template>
  <table class="table table-inbox table-hover">
    <tbody>
      <tr>
        <td>
          <input type="checkbox">
        </td>
        <td>
          <a href="#">
            <i class="fa fa-star"></i>
          </a>
        </td>
        <td></td>
        <td></td>
        <td>
          <i></i>
        </td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <p>No messages here yet.</p>
</template>


<script>
export default {
  props: {
    messages: {
      type: Array,
      required: true
    }
  }
};
</script>
