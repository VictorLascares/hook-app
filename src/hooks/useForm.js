import { useState } from "react";

export const useForm = ( initialForm ) => {
    const [formState, setFormState] = useState( initialForm );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => setFormState( initialForm );

    return {
        ...formState,
        formState,
        handleChange,
        onResetForm
    };
}