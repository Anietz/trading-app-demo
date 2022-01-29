

export const login = (email:string, password:string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (email === "" || password === "") {
            reject("Email or password is empty");
        }   else {
            resolve("Login success");
        }   }, 1000);   
    });
}