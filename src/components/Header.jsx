import PropTypes from 'prop-types'


function Header({ custom, text, bgColor, textColor }) {
    const headerStyles = {
        backgroundColor: bgColor, color: textColor
    }
    return (
        <header style={headerStyles}>
            <div className="container">
                <h2>{custom} - {text}</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: 'Feedback UI',
    custom: 'Galiuliu',
    bgColor: 'white',
    textColor: 'black'
}

Header.propTypes = {
    text: PropTypes.string
}

export default Header

