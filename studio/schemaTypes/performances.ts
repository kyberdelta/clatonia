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
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'performanceType',
            title: 'Kategorie (Typ)',
            type: 'string',
            options: {
                list: [
                    { title: 'Šermdivadlo', value: 'theatre' },
                    { title: 'Ohňová show', value: 'fire' }
                ],
                layout: 'radio',
                direction: 'horizontal'
            },
            validation: (Rule) => Rule.required().error('Musíte vybrat, o jaký typ jde!'),
        }),
        defineField({
            name: 'isActive',
            title: 'Aktuálně hráno',
            type: 'boolean',
            description: 'Zapněte, pokud se má představení ukazovat na HLAVNÍ stránce. Vypnutá jdou jen do Historie.',
            initialValue: true,
        }),
        defineField({
            name: 'yearsActive',
            title: 'Roky uvádění (Období)',
            type: 'string',
            description: 'Např. "2015 - 2019" nebo "Od 2024".',
        }),
        defineField({
            name: 'description',
            title: 'Krátký popis programu',
            type: 'text',
        }),
        defineField({
            name: 'youtubeUrl',
            title: 'Odkaz na YouTube video',
            type: 'url',
        }),
        defineField({
            name: 'image',
            title: 'Ilustrační fotka',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'gallery',
            title: 'Fotogalerie',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: { hotspot: true }
                }
            ],
            description: 'Zde můžete nahrát více fotek najednou. Budou se zobrazovat pod popisem vystoupení.',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'yearsActive',
            type: 'performanceType',
            media: 'image'
        },
        prepare(selection) {
            const { title, subtitle, media } = selection;
            return {
                title: `${title}`,
                subtitle: subtitle,
                media: media
            }
        }
    }
})