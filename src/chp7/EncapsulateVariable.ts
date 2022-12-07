let defaultOwnerObj = { firstName: 'Martin', lastName: 'Fowler' };

function defaultOwner() {
  return { ...defaultOwnerObj };
}

function setDefaultOwner(arg: typeof defaultOwnerObj) {
  defaultOwnerObj = arg;
}

// defaultOwner = {
//   firstName: 'joao',
//   lastName: 'ninguem',
// };
setDefaultOwner({
  firstName: 'joao',
  lastName: 'ninguem',
});

// owner = defaultOwner
const owner = defaultOwner();

export { owner };
