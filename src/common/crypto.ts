import { hashSync } from 'bcrypt';
// export const hashPasswordTransform = {
//   async to(password: string): Promise<string> {
//     return await bcrypt.hashSync(password, 10);
//   },
//   from(hash: string): string {
//     return hash;
//   },
// };

export const hashPasswordTransform = {
  to(password: string): string {
    return hashSync(password, 10);
  },
  from(hash: string): string {
    return hash;
  },
};
