const { Schema, model } = require('mongoose');

const ReporteSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    periodo: {
        fecha_inicio: {
            type: Date,
            required: true
        },
        fecha_fin: {
            type: Date,
            required: true
        }
    }
}, {
    timestamps: true,
    collection: 'reporte'
});

module.exports = model('reporte', ReporteSchema);