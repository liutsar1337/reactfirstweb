import PropTypes from 'prop-types'

function Card({ children, reverse }) {
    return (
        //We have 2 different styles in our css
        //card and card reverse
        //this is just the thing to select style from properties
        <div className={`card ${reverse && 'reverse'}`}>
            {children}
        </div>
    )
}

Card.defaultProps = {
    reverse: false,
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}

export default Card
