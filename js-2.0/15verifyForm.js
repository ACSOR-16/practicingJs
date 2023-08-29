function validateForm(formData, registeredUsers) {
    
  const requiredData = ["name", "lastName", "email", "password"]
  const missingData = requiredData.filter(key => !Object.keys(formData).includes(key))
  console.log(missingData.length);  

  if (!!missingData.length)
    throw new Error(`the following fields are missing: ${missingData.join(", ")}`);


  const { name, lastName, email } = formData


  if (registeredUsers.some(x => x.email == email))
    throw new Error(`Email already exists: ${email}`);

  registeredUsers.push({ name, lastName, email })
  console.log(registeredUsers);
  return (`your registration was successful ${name} ${lastName}`)
}

function validateFormTwo(formData, registeredUsers) {
const requiredFields = ["name", "lastName", "email", "password"];

  if (!requiredFields.every((field) => formData[field])) {
    throw new Error(
      `Faltan los siguientes campos requeridos: ${requiredFields
        .filter((field) => !formData[field])
        .join(", ")}`
    );
  }

  const existUser = registeredUsers.find(
    (user) => user.email === formData.email
  );

  if (existUser) {
    throw new Error(`El usuario con el email ${formData.email} ya existe`);
  }

  registeredUsers.push({
    name: formData.name,
    lastName: formData.lastName,
    email: formData.email,
  });

  return `Tu registro fue exitoso ${formData.name} ${formData.lastName}`;
}
// Input:
const formData = {
  name: "Juan",
  lastName: "Perez",
  email: "juan@example.com",
  password: "123456",
  socialMedia: "fb"
}

const registeredUsers = [
  { name: "Pedro", lastName: "Gomez", email: "pedro@example.com" },
  { name: "Maria", lastName: "Garcia", email: "maria@example.com" },
]

console.log(validateFormTwo(formData, registeredUsers))

// Output:
// "your registration was successful Juan Perez"