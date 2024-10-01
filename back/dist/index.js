"use strict";
var UserRole;
(function (UserRole) {
    UserRole["admin"] = "admin";
    UserRole["user"] = "user";
    UserRole["guest"] = "guest";
})(UserRole || (UserRole = {}));
///////////////////////////
const user = {
    name: "Cristian",
    age: 33,
    active: true,
    address: {
        street: "calle Falsa",
        city: "Cordoba"
    },
    role: UserRole.admin
};
console.log(user);
