<template>
  <aside class="sm-side">
    <div class="user-head">
      <img src="src/assets/images/profile.jpg" alt>

      <div class="user-name">
        <h5>Jane Doe</h5>
        <span class="email-address">info@codingexplained.com</span>
      </div>
    </div>

    <ul class="inbox-nav">
      <li class="active">
        <a href="#" @click.prevent="navigate('app-index', 'Inbox')">
          <i class="fa fa-inbox"></i>Inbox
          <span class="label label-danger pull-right">?</span>
        </a>
      </li>

      <li>
        <a href="#" @click.prevent="navigate('app-sent', 'Sent')">
          <i class="fa fa-envelope-o"></i>Sent
          <span class="label label-default pull-right">?</span>
        </a>
      </li>

      <li>
        <a href="#" @click.prevent="navigate('app-important', 'Important')">
          <i class="fa fa-bookmark-o"></i>Important
          <span class="label label-warning pull-right">?</span>
        </a>
      </li>

      <li>
        <a href="#" @click.prevent="navigate('app-trash', 'Trash')">
          <i class="fa fa-trash-o"></i>Trash
          <span class="label label-default pull-right">?</span>
        </a>
      </li>
    </ul>
  </aside>
</template>


<script>
import { eventBus } from "./main.js";

export default {
  methods: {
    navigate(newView, title) {
      eventBus.$emit("changeView", {
        tag: newView,
        title: title
      });
    }
  }
};
</script>
