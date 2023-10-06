/* 
We wanted to use this to dynamically get emergency tips
but openai allowed limited requests for free accounts
*/

const { OpenAI } = require('openai')

const openai = new OpenAI({ apiKey: key});

async function main() {
  const completion = await openai.completions.create({
    model: "text-davinci-001",
    prompt: "Say this is a test.",
    max_tokens: 7,
    temperature: 0,
  });

  console.log(completion);
}
main();