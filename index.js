const express = require('express');
const { SecretsManagerClient, GetSecretValueCommand } = require('@aws-sdk/client-secrets-manager');
const app = express();

const PORT = process.env.PORT || 3000;

// AWS Secret Managers Setup
const secret_name = "MESSAGE";
async function getSecret() {
  const client = new SecretsManagerClient({
    region: "us-east-2",
  });
  let response;
  try {
    response = await client.send(
      new GetSecretValueCommand({
        SecretId: secret_name,
        VersionStage: "AWSCURRENT",
      })
    );
  } catch (error) {
    console.log(error);
  }
  const secret=response.SecretString;
  const parsedData = JSON.parse(secret);
  const { MESSAGE1, MESSAGE2 } = parsedData;
  console.log(MESSAGE1);
  console.log(MESSAGE2);
}

getSecret();

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
