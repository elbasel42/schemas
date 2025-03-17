import * as z from "zod";


export const HolidaySchema = z.object({
    "employee_id": z.string(),
    "holiday_status_id": z.string(),
    "date_from": z.string(),
    "date_to": z.string(),
    "substitute_employee_id": z.string(),
    "notes": z.string(),
    "attachment_ids": z.array(z.any()),
});
export type Holiday = z.infer<typeof HolidaySchema>;
