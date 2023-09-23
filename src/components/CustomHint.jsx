import '../styles/customHint.scss';

const CustomHint = ({ left, top, title, text }) => {
    return (
        <div
            className="hint"
            style={{
                left: left,
                top: top - 50 + 'px',
            }}
        >
            {title}
            <span>{text}</span>
        </div>
    );
};

export default CustomHint;
