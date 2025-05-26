import * as z from "zod";


export const NewsElementSchema = z.object({
    "id": z.number(),
    "published": z.boolean(),
    "title": z.string(),
    "image": z.string(),
    "image_file_name": z.string(),
    "attachment": z.boolean(),
    "attachment_file_name": z.boolean(),
    "resume": z.string(),
    "description": z.string(),
    "type": z.string(),
    "tag_ids": z.array(z.any()),
    "comment_ids": z.array(z.number()),
    "like_ids": z.array(z.number()),
    "create_uid": z.array(z.union([z.number(), z.string()])),
    "create_date": z.coerce.date(),
    "write_uid": z.array(z.union([z.number(), z.string()])),
    "write_date": z.coerce.date(),
    "display_name": z.string(),
    "__last_update": z.coerce.date(),
});
export type NewsElement = z.infer<typeof NewsElementSchema>;
