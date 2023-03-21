import { renderHook, act } from "@testing-library/react";
import { useForm } from "../../hooks/useForm";

describe('Pruebas en useForm', () => {
    const initialValues = {
        name: 'Victor',
        email: 'victor@correo.com'
    }

    test('Debe de regresar los valores por defecto', () => {
        const { result } = renderHook(() => useForm(initialValues));

        expect(result.current).toEqual({
            name: initialValues.name,
            email: initialValues.email,
            formState: initialValues,
            handleChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });
    });

    test('Debe de cambiar el valor de la propiedad name', () => {
        const { result } = renderHook(() => useForm(initialValues));
        const { handleChange } = result.current;

        act(() => {
            handleChange({ target: { name: 'name', value: 'Manuel' } });
        });


        expect(result.current.name).toBe('Manuel');
        expect(result.current.formState.name).toBe('Manuel');
    });

    test('Debe de realizar el reset del formulario', () => {
        const { result } = renderHook(() => useForm(initialValues));
        const { handleChange, onResetForm } = result.current;

        act(() => {
            handleChange({ target: { name: 'name', value: 'Manuel' }})
            onResetForm();
        });


        expect(result.current.name).toBe(initialValues.name);
        expect(result.current.formState.name).toBe(initialValues.name);
    });
});