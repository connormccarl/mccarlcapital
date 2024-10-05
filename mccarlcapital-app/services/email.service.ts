import { fetchWrapper } from "@/lib";

const baseUrl = `${process.env.NEXT_PUBLIC_API_URI}/emails`;

export const emailService  = {
    sendEmail
};

async function sendEmail(type: string, contents: any) {
    let ext;
    switch(type) {
        case 'contact':
            ext = 'contact'
            break;
        default:
            ext = null;
    }

    if(!ext) return;

    await fetchWrapper.post(`${baseUrl}/${ext}`, contents);
}