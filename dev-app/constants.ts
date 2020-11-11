export abstract class Constants {
    public static readonly isDev: boolean =
        process.env.NODE_ENV === "development";
    public static readonly apiURL: string =
        process.env.NODE_ENV === "development"
            ? "http://localhost:5000/"
            : "http://localhost:5000/";
    public static readonly siteURL: string =
        process.env.NODE_ENV === "development"
            ? "http://localhost:8000"
            : "http://localhost:5000/";

}

export default Constants;