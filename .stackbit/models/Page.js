export const Page = {
    name: 'Page',
    type: 'page',
    urlPath: '/{slug}',
    filePath: 'src/{slug}/index.md',
    hideContent: true,
    fields: [
        {
            type: 'string',
            name: 'title',
            default: 'This is a new page',
            required: true
        },
        {
            type: 'list',
            name: 'blocks',
            items: { type: 'model', models: [], groups: ['SectionComponents'] }
        }
    ]
};
