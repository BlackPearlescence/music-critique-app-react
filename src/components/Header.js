import NavigationBar from "./NavigationBar.js";

function Header({isDarkMode, onToggleDarkMode}) {
    return(
        <div>
            <NavigationBar
                isDarkMode={isDarkMode}
                onToggleDarkMode={onToggleDarkMode} />
        </div>
    );
}

export default Header;
