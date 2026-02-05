const PROXY_URL = 'https://elxora.kevinpatel00792.workers.dev';  // ← paste your actual Worker URL here
const response = await fetch(PROXY_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    contents: [systemInstruction, ...conversation],
    generationConfig: {
      temperature: 0.7,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 1024,
    }
  })
});
