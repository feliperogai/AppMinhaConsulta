const express = require('express');
const router = express.Router();
const authorizeUser = require('../middleware/authorization');

const consultations = [
    {
        "consultations": [
            {
                "id": 1,
                "userId": 1,
                "date": "2024-10-10",
                "doctor": "Dra. Maria Oliveira",
                "specialty": "Cardiologia",
                "status": "Agendada",
                "username": "admin"
            },
            {
                "id": 2,
                "userId": 2,
                "date": "2024-10-12",
                "doctor": "Dr. Pedro Martins",
                "specialty": "Dermatologia",
                "status": "Confirmada",
                "username": "user1"
            },
            {
                "id": 4,
                "userId": 1,
                "date": "2024-10-18",
                "doctor": "Dr. Rafael Costa",
                "specialty": "Ginecologia",
                "status": "Cancelada",
                "username": "admin"
            },
            {
                "id": 5,
                "userId": 4,
                "date": "2024-10-20",
                "doctor": "Dra. Camila Silva",
                "specialty": "Pediatria",
                "status": "Agendada",
                "username": "user2"
            },
            {
                "id": 7,
                "userId": 4,
                "date": "2024-10-27",
                "doctor": "Dra. Claudia Maria Lopes",
                "specialty": "Gastro",
                "status": "Agendada",
                "username": "user1"
            }
        ]
    }
];

router.get('/consultations', authorizeUser, (req, res) => {
    const { role, userId } = req;

    let filteredConsultations;

    if (role === 'admin') {
        filteredConsultations = consultations; // Admin pode ver todas
    } else if (role === 'user') {
        filteredConsultations = consultations.filter(c => c.userId === userId); // Usuário vê apenas suas consultas
    } else {
        return res.status(403).json({ message: 'Acesso negado' });
    }

    res.json({ consultations: filteredConsultations });
});

module.exports = router;
