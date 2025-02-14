export const Button = {
    name: 'button',
    type: 'object',
    fields: [
        { type: 'string', name: 'text', default: 'Click Me', required: true },
        { type: 'string', name: 'url', label: 'URL', default: '/', required: true }
    ]
};