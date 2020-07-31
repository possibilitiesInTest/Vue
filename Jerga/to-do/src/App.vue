<template>
  <div id="app">
    <div class="ttesting-class">
      <div class="testing-class-2"></div>
    </div>

    <div class="todo-wrapper">
      <div class="todo-container">
        <div class="todo-list">
          // first item
          <div class="todo-item">
            <div class="todo-item-content">
              <div class="todo-item-content-title">Walk the dog</div>
              <div class="todo-item-content-description">
                Go to Forrest Near the zoo
              </div>
            </div>
          </div>
          // second item
          <div class="todo-item">
            <div class="todo-item-content">
              <div class="todo-item-content-title">buy bread</div>
              <div class="todo-item-content-description">
                Whole grain would be good
              </div>
            </div>
          </div>
          // third item
          <div class="todo-item">
            <div class="todo-item-content">
              <div class="todo-item-content-title">learn programming</div>
              <div class="todo-item-content-description">set time to study</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.testing-class {
  .testing-class-2 {
  }
}

.todo {
  &-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  &-container {
    width: 400px;
    min-height: 400px;
    background-color: #ededed;
    border-radius: 5px;
  }
  &-item {
    background-color: gray;
    min-height: 70px;
    margin: 10px;
    padding: 10px;
    color: white;
    border-radius: 5px;
    font-size: 23px;
  }
  &-item-content-title {
    font-weight: bold;
  }
  &-item-content-description {
    font-size: 19px;
  }
}
</style>
