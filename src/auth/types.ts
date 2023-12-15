export type JwtPayload = {
  email: string;
  userId: number;
};

export type JwtPayLoadWithRefreshToken = JwtPayload & { refreshToken: string };
