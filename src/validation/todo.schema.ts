import {z} from "zod"
export const todoValidationSchema = z.object({
    id: z.string().describe("ID of todo"),
    title:z.string().describe("title of todo"),
    description: z.string().optional().describe("description of todo"),
    isCompleted: z.boolean().default(false).describe("todo is completed or not")
})

// mereko mere vakidations ke hisab se cahiye 
// export interface ITodo{
//     id: string
//     title: string
//     description?: string
//     isCompleted: boolean
// }

export type Todo =  z.infer<typeof todoValidationSchema>