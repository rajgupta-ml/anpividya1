import { Configuration, OpenAIApi } from 'openai';

async function smartNotesController(req, res) {
  const { inputNote } = req.body;
  const configuration = new Configuration({
    apiKey: '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',
  });
  const openai = new OpenAIApi(configuration);

  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: inputNote,
      temperature: 0,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    res.status(200).json({ summary: response.data.choices[0].text.trimStart() });
  } catch (error) {
    res.status(400).json({ error });
  }

// console.log(response.data.choices[0].text);
}

export default smartNotesController;