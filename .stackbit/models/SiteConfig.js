export const SiteConfig = {
    name: 'SiteConfig',
    type: 'data',
    label: 'Site Config',
    singleInstance: true,
    filePath: '_data/site.json',
    fields: [
        { type: 'string', name: 'name', label: 'Site Title' }
    ]
};
