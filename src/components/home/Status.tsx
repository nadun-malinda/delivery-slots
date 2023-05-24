interface StatusProps {
  message: string;
}

export const Status = ({ message }: StatusProps) => {
  return (
    <div className="flex h-full max-h-[calc(100%-44px)] items-center justify-center">
      {message}
    </div>
  );
};
