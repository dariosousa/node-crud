const mongoose = require('mongoose');
let schema = mongoose.Schema;

let personaSchema = new schema({
    id: { type: String },
    nombres: { type: String },
    apellidos: { type: String },
    edad: { type: Number, min: 0 }
}, { versionKey: false });

let Persona = mongoose.model('Personas', personaSchema);

module.exports = Persona;