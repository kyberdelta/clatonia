import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'event',
    title: 'Akce',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Název akce',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'date',
            title: 'Datum konání',
            type: 'date',
            options: {
                dateFormat: 'D. M. YYYY',
            }
        }),
        defineField({
            name: 'time',
            title: 'Čas vystoupení',
            type: 'string',
            description: 'Např. "19:30", "14:00 - 18:00" nebo "Celý víkend"',
        }),
        defineField({
            name: 'location',
            title: 'Místo konání',
            type: 'string',
            description: 'Např. Hrad Švihov, Náměstí Klatovy',
        }),
        defineField({
            name: 'description',
            title: 'Krátký popis',
            type: 'text',
        }),
    ],
})