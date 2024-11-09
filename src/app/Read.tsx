"use client";

import { useEffect, useState } from 'react';
import { ref, get } from "firebase/database";
import { realtimeDb } from '../lib/firebase'; // Import Realtime Database instance

export const Read = () => {
    const [fruitArray, setFruitArray] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const dbRef = ref(realtimeDb, 'TestText'); // Use Realtime Database reference
            const snapshot = await get(dbRef);
            if (snapshot.exists()) {
                setFruitArray(Object.values(snapshot.val())); // Convert values to an array
            } else {
                console.log("No data available");
            }
        };

        fetchData(); // Automatically fetch data when component mounts
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div>
            <div>Data: {fruitArray.join(', ')}</div> {/* Render as comma-separated text */}
        </div>
    );
};
