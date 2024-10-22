function isProduction(): boolean {
    return JSON.parse(process.env.NEXT_PUBLIC_IS_PRODUCTION || "false");
}

export default isProduction;
