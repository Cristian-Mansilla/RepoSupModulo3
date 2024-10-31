export const Login = () => {
    return (
        <form action="">
            <div>
                <label htmlFor="Username"><input type="text" placeholder="Usuario..."/></label>
            </div>
            <div>
                <label htmlFor="Contraseña"><input type="password" placeholder="Contraseña..."/></label>
            </div>
            <div>
                <button type="submit">Logear</button>
            </div>
        </form>
    )
}