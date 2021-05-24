function DisplayController() {
  const ctrl = this;
}

angular.module("main").component("displayComponent", {
  templateUrl: "./app/display/display.component.html",
  controller: DisplayController,
  bindings: {
    people: "<",
  },
});
