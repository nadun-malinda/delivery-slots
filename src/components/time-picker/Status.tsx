interface StatusProps {
  message: string;
}

export const Status = ({ message }: StatusProps) => {
  return <div className="flex items-center">{message}</div>;
};
