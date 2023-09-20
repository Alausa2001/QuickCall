const { OpenAI } = require('openai')

const openai = new OpenAI({ apiKey: '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'});

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