const ErrorMessage = ({ message }) => (
    <div style={{ color: 'red', padding: '10px', border: '1px solid red', marginBottom: '10px' }}>
        <strong>{message}</strong>
    </div>
);

export default ErrorMessage;