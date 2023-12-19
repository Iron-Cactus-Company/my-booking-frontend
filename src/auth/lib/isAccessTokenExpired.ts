export const isAccessTokenExpired = (expirationTimestamp: number): boolean => {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    return expirationTimestamp < currentTimestamp;
};