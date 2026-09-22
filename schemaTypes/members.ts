import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'members',
    title: 'Členové',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Jméno a příjmení',
            type: 'string',
        }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Profilová fotka',
            type: 'image',
            options: { hotspot: true },
        }),
    ],
})