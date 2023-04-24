const notifyByEmail = (email_address) => {
  return `Email sent to: ${email_address}`;;
}

const notifyByText = (phone_number) => {
  return `Text sent to: ${phone_number}`;
}

const notify = (recipient, method) => {
  return method(recipient);
}

console.log(notify("hello@makers.tech.test", notifyByEmail))
console.log(notify("+10000000000", notifyByText))