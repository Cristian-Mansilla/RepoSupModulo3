interface IAddress {
  street: string;
  city: string;
}

enum UserRole {
  admin = "admin",
  user = "user",
  guest = "guest"
}

type TUser = {
  name: string;
  age: number;
  active: boolean;
  address: IAddress;
  role: UserRole;
};

///////////////////////////

const user: TUser = {
    name: "Cristian",
    age: 33,
    active: true,
    address: {
        street: "calle Falsa",
        city: "Cordoba"
    },
    role: UserRole.admin
}

console.log(user);
