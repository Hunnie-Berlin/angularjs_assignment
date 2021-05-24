function AppController() {
  const ctrl = this;
  ctrl.people = [];
  ctrl.onSubmit = ({ person }) => {
    ctrl.people.push(person);
  };
}

angular.module("main").component("appRoot", {
  templateUrl: "./app/app.component.html",
  controller: AppController,
});
