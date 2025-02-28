import { fetchResponse } from "./openAI";

export const getAIResponse = async (message: string) => {
  return await fetchResponse(message);
};
