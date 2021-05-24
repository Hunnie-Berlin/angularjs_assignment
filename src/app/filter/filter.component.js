function FilterController() {
  const ctrl = this;
  ctrl.selectMale = function () {
    ctrl.onFilter({ condition: "male" });
  };
  ctrl.selectFemale = function () {
    ctrl.onFilter({ condition: "female" });
  };
  ctrl.selectNonBinary = function () {
    ctrl.onFilter({ condition: "non_binary" });
  };
  ctrl.selectAll = function () {
    ctrl.onFilter({ condition: "all" });
  };
}

angular.module("main").component("filterComponent", {
  templateUrl: "./app/filter/filter.component.html",
  controller: FilterController,
  bindings: {
    onFilter: "&",
  },
});
