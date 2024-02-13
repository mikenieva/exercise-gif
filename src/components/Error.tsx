interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => <p>{message}</p>;

export default Error;
