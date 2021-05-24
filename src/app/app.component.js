function AppController() {
  const ctrl = this;
  ctrl.people = [
    {
      name: "LEE",
      gender: "male",
      createdAt: 1621893799955,
    },
    {
      name: "Mary",
      gender: "female",
      createdAt: 1621893824827,
    },
    {
      name: "Mero",
      gender: "non_binary",
      createdAt: 1621893882759,
    },
  ];
  ctrl.onSubmit = ({ person }) => {
    ctrl.people.push(person);
    ctrl.filtered = ctrl.people;
  };
  ctrl.$onInit = function () {
    ctrl.filtered = ctrl.people;
  };
  ctrl.onFilter = ({ condition }) => {
    if (condition === "all") {
      ctrl.filtered = ctrl.people;
    } else if (condition === "male") {
      ctrl.filtered = ctrl.people.filter((person) => person.gender === "male");
    } else if (condition === "female") {
      ctrl.filtered = ctrl.people.filter(
        (person) => person.gender === "female"
      );
    } else if (condition === "non_binary") {
      ctrl.filtered = ctrl.people.filter(
        (person) => person.gender === "non_binary"
      );
    } else {
      ctrl.filtered = ctrl.people;
    }
  };
}

angular.module("main").component("appRoot", {
  templateUrl: "./app/app.component.html",
  controller: AppController,
});
