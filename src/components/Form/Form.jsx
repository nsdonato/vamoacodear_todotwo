export const Form = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="add" placeholder="Agregar item..." />
            <button type="submit">Agregar</button>
        </form>
    )
}
