import z from 'zod';

export const messageSchema=z.object({
 content:z.string()
 .min(10,'Conytent must be of 10 characters')
 .max(300,'conettect must no longer than 300')
})