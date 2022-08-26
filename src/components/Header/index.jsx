function Header({ children, className, props }) {

    return (

        <header className={className} props={props}>
            {children}
        </header>
    )

}

export default Header