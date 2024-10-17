import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

const ConsultationsListScreen = () => {
    const [consultations, setConsultations] = useState([]);
    const userRole = 'user';

    useEffect(() => {
        const fetchConsultations = async () => {
            try {
                const response = await axios.get('/api/consultations');
                setConsultations(response.data.consultations);
            } catch (error) {
                console.error('Erro ao buscar consultas:', error);
            }
        };

        fetchConsultations();
    }, []);

    return (
        <View>
            <FlatList
                data={consultations}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.date} - {item.doctor} - {item.status}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default ConsultationsListScreen;