import { Message } from './message';

export interface Channel {
    id: number,
    title: string;
    messages: Message[],
}
