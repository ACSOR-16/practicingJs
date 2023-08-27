function sendEmail(email, subject, body) {
  return new Promise( (resolve, reject) => {

    setTimeout(() => {
      console.log("it's done");
      if (subject) {
        resolve ({
          email,
          subject,
          body,
        })
      } else {
        reject(new Error("fields are missing to send the email"));
      }
    }, 2000);
  });
}

//input:
sendEmail(
  "test@mail.com",
  "New challenge",
  "Join the 30 days of JS"
)
.then(result => console.log(result))


Output:

// // after to 2 seconds
// {
//   email: "test@mail.com"
//   subject: "New challenge",
//   body:  "Join the 30 days of JS",
// }

// Input:
sendEmail(
  "test@mail.com",
  "",
  "Join the 30 days of JS"
)
.then(result => console.log(result))
.catch(error => console.log(error))

// Output:
// after de 2 seconds
// "Error: fields are missing to send the email"