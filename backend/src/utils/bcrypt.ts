import bcrypt from "bcryptjs";

export const hashValue = async (value: string, salt: number = 10) => {
  return await bcrypt.hash(value, salt);
};

export const compareValue = async (value: string, hashedVal: string) => {
  return await bcrypt.compare(value, hashedVal);
};
