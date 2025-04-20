const zod = require('zod');

const inputSchema = zod.object({
    title: zod.string().min(1),
    description: zod.string().min(1)
})

module.exports = {
    inputSchema
}