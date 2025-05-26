import * as z from "zod";


export const ProbationEvaluationEmployeeSchema = z.object({
    "id": z.number(),
    "name": z.string(),
    "display_name": z.string(),
});
export type ProbationEvaluationEmployee = z.infer<typeof ProbationEvaluationEmployeeSchema>;
