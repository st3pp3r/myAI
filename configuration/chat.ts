import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello UNC student, I'm ${AI_NAME} the Resume Builder! Whether you are looking for a fresh template or wanting to enhance your existing resume, I’m here to assist. I accel at Computer Science and Business resumes, but I can still provide guidance to anyone. Let me know how I can help or simply copy and paste your existing resume below to get started.`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, Ramses is having trouble generating a response. This may be an error by the system or due to improper testing. Please try again later.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `To save ramses from burning out, this message has been cut short... Ramses is refreshed now and you may keep chatting!`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
