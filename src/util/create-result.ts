export type ResultCreator = (options: {
  pass: boolean;
  passedMessage: () => string;
  notPassedMessage: () => string;
}) => {
  message: () => string;
  pass: boolean;
};

export const createResult: ResultCreator = ({ pass, passedMessage, notPassedMessage }) => ({
  message: () => (pass ? notPassedMessage() : passedMessage()).trim(),
  pass,
});
