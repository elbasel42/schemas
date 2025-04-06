import * as z from "zod";


export const ChangeBankAccountElementSchema = z.object({
    "id": z.number(),
    "name": z.string(),
    "current_employee_account": z.string(),
    "employee_id": z.array(z.union([z.number(), z.string()])),
    "new_bank_id": z.array(z.union([z.number(), z.string()])),
    "iban": z.string(),
    "attachment_ids": z.array(z.number()),
    "account_status": z.union([z.boolean(), z.string()]),
    "state": z.string(),
    "order_date": z.string(),
    "refuse_reason": z.union([z.boolean(), z.string()]),
    "check_attachment": z.boolean(),
    "website_message_ids": z.array(z.any()),
    "message_follower_ids": z.array(z.number()),
    "message_ids": z.array(z.number()),
    "message_last_post": z.boolean(),
    "create_uid": z.array(z.union([z.number(), z.string()])),
    "create_date": z.coerce.date(),
    "write_uid": z.array(z.union([z.number(), z.string()])),
    "write_date": z.coerce.date(),
    "message_is_follower": z.boolean(),
    "message_partner_ids": z.array(z.number()),
    "message_channel_ids": z.array(z.any()),
    "message_unread": z.boolean(),
    "message_unread_counter": z.number(),
    "message_needaction": z.boolean(),
    "message_needaction_counter": z.number(),
    "display_name": z.string(),
    "__last_update": z.coerce.date(),
});
export type ChangeBankAccountElement = z.infer<typeof ChangeBankAccountElementSchema>;
