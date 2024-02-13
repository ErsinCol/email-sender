## Email-Sender
This example shows how to create email with react using react-email and send email with express using resend.

### Prerequisites
You will need to: 

- [create an API key](https://resend.com/api-keys)
- [verify your domain](https://resend.com/domains)
- [postman](https://www.postman.com/downloads/)

### Instructions
1. Define environment variables in .env file
2. Install dependencies
```bash
npm install
```
3. Run Express locally
```bash
npm run dev
```
4. Open postman and create a new request. Type http://localhost:3000 in the url section and select post from the dropdown menu.
5. Enter a json body as in the example below: 
```json
{
    "to": "example@example.com",
    "username": "exampleusername"
}
```
6. Send request and check the mail box.