import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'siteSettings',
    title: 'Nastavení webu',
    type: 'document',
    fieldsets: [
        { name: 'header', title: 'Nadpisy' },
        { name: 'hero', title: 'Hero sekce' },
        { name: 'contact', title: 'Kontaktní údaje' },
        { name: 'social', title: 'Sociální sítě' },
    ],
    fields: [


        defineField({ name: 'title', title: 'Název dokumentu (jen administrace)', type: 'string', initialValue: 'Hlavní nastavení webu' }),

        defineField({
            name: 'themeFont',
            title: 'Styl písma (Font)',
            description: 'Vyberte hlavní font pro webové stránky.',
            type: 'string',
            options: {
                list: [
                    { title: 'Klasický', value: 'font-classic' },
                    { title: 'Clatonia', value: 'font-clatonia' },
                ],
                layout: 'radio',
                direction: 'horizontal'
            },
            initialValue: 'font-modern',
            validation: Rule => Rule.required()
        }),

        // HEADER
        defineField({ name: 'groupName', title: 'Název spolku', type: 'string', fieldset: 'header' }),
        defineField({ name: 'logo', title: 'Logo spolku', type: 'image', fieldset: 'header' }),
        defineField({ name: 'titleAboutUs', title: 'Titulek "O nás"', type: 'string', fieldset: 'header' }),
        defineField({ name: 'titlePerformances', title: 'Titulek "Vystoupení"', type: 'string', fieldset: 'header' }),
        defineField({ name: 'titleCalendar', title: 'Titulek "Kalendář"', type: 'string', fieldset: 'header' }),
        defineField({ name: 'titleMembers', title: 'Titulek "Členové"', type: 'string', fieldset: 'header' }),
        defineField({ name: 'titleContact', title: 'Titulek "Kontakt"', type: 'string', fieldset: 'header' }),

        // HERO
        defineField({ name: 'heroImage', title: 'Obrázek na pozadí', type: 'image', options: { hotspot: true }, fieldset: 'hero' }),

        defineField({ name: 'tagline', title: 'Podtitulek', type: 'string' }),
        defineField({ name: 'aboutText', title: 'Text O nás', type: 'text' }),

        // --- KONTAKTY ---
        defineField({ name: 'email', title: 'E-mail', type: 'string', fieldset: 'contact' }),
        defineField({ name: 'phone', title: 'Telefon', type: 'string', fieldset: 'contact' }),
        defineField({ name: 'phoneContactName', title: 'Jméno kontaktní osoby', type: 'string', fieldset: 'contact' }),

        // --- SOCIÁLNÍ SÍTĚ ---
        defineField({ name: 'facebookUrl', title: 'Odkaz na Facebook', type: 'url', fieldset: 'social' }),
        defineField({ name: 'instagramUrl', title: 'Odkaz na Instagram', type: 'url', fieldset: 'social' }),
        defineField({ name: 'youtubeUrl', title: 'Odkaz na YouTube', type: 'url', fieldset: 'social' }),
    ],
})