import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'performance',
    title: 'Vystoupení',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Název',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Krátký popis programu',
            type: 'text',
        }),
        defineField({
            name: 'image',
            title: 'Ilustrační fotka',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
})