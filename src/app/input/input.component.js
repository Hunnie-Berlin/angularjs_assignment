function InputController($scope) {
  const ctrl = this;

  ctrl.submit = function () {
    console.log("submitted");
    const person = {
      name: $scope.name,
      gender: $scope.gender,
      createdAt: Date.now(),
    };
    ctrl.onSubmit({ person });
    $scope.name = "";
  };
}

angular.module("main").component("inputComponent", {
  templateUrl: "./app/input/input.component.html",
  controller: InputController,
  bindings: { onSubmit: "&" },
});
